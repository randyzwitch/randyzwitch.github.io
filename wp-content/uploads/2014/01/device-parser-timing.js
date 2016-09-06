function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "152.4mm")
              .attr("height", "101.6mm")
              .attr("viewBox", "0 0 152.4 101.6")
              .attr("stroke-width", "0.5")
              .attr("style", "stroke:black;fill:black");
  g.append("defs");
  var ctx = {
      "scale": 1.0,
      "tx": 0.0,
      "ty": 0.0
  };
(function (g) {
  g.attr("class", "plotroot xscalable yscalable");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.18px")
     .attr("class", "guide ylabels");
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.24)
         .attr("y", 178.4)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("-20");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 19.24)
       .attr("y", 14.84)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
      .call(function(text) {
    text.append("tspan").text("10")
        .append("tspan")
          .attr("dy", "-1ex")
        .call(function(text) {
          text.text("5");
        })
.append("tspan").attr("font-style", "normal")        ;
  })
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.24)
         .attr("y", 112.98)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("-10");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.24)
         .attr("y", 145.69)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("-15");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 19.24)
       .attr("y", 80.27)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
      .call(function(text) {
    text.append("tspan").text("10")
        .append("tspan")
          .attr("dy", "-1ex")
        .call(function(text) {
          text.text("-5");
        })
.append("tspan").attr("font-style", "normal")        ;
  })
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.24)
         .attr("y", -17.87)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("10");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.24)
         .attr("y", -50.58)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("15");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.24)
         .attr("y", -83.29)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("20");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 19.24)
       .attr("y", 47.56)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
      .call(function(text) {
    text.append("tspan").text("10")
        .append("tspan")
          .attr("dy", "-1ex")
        .call(function(text) {
          text.text("0");
        })
.append("tspan").attr("font-style", "normal")        ;
  })
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.88px");
    g.append("svg:text")
       .attr("x", 7.94)
       .attr("y", 47.56)
       .attr("text-anchor", "middle")
       .style("dominant-baseline", "central")
       .attr("transform", "rotate(-90, 7.94, 47.56)")
      .call(function(text) {
    text.text("(log) Time");
  })
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.18px")
     .attr("class", "guide xlabels");
    g.append("svg:text")
       .attr("x", 48.82)
       .attr("y", 87.72)
       .attr("text-anchor", "middle")
      .call(function(text) {
    text.append("tspan").text("10")
        .append("tspan")
          .attr("dy", "-1ex")
        .call(function(text) {
          text.text("2");
        })
.append("tspan").attr("font-style", "normal")        ;
  })
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -27.74)
         .attr("y", 87.72)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("-4");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 252.95)
         .attr("y", 87.72)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("18");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 150.88)
         .attr("y", 87.72)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("10");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -2.22)
         .attr("y", 87.72)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("-2");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -53.25)
         .attr("y", 87.72)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("-6");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -104.29)
         .attr("y", 87.72)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("-10");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 201.92)
         .attr("y", 87.72)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("14");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 74.33)
       .attr("y", 87.72)
       .attr("text-anchor", "middle")
      .call(function(text) {
    text.append("tspan").text("10")
        .append("tspan")
          .attr("dy", "-1ex")
        .call(function(text) {
          text.text("4");
        })
.append("tspan").attr("font-style", "normal")        ;
  })
;
    g.append("svg:text")
       .attr("x", 125.37)
       .attr("y", 87.72)
       .attr("text-anchor", "middle")
      .call(function(text) {
    text.append("tspan").text("10")
        .append("tspan")
          .attr("dy", "-1ex")
        .call(function(text) {
          text.text("8");
        })
.append("tspan").attr("font-style", "normal")        ;
  })
;
    g.append("svg:text")
       .attr("x", 99.85)
       .attr("y", 87.72)
       .attr("text-anchor", "middle")
      .call(function(text) {
    text.append("tspan").text("10")
        .append("tspan")
          .attr("dy", "-1ex")
        .call(function(text) {
          text.text("6");
        })
.append("tspan").attr("font-style", "normal")        ;
  })
