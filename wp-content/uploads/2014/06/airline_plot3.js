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
  g.attr("stroke", "none")
   .attr("fill", "#000000")
   .attr("stroke-width", 0.3)
   .attr("font-family", "Helvetic,Arial,sans")
   .style("font-size", "3.88px");
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
           .attr("x", 29.87)
           .attr("y", 92.16)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.append("tspan").text("-1×10")
          .append("tspan")
            .attr("dy", "-1ex")
          .call(function(text) {
            text.text("3");
          })
.append("tspan").attr("font-style", "normal")          ;
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 29.87)
           .attr("y", 137.17)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.append("tspan").text("-4×10")
          .append("tspan")
            .attr("dy", "-1ex")
          .call(function(text) {
            text.text("3");
          })
.append("tspan").attr("font-style", "normal")          ;
    })
;
      }(g.append("g")));
      g.append("svg:text")
         .attr("x", 29.87)
         .attr("y", 32.15)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.append("tspan").text("3×10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("3");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 29.87)
           .attr("y", -12.85)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.append("tspan").text("6×10")
          .append("tspan")
            .attr("dy", "-1ex")
          .call(function(text) {
            text.text("3");
          })
.append("tspan").attr("font-style", "normal")          ;
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 29.87)
           .attr("y", -42.86)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.append("tspan").text("8×10")
          .append("tspan")
            .attr("dy", "-1ex")
          .call(function(text) {
            text.text("3");
          })
.append("tspan").attr("font-style", "normal")          ;
    })
;
      }(g.append("g")));
      g.append("svg:text")
         .attr("x", 29.87)
         .attr("y", 17.15)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.append("tspan").text("4×10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("3");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
      g.append("svg:text")
         .attr("x", 29.87)
         .attr("y", 47.15)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.append("tspan").text("2×10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("3");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
      g.append("svg:text")
         .attr("x", 29.87)
         .attr("y", 62.16)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.append("tspan").text("1×10")
         .append("tspan")
           .attr("dy", "-1ex")
         .call(function(text) {
           text.text("3");
         })
.append("tspan").attr("font-style", "normal")         ;
   })
;
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 29.87)
           .attr("y", 107.16)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.append("tspan").text("-2×10")
          .append("tspan")
            .attr("dy", "-1ex")
          .call(function(text) {
            text.text("3");
          })
.append("tspan").attr("font-style", "normal")          ;
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 29.87)
           .attr("y", 2.15)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.append("tspan").text("5×10")
          .append("tspan")
            .attr("dy", "-1ex")
          .call(function(text) {
            text.text("3");
          })
.append("tspan").attr("font-style", "normal")          ;
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 29.87)
           .attr("y", 122.16)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.append("tspan").text("-3×10")
          .append("tspan")
            .attr("dy", "-1ex")
          .call(function(text) {
            text.text("3");
          })
.append("tspan").attr("font-style", "normal")          ;
    })
;
      }(g.append("g")));
      g.append("svg:text")
         .attr("x", 29.87)
         .attr("y", 77.16)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.text("0");
   })
;
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 29.87)
           .attr("y", -57.86)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.append("tspan").text("9×10")
          .append("tspan")
            .attr("dy", "-1ex")
          .call(function(text) {
            text.text("3");
          })
.append("tspan").attr("font-style", "normal")          ;
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 29.87)
           .attr("y", -27.86)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.append("tspan").text("7×10")
          .append("tspan")
            .attr("dy", "-1ex")
          .call(function(text) {
            text.text("3");
          })
.append("tspan").attr("font-style", "normal")          ;
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 29.87)
           .attr("y", 152.17)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.append("tspan").text("-5×10")
          .append("tspan")
            .attr("dy", "-1ex")
          .call(function(text) {
            text.text("3");
          })
.append("tspan").attr("font-style", "normal")          ;
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
         .attr("x", 9.18)
         .attr("y", 47.15)
         .attr("text-anchor", "middle")
         .style("dominant-baseline", "central")
         .attr("transform", "rotate(-90, 9.18, 47.15)")
         .call(function(text) {
     text.text("Flights In Air");
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
         .attr("x", 38.16)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("1");
   })
;
      g.append("svg:text")
         .attr("x", 91.56)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("12");
   })
;
      g.append("svg:text")
         .attr("x", 106.13)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("15");
   })
