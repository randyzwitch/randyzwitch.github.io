---
title: Building pyarrow with CUDA support
date: '2020-04-03'
author: Randy Zwitch
layout: post
permalink: /pyarrow-cuda-support/
description: Building pyarrow with CUDA support from source doesn't have to be confusing. Here's how to build pyarrow with CUDA support using virtualenv and Docker.
category: Programming
tags:
- Python
- CUDA

---

The other day I was looking to read an Arrow buffer on GPU using Python, but as far as I could tell, none of the provided pyarrow packages on conda or pip are built with CUDA support. Like many of the packages in the compiled-C-wrapped-by-Python ecosystem, [Apache Arrow](http://arrow.apache.org/) is thoroughly documented, but the number of permutations of how you could choose to build [pyarrow with CUDA support](http://arrow.apache.org/docs/developers/python.html#building-on-linux-and-macos) quickly becomes overwhelming.

In this post, I'll show how to build pyarrow with CUDA support on Ubuntu using Docker and [virtualenv](https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv). These directions are approximately the same as the official Apache Arrow docs, just that I explain them step-by-step and show only the single build toolchain I used.

## Step 1: Docker with GPU support

Even though I use Ubuntu 18.04 LTS on a workstation with an NVIDIA GPU, whenever I undertake a project like this, I like to use a Docker container to keep everything isolated. The last thing you want to do is to debug environment errors, changing dependencies for one project and breaking something else. Thankfully, [NVIDIA Docker developer images](https://hub.docker.com/r/nvidia/cuda/) are available via DockerHub:

```bash
docker run -it --gpus=all --rm nvidia/cuda:10.1-devel-ubuntu18.04 bash
```

Here, the `-it` flag puts us inside the container at a bash prompt, `--gpus=all` allows the Docker container to access my workstation's GPUs and `--rm` deletes the container after we're done to save space.

## Step 2: Setting up the Ubuntu Docker container

When you pull Docker containers from DockerHub, frequently they are bare-bones in terms of libraries included, and usually can also be updated. For building pyarrow, it's useful to install the following:

```bash
apt update && apt upgrade -y

apt install git \
wget \
libssl-dev \
autoconf \
flex \
bison \
llvm-7 \
clang \
cmake \
python3-pip \
libjemalloc-dev \
libboost-dev \
libboost-filesystem-dev \
libboost-system-dev \
libboost-regex-dev  \
python3-dev -y
```

In a later step, we'll use the Arrow third-party dependency script to ensure all needed dependencies are present, but these are a good start.

## Step 3: Cloning Apache Arrow from GitHub

Cloning Arrow from GitHub is pretty straightforward. The `git checkout apache-arrow-0.15.0` line is optional; I needed version 0.15.0 for the project I was exploring, but if you want to build from the master branch of Arrow, you can omit that line.

```bash
git clone https://github.com/apache/arrow.git /repos/arrow
cd /repos/arrow
git submodule init && git submodule update
git checkout apache-arrow-0.15.0
export PARQUET_TEST_DATA="${PWD}/cpp/submodules/parquet-testing/data"
export ARROW_TEST_DATA="${PWD}/testing/data"
```

## Step 4: Installing remaining Apache Arrow dependencies

As mentioned in Step 2, some of the dependencies for building Arrow are system-level and can be installed via apt. To ensure that we have all the remaining third-party dependencies, we can use the provided script in the Arrow repository:

```bash
pip3 install virtualenv
virtualenv pyarrow
source ./pyarrow/bin/activate
pip install six numpy pandas cython pytest hypothesis
mkdir dist
export ARROW_HOME=$(pwd)/dist
export LD_LIBRARY_PATH=$(pwd)/dist/lib:$LD_LIBRARY_PATH

cd cpp
./thirdparty/download_dependencies.sh $HOME/arrow-thirdparty
```

The script downloads all of the necessary libraries as well as sets environment variables that are picked up later, which is amazingly helpful.

## Step 5: Building Apache Arrow C++ library

pyarrow links to the Arrow C++ bindings, so it needs to be present before we can build the pyarrow wheel:

```bash
mkdir build && cd build

cmake -DCMAKE_INSTALL_PREFIX=$ARROW_HOME \
-DCMAKE_INSTALL_LIBDIR=lib \
-DARROW_FLIGHT=ON \
-DARROW_GANDIVA=ON \
-DARROW_ORC=ON \
-DARROW_WITH_BZ2=ON \
-DARROW_WITH_ZLIB=ON \
-DARROW_WITH_ZSTD=ON \
-DARROW_WITH_LZ4=ON \
-DARROW_WITH_SNAPPY=ON \
-DARROW_WITH_BROTLI=ON \
-DARROW_PARQUET=ON \
-DARROW_PYTHON=ON \
-DARROW_PLASMA=ON \
-DARROW_BUILD_TESTS=ON \
-DARROW_CUDA=ON \
..

make -j
make install
```

This is a pretty standard workflow for building a C or C++ library. We create a `build` directory, call `cmake` from inside of that directory to set up the options we want to use, then use `make` and then `make install` to compile and install the library, respectively. I chose all of the `-DARROW_*` options above just as a copy/paste from the Arrow documentation; Arrow doesn't take long to build using these options, but it's possibly the case that only `-DARROW_PYTHON=ON` and `-DARROW_CUDA=ON` are truly necessary to build pyarrow.

## Step 6: Building pyarrow wheel

With the Apache Arrow C++ bindings built, we can now build the Python wheel:

```bash
cd /repos/arrow/python
export PYARROW_WITH_PARQUET=1
export PYARROW_WITH_CUDA=1
python setup.py build_ext --build-type=release --bundle-arrow-cpp bdist_wheel
```

As cmake and make run, you'll eventually see the following in the build logs, which shows that we're getting the behavior we want:

```bash
cmake --build . --config release --
[  5%] Compiling Cython CXX source for _cuda...
[  5%] Built target _cuda_pyx
Scanning dependencies of target _cuda
[ 11%] Building CXX object CMakeFiles/_cuda.dir/_cuda.cpp.o
[ 16%] Linking CXX shared module release/_cuda.cpython-36m-x86_64-linux-gnu.so
[ 16%] Built target _cuda
```

When the process finishes, the final wheel will be in the `/repos/arrow/python/dist` directory.

## Step 7 (optional): Validate build

If you want to validate that your pyarrow wheel has CUDA installed, you can run the following:

```bash
(pyarrow) root@9260485caca3:/repos/arrow/python/dist# pip install pyarrow-0.15.1.dev0+g40d468e16.d20200402-cp36-cp36m-linux_x86_64.whl
Processing ./pyarrow-0.15.1.dev0+g40d468e16.d20200402-cp36-cp36m-linux_x86_64.whl
Requirement already satisfied: six>=1.0.0 in /repos/arrow/pyarrow/lib/python3.6/site-packages (from pyarrow==0.15.1.dev0+g40d468e16.d20200402) (1.14.0)
Requirement already satisfied: numpy>=1.14 in /repos/arrow/pyarrow/lib/python3.6/site-packages (from pyarrow==0.15.1.dev0+g40d468e16.d20200402) (1.18.2)
Installing collected packages: pyarrow
Successfully installed pyarrow-0.15.1.dev0+g40d468e16.d20200402
(pyarrow) root@9260485caca3:/repos/arrow/python/dist# python
Python 3.6.9 (default, Nov  7 2019, 10:44:02)
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from pyarrow import cuda
>>>
```

When the line `from pyarrow import cuda` runs without error, then we know that our pyarrow build with CUDA was successful.