;
    g.append("svg:text")
       .attr("x", 23.3)
       .attr("y", 87.72)
       .attr("text-anchor", "middle")
      .call(function(text) {
    text.append("tspan").text("10")
        .append("tspan")
          .attr("dy", "-1ex")
        .call(function(text) {
          text.text("0");
        })
.append("tspan").attr("font-style", "normal")        ;
  })
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -78.77)
         .attr("y", 87.72)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("-8");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 176.4)
         .attr("y", 87.72)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("12");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 227.44)
         .attr("y", 87.72)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.append("tspan").text("10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("16");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.88px");
    g.append("svg:text")
       .attr("x", 74.33)
       .attr("y", 94.6)
       .attr("text-anchor", "middle")
      .call(function(text) {
    text.text("Number of user-agent strings parsed");
  })
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.88px")
     .attr("fill", "#362A35");
    g.append("svg:text")
       .attr("x", 139.91)
       .attr("y", 46.32)
       .attr("text-anchor", "middle")
      .call(function(text) {
    text.text("language");
  })
;
  }(g.append("g")));
  (function (g) {
    g.attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.18px");
    (function (g) {
      g.attr("class", "guide color_Julia")
       .on("click", guide_toggle_color("color_Julia"));
      (function (g) {
        g.attr("fill", "#00BFFF")
         .attr("stroke", "#0096DD")
         .attr("stroke-width", 0.3);
        g.append("svg:path")
           .attr("d", "M130.43,48.32 L 133.6 48.32 133.6 51.5 130.43 51.5 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "none")
         .attr("fill", "#4C404B");
        g.append("svg:text")
           .attr("x", 134.6)
           .attr("y", 49.91)
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.text("Julia");
    })
;
      }(g.append("g")));
    }(g.append("g")));
    (function (g) {
      g.attr("class", "guide color_Python")
       .on("click", guide_toggle_color("color_Python"));
      (function (g) {
        g.attr("fill", "#D4CA3A")
         .attr("stroke", "#A8A200")
         .attr("stroke-width", 0.3);
        g.append("svg:path")
           .attr("d", "M130.43,52.5 L 133.6 52.5 133.6 55.67 130.43 55.67 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "none")
         .attr("fill", "#4C404B");
        g.append("svg:text")
           .attr("x", 134.6)
           .attr("y", 54.08)
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.text("Python");
    })
;
      }(g.append("g")));
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.88px");
    g.append("svg:text")
       .attr("x", 74.33)
       .attr("y", 10.88)
       .attr("text-anchor", "middle")
      .call(function(text) {
    text.text("Python vs. Julia - Timings of DeviceParser");
  })
;
  }(g.append("g")));
  (function (g) {
    g.on("mouseover", guide_background_mouseover("#C6C6C9"))
     .on("mouseout", guide_background_mouseout("#F0F0F3"))
     .call(zoom_behavior(ctx))
;
    (function (g) {
      d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath0")
    .append("svg:path")
      .attr("d", " M20.24,12.88 L 128.43 12.88 128.43 82.23 20.24 82.23 z");g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
      (function (g) {
        g.attr("class", "guide background")
         .attr("stroke", "#A9A9A9")
         .attr("fill", "#FAFAFA");
        g.append("svg:path")
           .attr("d", "M20.24,12.88 L 128.43 12.88 128.43 82.23 20.24 82.23 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "#F0F0F3")
         .attr("stroke-width", 0)
         .attr("class", "guide ygridlines xfixed");
        g.append("svg:path")
           .attr("d", "M20.24,14.84 L 128.43 14.84");
        g.append("svg:path")
           .attr("d", "M20.24,145.69 L 128.43 145.69");
        g.append("svg:path")
           .attr("d", "M20.24,-17.87 L 128.43 -17.87");
        g.append("svg:path")
           .attr("d", "M20.24,-83.29 L 128.43 -83.29");
        g.append("svg:path")
           .attr("d", "M20.24,47.56 L 128.43 47.56");
        g.append("svg:path")
           .attr("d", "M20.24,-50.58 L 128.43 -50.58");
        g.append("svg:path")
           .attr("d", "M20.24,80.27 L 128.43 80.27");
        g.append("svg:path")
           .attr("d", "M20.24,112.98 L 128.43 112.98");
        g.append("svg:path")
           .attr("d", "M20.24,178.4 L 128.43 178.4");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "#F0F0F3")
         .attr("stroke-width", 0)
         .attr("class", "guide xgridlines yfixed");
        g.append("svg:path")
           .attr("d", "M-27.74,12.88 L -27.74 82.23");
        g.append("svg:path")
           .attr("d", "M150.88,12.88 L 150.88 82.23");
        g.append("svg:path")
           .attr("d", "M-53.25,12.88 L -53.25 82.23");
        g.append("svg:path")
           .attr("d", "M201.92,12.88 L 201.92 82.23");
        g.append("svg:path")
           .attr("d", "M125.37,12.88 L 125.37 82.23");
        g.append("svg:path")
           .attr("d", "M23.3,12.88 L 23.3 82.23");
        g.append("svg:path")
           .attr("d", "M176.4,12.88 L 176.4 82.23");
        g.append("svg:path")
           .attr("d", "M227.44,12.88 L 227.44 82.23");
        g.append("svg:path")
           .attr("d", "M-78.77,12.88 L -78.77 82.23");
        g.append("svg:path")
           .attr("d", "M99.85,12.88 L 99.85 82.23");
        g.append("svg:path")
           .attr("d", "M74.33,12.88 L 74.33 82.23");
        g.append("svg:path")
           .attr("d", "M-104.29,12.88 L -104.29 82.23");
        g.append("svg:path")
           .attr("d", "M-2.22,12.88 L -2.22 82.23");
        g.append("svg:path")
           .attr("d", "M252.95,12.88 L 252.95 82.23");
        g.append("svg:path")
           .attr("d", "M48.82,12.88 L 48.82 82.23");
      }(g.append("g")));
    }(g.append("g")));
    (function (g) {
      d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath1")
    .append("svg:path")
      .attr("d", " M20.24,12.88 L 128.43 12.88 128.43 82.23 20.24 82.23 z");g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
      (function (g) {
        g.attr("class", "plotpanel");
        (function (g) {
          g.attr("fill", "none")
           .attr("stroke-width", 0.79);
          (function (g) {
            g.attr("stroke", "#00BFFF")
             .attr("class", "geometry color_Julia");
            g.append("svg:path")
               .attr("d", "M23.3,70.59 L 36.06 57.81 61.57 46.83 74.33 40.23 87.09 33.66 99.85 26.91 112.61 18.86");
          }(g.append("g")));
          (function (g) {
            g.attr("stroke", "#D4CA3A")
             .attr("class", "geometry color_Python");
            g.append("svg:path")
               .attr("d", "M23.3,68.95 L 36.06 58.41 61.57 52.54 74.33 46.28 87.09 39.77 99.85 33.2 112.61 26.61");
          }(g.append("g")));
        }(g.append("g")));
        (function (g) {
          g.attr("stroke-width", 0.79);
          (function (g) {
            g.attr("stroke-width", 0.79);
g.selectAll("form0")
                  .data(d3.zip(data[0],data[1],data[2],data[3],data[4]))
                  .enter()
                  .append("circle")
.attr("cx", function(d) { return d[0]; })
.attr("cy", function(d) { return d[1]; })
.attr("r", 0.6)
.attr("class", function(d) { return d[2]; })
.on("mouseout", geom_point_mouseout(10.00, 1.32), false)
.on("mouseover", geom_point_mouseover(10.00, 1.32), false)
.attr("stroke", function(d) { return d[3]; })
.attr("fill", function(d, i) { return d[4]; })
;
          }(g.append("g")));
        }(g.append("g")));
      }(g.append("g")));
    }(g.append("g")));
    (function (g) {
      d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath2")
    .append("svg:path")
      .attr("d", " M20.24,12.88 L 128.43 12.88 128.43 82.23 20.24 82.23 z");g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
      (function (g) {
        g.attr("stroke", "none")
         .attr("class", "guide zoomslider")
         .attr("opacity", 0.00);
        (function (g) {
          g.attr("stroke", "#6A6A6A")
           .attr("stroke-opacity", 0.00)
           .attr("stroke-width", 0.3)
           .attr("fill", "#EAEAEA")
           .on("click", zoomin_behavior(ctx))
.on("dblclick", function() { d3.event.stopPropagation(); })
.on("mouseover", zoomslider_button_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_button_mouseover("#6a6a6a"))
;
          g.append("svg:path")
             .attr("d", "M121.43,15.88 L 125.43 15.88 125.43 19.88 121.43 19.88 z");
          (function (g) {
            g.attr("fill", "#6A6A6A")
             .attr("class", "button_logo");
            g.append("svg:path")
               .attr("d", "M122.23,17.48 L 123.03 17.48 123.03 16.68 123.83 16.68 123.83 17.48 124.63 17.48 124.63 18.28 123.83 18.28 123.83 19.08 123.03 19.08 123.03 18.28 122.23 18.28 z");
          }(g.append("g")));
        }(g.append("g")));
        (function (g) {
          g.attr("fill", "#EAEAEA")
           .on("click", zoomslider_track_behavior(ctx, 95.43, 112.43));
          g.append("svg:path")
             .attr("d", "M101.93,15.88 L 120.93 15.88 120.93 19.88 101.93 19.88 z");
        }(g.append("g")));
        (function (g) {
          g.attr("fill", "#6A6A6A")
           .attr("class", "zoomslider_thumb")
           .call(zoomslider_behavior(ctx, 95.43, 112.43))
.on("mouseover", zoomslider_thumb_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_thumb_mouseover("#6a6a6a"))
;
          g.append("svg:path")
             .attr("d", "M110.43,15.88 L 112.43 15.88 112.43 19.88 110.43 19.88 z");
        }(g.append("g")));
        (function (g) {
          g.attr("stroke", "#6A6A6A")
           .attr("stroke-opacity", 0.00)
           .attr("stroke-width", 0.3)
           .attr("fill", "#EAEAEA")
           .on("click", zoomout_behavior(ctx))
.on("dblclick", function() { d3.event.stopPropagation(); })
.on("mouseover", zoomslider_button_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_button_mouseover("#6a6a6a"))
;
          g.append("svg:path")
             .attr("d", "M97.43,15.88 L 101.43 15.88 101.43 19.88 97.43 19.88 z");
          (function (g) {
            g.attr("fill", "#6A6A6A")
             .attr("class", "button_logo");
            g.append("svg:path")
               .attr("d", "M98.23,17.48 L 100.63 17.48 100.63 18.28 98.23 18.28 z");
          }(g.append("g")));
        }(g.append("g")));
      }(g.append("g")));
    }(g.append("g")));
  }(g.append("g")));
}(g.append("g")));
    d3.select(parent_id)
      .selectAll("path")
      .each(function() {
          var sw = parseFloat(window.getComputedStyle(this).getPropertyValue("stroke-width"));
          d3.select(this)
            .attr("vector-effect", "non-scaling-stroke")
            .style("stroke-width", sw + "mm");
      });
}