;
      g.append("svg:text")
         .attr("x", 101.27)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("14");
   })
;
      g.append("svg:text")
         .attr("x", 96.42)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("13");
   })
;
      g.append("svg:text")
         .attr("x", 144.97)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("23");
   })
;
      g.append("svg:text")
         .attr("x", 130.41)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("20");
   })
;
      g.append("svg:text")
         .attr("x", 57.58)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("5");
   })
;
      g.append("svg:text")
         .attr("x", 47.87)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("3");
   })
;
      g.append("svg:text")
         .attr("x", 52.72)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("4");
   })
;
      g.append("svg:text")
         .attr("x", 62.43)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("6");
   })
;
      g.append("svg:text")
         .attr("x", 140.12)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("22");
   })
;
      g.append("svg:text")
         .attr("x", 72.14)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("8");
   })
;
      g.append("svg:text")
         .attr("x", 115.84)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("17");
   })
;
      g.append("svg:text")
         .attr("x", 125.55)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("19");
   })
;
      g.append("svg:text")
         .attr("x", 81.85)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("10");
   })
;
      g.append("svg:text")
         .attr("x", 77)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("9");
   })
;
      g.append("svg:text")
         .attr("x", 67.29)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("7");
   })
;
      g.append("svg:text")
         .attr("x", 33.3)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("0");
   })
;
      g.append("svg:text")
         .attr("x", 135.26)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("21");
   })
;
      g.append("svg:text")
         .attr("x", 86.71)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("11");
   })
;
      g.append("svg:text")
         .attr("x", 110.99)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("16");
   })
;
      g.append("svg:text")
         .attr("x", 43.01)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("2");
   })
;
      g.append("svg:text")
         .attr("x", 120.7)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("18");
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "none")
       .attr("fill", "#362A35")
       .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
       .style("font-size", "3.88px");
      g.append("svg:text")
         .attr("x", 89.14)
         .attr("y", 94.6)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("Hour UTC");
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "none")
       .attr("fill", "#362A35")
       .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
       .style("font-size", "3.88px");
      g.append("svg:text")
         .attr("x", 89.14)
         .attr("y", 13.35)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("Number of Flights In Air To/From U.S. By Hour - 1987");
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
      .attr("d", " M30.87,15.35 L 147.4 15.35 147.4 78.96 30.87 78.96 z");g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
        (function (g) {
          g.attr("class", "guide background")
           .attr("stroke", "#F1F1F5")
           .attr("fill", "#FAFAFA")
           .attr("opacity", 1.00);
          g.append("svg:path")
             .attr("d", "M30.87,15.35 L 147.4 15.35 147.4 78.96 30.87 78.96 z");
        }(g.append("g")));
        (function (g) {
          g.attr("stroke", "#F0F0F3")
           .attr("stroke-width", 0.2)
           .attr("class", "guide ygridlines xfixed");
          g.append("svg:path")
             .attr("d", "M30.87,137.17 L 147.4 137.17");
          g.append("svg:path")
             .attr("d", "M30.87,-12.85 L 147.4 -12.85");
          g.append("svg:path")
             .attr("d", "M30.87,17.15 L 147.4 17.15");
          g.append("svg:path")
             .attr("d", "M30.87,62.16 L 147.4 62.16");
          g.append("svg:path")
             .attr("d", "M30.87,2.15 L 147.4 2.15");
          g.append("svg:path")
             .attr("d", "M30.87,77.16 L 147.4 77.16");
          g.append("svg:path")
             .attr("d", "M30.87,-27.86 L 147.4 -27.86");
          g.append("svg:path")
             .attr("d", "M30.87,152.17 L 147.4 152.17");
          g.append("svg:path")
             .attr("d", "M30.87,-57.86 L 147.4 -57.86");
          g.append("svg:path")
             .attr("d", "M30.87,122.16 L 147.4 122.16");
          g.append("svg:path")
             .attr("d", "M30.87,107.16 L 147.4 107.16");
          g.append("svg:path")
             .attr("d", "M30.87,47.15 L 147.4 47.15");
          g.append("svg:path")
             .attr("d", "M30.87,-42.86 L 147.4 -42.86");
          g.append("svg:path")
             .attr("d", "M30.87,32.15 L 147.4 32.15");
          g.append("svg:path")
             .attr("d", "M30.87,92.16 L 147.4 92.16");
        }(g.append("g")));
        (function (g) {
          g.attr("stroke", "#F0F0F3")
           .attr("stroke-width", 0.2)
           .attr("class", "guide xgridlines yfixed");
          g.append("svg:path")
             .attr("d", "M118.27,15.35 L 118.27 78.96");
          g.append("svg:path")
             .attr("d", "M79.43,15.35 L 79.43 78.96");
          g.append("svg:path")
             .attr("d", "M108.56,15.35 L 108.56 78.96");
          g.append("svg:path")
             .attr("d", "M89.14,15.35 L 89.14 78.96");
          g.append("svg:path")
             .attr("d", "M132.83,15.35 L 132.83 78.96");
          g.append("svg:path")
             .attr("d", "M35.73,15.35 L 35.73 78.96");
          g.append("svg:path")
             .attr("d", "M98.85,15.35 L 98.85 78.96");
          g.append("svg:path")
             .attr("d", "M127.98,15.35 L 127.98 78.96");
          g.append("svg:path")
             .attr("d", "M137.69,15.35 L 137.69 78.96");
          g.append("svg:path")
             .attr("d", "M84.28,15.35 L 84.28 78.96");
          g.append("svg:path")
             .attr("d", "M64.86,15.35 L 64.86 78.96");
          g.append("svg:path")
             .attr("d", "M60,15.35 L 60 78.96");
          g.append("svg:path")
             .attr("d", "M40.58,15.35 L 40.58 78.96");
          g.append("svg:path")
             .attr("d", "M55.15,15.35 L 55.15 78.96");
          g.append("svg:path")
             .attr("d", "M74.57,15.35 L 74.57 78.96");
          g.append("svg:path")
             .attr("d", "M50.29,15.35 L 50.29 78.96");
          g.append("svg:path")
             .attr("d", "M103.7,15.35 L 103.7 78.96");
          g.append("svg:path")
             .attr("d", "M93.99,15.35 L 93.99 78.96");
          g.append("svg:path")
             .attr("d", "M69.71,15.35 L 69.71 78.96");
          g.append("svg:path")
             .attr("d", "M113.41,15.35 L 113.41 78.96");
          g.append("svg:path")
             .attr("d", "M45.44,15.35 L 45.44 78.96");
          g.append("svg:path")
             .attr("d", "M142.54,15.35 L 142.54 78.96");
          g.append("svg:path")
             .attr("d", "M123.12,15.35 L 123.12 78.96");
        }(g.append("g")));
      }(g.append("g")));
      (function (g) {
        d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath1")
    .append("svg:path")
      .attr("d", " M30.87,15.35 L 147.4 15.35 147.4 78.96 30.87 78.96 z");g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
        (function (g) {
          g.attr("class", "plotpanel");
          (function (g) {
            g.attr("class", "geometry");
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 47.59).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 47.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 46.22).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 46.22).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 44.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 44.26).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 44.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 43.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 43.84).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M129.6,39.94 L 131.22 39.94");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M129.6,43.42 L 131.22 43.42");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M130.41,40.92 L 130.41 39.94");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M130.41,42.06 L 130.41 43.42");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M128.48,42.06 L 132.33 42.06 132.33 40.92 128.48 40.92 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 47.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 47.09).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 46.63).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 44.6).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 44.24).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 44.24).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 44.08).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 43.82).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 43.54).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M124.74,39.76 L 126.36 39.76");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M124.74,43.03 L 126.36 43.03");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M125.55,40.66 L 125.55 39.76");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M125.55,41.79 L 125.55 43.03");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M123.62,41.79 L 127.48 41.79 127.48 40.66 123.62 40.66 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 47.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 46.91).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 46.7).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 44.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 44.86).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 44.6).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 44.02).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M119.89,40.22 L 121.5 40.22");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M119.89,43.85 L 121.5 43.85");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M120.7,40.93 L 120.7 40.22");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M120.7,42.13 L 120.7 43.85");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M118.77,42.13 L 122.62 42.13 122.62 40.93 118.77 40.93 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 48.98).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 47.45).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 47.21).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 45.68).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 45.53).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 45.05).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 44.98).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M115.03,40.58 L 116.65 40.58");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M115.03,44.47 L 116.65 44.47");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M115.84,41.38 L 115.84 40.58");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M115.84,42.78 L 115.84 44.47");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M113.91,42.78 L 117.77 42.78 117.77 41.38 113.91 41.38 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 49.04).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 47.2).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 46.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 46.04).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 46.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 45.8).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M110.18,40.66 L 111.79 40.66");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M110.18,45.29 L 111.79 45.29");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M110.99,41.59 L 110.99 40.66");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M110.99,43.2 L 110.99 45.29");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M109.06,43.2 L 112.91 43.2 112.91 41.59 109.06 41.59 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 106.13).attr("cy", 51.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 106.13).attr("cy", 51.05).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 106.13).attr("cy", 49.7).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M105.32,41.54 L 106.94 41.54");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M105.32,48.58 L 106.94 48.58");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M106.13,42.43 L 106.13 41.54");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M106.13,45.04 L 106.13 48.58");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M104.2,45.04 L 108.06 45.04 108.06 42.43 104.2 42.43 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 76.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 61.35).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 59.29).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 59.26).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 59.02).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 58.71).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 58.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 58.62).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 58.59).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 58.54).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 58.54).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 58.48).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 58.29).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 58.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 58.2).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 58.14).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M95.61,52.42 L 97.23 52.42");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M95.61,57.97 L 97.23 57.97");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M96.42,52.93 L 96.42 52.42");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M96.42,54.99 L 96.42 57.97");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M94.49,54.99 L 98.35 54.99 98.35 52.93 94.49 52.93 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 76.89).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 67.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 65.61).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 65.59).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 65.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 65.25).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 65.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 65.19).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 65.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 65.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 65.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 65.01).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 64.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 64.96).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M90.75,60.99 L 92.37 60.99");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M90.75,64.63 L 92.37 64.63");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M91.56,61.24 L 91.56 60.99");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M91.56,62.68 L 91.56 64.63");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M89.64,62.68 L 93.49 62.68 93.49 61.24 89.64 61.24 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 86.71).attr("cy", 76.68).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 86.71).attr("cy", 73.9).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 86.71).attr("cy", 73.65).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M85.9,71.02 L 87.52 71.02");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M85.9,73.08 L 87.52 73.08");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M86.71,71.64 L 86.71 71.02");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M86.71,72.24 L 86.71 73.08");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M84.78,72.24 L 88.64 72.24 88.64 71.64 84.78 71.64 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 76.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 76).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 75.91).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 75.6).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 75.4).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 75.4).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 74.52).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 73.77).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.04,74.65 L 82.66 74.65");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.04,75.21 L 82.66 75.21");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.85,74.88 L 81.85 74.65");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.85,75.03 L 81.85 75.21");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M79.93,75.03 L 83.78 75.03 83.78 74.88 79.93 74.88 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 76.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 75.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 75.94).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 75.55).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 75.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 74.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 74.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 74.16).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 74.14).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 73.09).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M76.19,74.35 L 77.81 74.35");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M76.19,75.1 L 77.81 75.1");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M77,74.65 L 77 74.35");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M77,74.86 L 77 75.1");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M75.07,74.86 L 78.93 74.86 78.93 74.65 75.07 74.65 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 76.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 75.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 75.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 75.45).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 75.28).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 73.35).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 73.3).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 73.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 72.94).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M71.33,73.72 L 72.95 73.72");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M71.33,74.88 L 72.95 74.88");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M72.14,74.2 L 72.14 73.72");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M72.14,74.59 L 72.14 74.88");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M70.21,74.59 L 74.07 74.59 74.07 74.2 70.21 74.2 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 67.29).attr("cy", 76.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.29).attr("cy", 75.04).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.29).attr("cy", 71.8).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.29).attr("cy", 71.26).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M66.48,72.04 L 68.1 72.04");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M66.48,75 L 68.1 75");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M67.29,73.15 L 67.29 72.04");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M67.29,73.9 L 67.29 75");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M65.36,73.9 L 69.21 73.9 69.21 73.15 65.36 73.15 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 76.93).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 73.84).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 73.68).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 73.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 73).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 72.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 72.76).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 72.75).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 72.66).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 72.63).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 72.6).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 72.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 72.42).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 72.42).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 69.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 68.97).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 68.89).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 68.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 67.6).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M61.62,69.1 L 63.24 69.1");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M61.62,72.4 L 63.24 72.4");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M62.43,70.3 L 62.43 69.1");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M62.43,71.14 L 62.43 72.4");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M60.5,71.14 L 64.36 71.14 64.36 70.3 60.5 70.3 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 76.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 72.06).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 71.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 70.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 70.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 69.79).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 69.75).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 69.7).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 69.7).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 69.66).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 69.51).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 69.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 69.3).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 69.1).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 64.2).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 63.84).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 63.57).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 62.98).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M56.77,64.81 L 58.39 64.81");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M56.77,68.64 L 58.39 68.64");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M57.58,65.91 L 57.58 64.81");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M57.58,67.02 L 57.58 68.64");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M55.65,67.02 L 59.5 67.02 59.5 65.91 55.65 65.91 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 77.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 69.19).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 67.68).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 65.53).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 65.29).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 65.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 65.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 65.02).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 65.02).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 64.95).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 64.83).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 64.74).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 64.53).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 64.21).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 64.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 57.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 57.04).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 56.38).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M51.91,57.84 L 53.53 57.84");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M51.91,62.73 L 53.53 62.73");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M52.72,59.67 L 52.72 57.84");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M52.72,61.03 L 52.72 62.73");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M50.79,61.03 L 54.65 61.03 54.65 59.67 50.79 59.67 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 77.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 64.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 61.72).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 57.84).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 57.54).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 57.46).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 57.21).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 57.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 57.04).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 56.98).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 56.92).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 56.92).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 56.91).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 56.52).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 56.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 55.9).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 55.77).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 54.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 48.38).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M47.06,49.55 L 48.68 49.55");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M47.06,53.33 L 48.68 53.33");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M47.87,50.71 L 47.87 49.55");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M47.87,51.97 L 47.87 53.33");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M45.94,51.97 L 49.79 51.97 49.79 50.71 45.94 50.71 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 77.14).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 58.74).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 55.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 50.27).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 50.24).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 50.24).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 50.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 49.94).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 49.88).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 49.85).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 49.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 49.64).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 49.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 49.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 49.55).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 48.7).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M42.2,42.88 L 43.82 42.88");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M42.2,48.19 L 43.82 48.19");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M43.01,43.58 L 43.01 42.88");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M43.01,45.62 L 43.01 48.19");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M41.08,45.62 L 44.94 45.62 44.94 43.58 41.08 43.58 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 77.14).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 55.74).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 52.34).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 47.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 46.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 46.55).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 46.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 46.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 46.27).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 46.25).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 46.24).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 25.84).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M37.35,39.7 L 38.96 39.7");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M37.35,46.16 L 38.96 46.16");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M38.16,40.52 L 38.16 39.7");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M38.16,42.79 L 38.16 46.16");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M36.23,42.79 L 40.08 42.79 40.08 40.52 36.23 40.52 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 33.3).attr("cy", 77.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 33.3).attr("cy", 53.98).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 33.3).attr("cy", 51.01).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M32.49,38.93 L 34.11 38.93");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M32.49,45.86 L 34.11 45.86");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M33.3,39.7 L 33.3 38.93");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M33.3,42.52 L 33.3 45.86");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M31.37,42.52 L 35.23 42.52 35.23 39.7 31.37 39.7 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 144.97).attr("cy", 77.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 144.97).attr("cy", 52.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 144.97).attr("cy", 49.96).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M144.16,38.75 L 145.78 38.75");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M144.16,45.52 L 145.78 45.52");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M144.97,39.82 L 144.97 38.75");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M144.97,42.64 L 144.97 45.52");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M143.04,42.64 L 146.9 42.64 146.9 39.82 143.04 39.82 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 140.12).attr("cy", 77.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.12).attr("cy", 50.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.12).attr("cy", 49.43).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.12).attr("cy", 46.24).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.12).attr("cy", 45.82).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M139.31,39.85 L 140.93 39.85");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M139.31,45.43 L 140.93 45.43");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M140.12,40.45 L 140.12 39.85");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M140.12,42.53 L 140.12 45.43");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M138.19,42.53 L 142.04 42.53 142.04 40.45 138.19 40.45 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 135.26).attr("cy", 77.14).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 135.26).attr("cy", 48.2).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 135.26).attr("cy", 48.05).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 135.26).attr("cy", 47.32).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 135.26).attr("cy", 46.39).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 135.26).attr("cy", 44.99).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M134.45,40.24 L 136.07 40.24");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M134.45,44.66 L 136.07 44.66");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M135.26,41.15 L 135.26 40.24");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M135.26,42.68 L 135.26 44.66");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M133.33,42.68 L 137.19 42.68 137.19 41.15 133.33 41.15 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 77.14).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 77.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 56.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 55.2).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 54.16).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 53.42).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 53.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 52.82).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 52.66).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M100.47,46.13 L 102.08 46.13");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M100.47,52.55 L 102.08 52.55");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M101.27,46.74 L 101.27 46.13");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M101.27,49.09 L 101.27 52.55");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M99.35,49.09 L 103.2 49.09 103.2 46.74 99.35 46.74 z");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M129.6,41.36 L 131.22 41.36");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M124.74,41.1 L 126.36 41.1");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M119.89,41.41 L 121.5 41.41");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M115.03,41.78 L 116.65 41.78");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M110.18,42.17 L 111.79 42.17");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M105.32,43.22 L 106.94 43.22");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M95.61,53.53 L 97.23 53.53");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M90.75,61.63 L 92.37 61.63");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M85.9,71.82 L 87.52 71.82");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M81.04,74.97 L 82.66 74.97");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M76.19,74.79 L 77.81 74.79");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M71.33,74.46 L 72.95 74.46");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M66.48,73.6 L 68.1 73.6");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M61.62,70.77 L 63.24 70.77");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M56.77,66.45 L 58.39 66.45");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M51.91,60.43 L 53.53 60.43");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M47.06,51.08 L 48.68 51.08");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M42.2,43.93 L 43.82 43.93");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M37.35,41.09 L 38.96 41.09");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M32.49,40.22 L 34.11 40.22");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M144.16,40.25 L 145.78 40.25");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M139.31,41.02 L 140.93 41.02");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M134.45,41.6 L 136.07 41.6");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M100.47,47.43 L 102.08 47.43");
            }(g.append("g")));
          }(g.append("g")));
        }(g.append("g")));
      }(g.append("g")));
      (function (g) {
        d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath2")
    .append("svg:path")
      .attr("d", " M30.87,15.35 L 147.4 15.35 147.4 78.96 30.87 78.96 z");g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
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
               .attr("d", "M140.4,18.35 L 144.4 18.35 144.4 22.35 140.4 22.35 z");
            (function (g) {
              g.attr("fill", "#6A6A6A")
               .attr("class", "button_logo");
              g.append("svg:path")
                 .attr("d", "M141.2,19.95 L 142 19.95 142 19.15 142.8 19.15 142.8 19.95 143.6 19.95 143.6 20.75 142.8 20.75 142.8 21.55 142 21.55 142 20.75 141.2 20.75 z");
            }(g.append("g")));
          }(g.append("g")));
          (function (g) {
            g.attr("fill", "#EAEAEA")
             .on("click", zoomslider_track_behavior(ctx, 114.4, 131.4));
            g.append("svg:path")
               .attr("d", "M120.9,18.35 L 139.9 18.35 139.9 22.35 120.9 22.35 z");
          }(g.append("g")));
          (function (g) {
            g.attr("fill", "#6A6A6A")
             .attr("class", "zoomslider_thumb")
             .call(zoomslider_behavior(ctx, 114.4, 131.4))
.on("mouseover", zoomslider_thumb_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_thumb_mouseover("#6a6a6a"))
;
            g.append("svg:path")
               .attr("d", "M129.4,18.35 L 131.4 18.35 131.4 22.35 129.4 22.35 z");
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
               .attr("d", "M116.4,18.35 L 120.4 18.35 120.4 22.35 116.4 22.35 z");
            (function (g) {
              g.attr("fill", "#6A6A6A")
               .attr("class", "button_logo");
              g.append("svg:path")
                 .attr("d", "M117.2,19.95 L 119.6 19.95 119.6 20.75 117.2 20.75 z");
            }(g.append("g")));
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
];

var draw = function(parent_id) {
    draw_with_data(data, parent_id);
};

if ('undefined' !== typeof module) {
    module.exports = draw;
} else if ('undefined' !== typeof window) {
    window.draw = draw
}