var data = [
  [23.298581066971302,36.05715452310174,61.57430143536261,74.33287489149305,87.09144834762348,99.8500218037539,112.60859525988434,23.298581066971302,36.05715452310174,61.57430143536261,74.33287489149305,87.09144834762348,99.8500218037539,112.60859525988434],
  [68.94908243513244,58.40721282337528,52.53931614535347,46.280668085610166,39.769200095669305,33.202534677238326,26.61128621354169,70.59267540569616,57.81013990480732,46.827446366334264,40.22978959957921,33.66119013896897,26.910203154971583,18.85688846170991],
  ["geometry color_Python","geometry color_Python","geometry color_Python","geometry color_Python","geometry color_Python","geometry color_Python","geometry color_Python","geometry color_Julia","geometry color_Julia","geometry color_Julia","geometry color_Julia","geometry color_Julia","geometry color_Julia","geometry color_Julia"],
  ["#A8A200","#A8A200","#A8A200","#A8A200","#A8A200","#A8A200","#A8A200","#0096DD","#0096DD","#0096DD","#0096DD","#0096DD","#0096DD","#0096DD"],
  ["#D4CA3A","#D4CA3A","#D4CA3A","#D4CA3A","#D4CA3A","#D4CA3A","#D4CA3A","#00BFFF","#00BFFF","#00BFFF","#00BFFF","#00BFFF","#00BFFF","#00BFFF"]];

var draw = function(parent_id) {
    draw_with_data(data, parent_id);
};

if ('undefined' !== typeof module) {
    module.exports = draw;
} else if ('undefined' !== typeof window) {
    window.draw = draw
}
