function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "177.8mm")
              .attr("height", "101.6mm")
              .attr("viewBox", "0 0 177.8 101.6")
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
         .attr("x", 39.74)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("1");
   })
;
      g.append("svg:text")
         .attr("x", 104.79)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("12");
   })
;
      g.append("svg:text")
         .attr("x", 122.53)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("15");
   })
;
      g.append("svg:text")
         .attr("x", 116.62)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("14");
   })
;
      g.append("svg:text")
         .attr("x", 110.71)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("13");
   })
;
      g.append("svg:text")
         .attr("x", 169.84)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("23");
   })
;
      g.append("svg:text")
         .attr("x", 152.1)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("20");
   })
;
      g.append("svg:text")
         .attr("x", 63.4)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("5");
   })
;
      g.append("svg:text")
         .attr("x", 51.57)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("3");
   })
;
      g.append("svg:text")
         .attr("x", 57.48)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("4");
   })
;
      g.append("svg:text")
         .attr("x", 69.31)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("6");
   })
;
      g.append("svg:text")
         .attr("x", 163.93)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("22");
   })
;
      g.append("svg:text")
         .attr("x", 81.14)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("8");
   })
;
      g.append("svg:text")
         .attr("x", 134.36)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("17");
   })
;
      g.append("svg:text")
         .attr("x", 146.19)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("19");
   })
;
      g.append("svg:text")
         .attr("x", 92.97)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("10");
   })
;
      g.append("svg:text")
         .attr("x", 87.05)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("9");
   })
;
      g.append("svg:text")
         .attr("x", 75.22)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("7");
   })
;
      g.append("svg:text")
         .attr("x", 33.83)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("0");
   })
;
      g.append("svg:text")
         .attr("x", 158.02)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("21");
   })
;
      g.append("svg:text")
         .attr("x", 98.88)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("11");
   })
;
      g.append("svg:text")
         .attr("x", 128.45)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("16");
   })
;
      g.append("svg:text")
         .attr("x", 45.66)
         .attr("y", 85.25)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("2");
   })
;
      g.append("svg:text")
         .attr("x", 140.27)
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
         .attr("x", 101.84)
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
         .attr("x", 101.84)
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
      .attr("d", " M30.87,15.35 L 172.8 15.35 172.8 78.96 30.87 78.96 z");g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
        (function (g) {
          g.attr("class", "guide background")
           .attr("stroke", "#F1F1F5")
           .attr("fill", "#FAFAFA")
           .attr("opacity", 1.00);
          g.append("svg:path")
             .attr("d", "M30.87,15.35 L 172.8 15.35 172.8 78.96 30.87 78.96 z");
        }(g.append("g")));
        (function (g) {
          g.attr("stroke", "#F0F0F3")
           .attr("stroke-width", 0.2)
           .attr("class", "guide ygridlines xfixed");
          g.append("svg:path")
             .attr("d", "M30.87,137.17 L 172.8 137.17");
          g.append("svg:path")
             .attr("d", "M30.87,-12.85 L 172.8 -12.85");
          g.append("svg:path")
             .attr("d", "M30.87,17.15 L 172.8 17.15");
          g.append("svg:path")
             .attr("d", "M30.87,62.16 L 172.8 62.16");
          g.append("svg:path")
             .attr("d", "M30.87,2.15 L 172.8 2.15");
          g.append("svg:path")
             .attr("d", "M30.87,77.16 L 172.8 77.16");
          g.append("svg:path")
             .attr("d", "M30.87,-27.86 L 172.8 -27.86");
          g.append("svg:path")
             .attr("d", "M30.87,152.17 L 172.8 152.17");
          g.append("svg:path")
             .attr("d", "M30.87,-57.86 L 172.8 -57.86");
          g.append("svg:path")
             .attr("d", "M30.87,122.16 L 172.8 122.16");
          g.append("svg:path")
             .attr("d", "M30.87,107.16 L 172.8 107.16");
          g.append("svg:path")
             .attr("d", "M30.87,47.15 L 172.8 47.15");
          g.append("svg:path")
             .attr("d", "M30.87,-42.86 L 172.8 -42.86");
          g.append("svg:path")
             .attr("d", "M30.87,32.15 L 172.8 32.15");
          g.append("svg:path")
             .attr("d", "M30.87,92.16 L 172.8 92.16");
        }(g.append("g")));
        (function (g) {
          g.attr("stroke", "#F0F0F3")
           .attr("stroke-width", 0.2)
           .attr("class", "guide xgridlines yfixed");
          g.append("svg:path")
             .attr("d", "M137.32,15.35 L 137.32 78.96");
          g.append("svg:path")
             .attr("d", "M90.01,15.35 L 90.01 78.96");
          g.append("svg:path")
             .attr("d", "M125.49,15.35 L 125.49 78.96");
          g.append("svg:path")
             .attr("d", "M101.84,15.35 L 101.84 78.96");
          g.append("svg:path")
             .attr("d", "M155.06,15.35 L 155.06 78.96");
          g.append("svg:path")
             .attr("d", "M36.79,15.35 L 36.79 78.96");
          g.append("svg:path")
             .attr("d", "M113.66,15.35 L 113.66 78.96");
          g.append("svg:path")
             .attr("d", "M149.15,15.35 L 149.15 78.96");
          g.append("svg:path")
             .attr("d", "M160.97,15.35 L 160.97 78.96");
          g.append("svg:path")
             .attr("d", "M95.92,15.35 L 95.92 78.96");
          g.append("svg:path")
             .attr("d", "M72.27,15.35 L 72.27 78.96");
          g.append("svg:path")
             .attr("d", "M66.35,15.35 L 66.35 78.96");
          g.append("svg:path")
             .attr("d", "M42.7,15.35 L 42.7 78.96");
          g.append("svg:path")
             .attr("d", "M60.44,15.35 L 60.44 78.96");
          g.append("svg:path")
             .attr("d", "M84.1,15.35 L 84.1 78.96");
          g.append("svg:path")
             .attr("d", "M54.53,15.35 L 54.53 78.96");
          g.append("svg:path")
             .attr("d", "M119.58,15.35 L 119.58 78.96");
          g.append("svg:path")
             .attr("d", "M107.75,15.35 L 107.75 78.96");
          g.append("svg:path")
             .attr("d", "M78.18,15.35 L 78.18 78.96");
          g.append("svg:path")
             .attr("d", "M131.4,15.35 L 131.4 78.96");
          g.append("svg:path")
             .attr("d", "M48.61,15.35 L 48.61 78.96");
          g.append("svg:path")
             .attr("d", "M166.89,15.35 L 166.89 78.96");
          g.append("svg:path")
             .attr("d", "M143.23,15.35 L 143.23 78.96");
        }(g.append("g")));
      }(g.append("g")));
      (function (g) {
        d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath1")
    .append("svg:path")
      .attr("d", " M30.87,15.35 L 172.8 15.35 172.8 78.96 30.87 78.96 z");g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
        (function (g) {
          g.attr("class", "plotpanel");
          (function (g) {
            g.attr("class", "geometry");
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 152.1).attr("cy", 47.59).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 152.1).attr("cy", 47.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 152.1).attr("cy", 46.22).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 152.1).attr("cy", 46.22).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 152.1).attr("cy", 44.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 152.1).attr("cy", 44.26).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 152.1).attr("cy", 44.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 152.1).attr("cy", 43.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 152.1).attr("cy", 43.84).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M151.12,39.94 L 153.09 39.94");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M151.12,43.42 L 153.09 43.42");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M152.1,40.92 L 152.1 39.94");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M152.1,42.06 L 152.1 43.42");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M149.65,42.06 L 154.56 42.06 154.56 40.92 149.65 40.92 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 146.19).attr("cy", 47.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 146.19).attr("cy", 47.09).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 146.19).attr("cy", 46.63).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 146.19).attr("cy", 44.6).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 146.19).attr("cy", 44.24).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 146.19).attr("cy", 44.24).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 146.19).attr("cy", 44.08).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 146.19).attr("cy", 43.82).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 146.19).attr("cy", 43.54).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M145.2,39.76 L 147.17 39.76");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M145.2,43.03 L 147.17 43.03");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M146.19,40.66 L 146.19 39.76");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M146.19,41.79 L 146.19 43.03");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M143.73,41.79 L 148.65 41.79 148.65 40.66 143.73 40.66 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 140.27).attr("cy", 47.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.27).attr("cy", 46.91).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.27).attr("cy", 46.7).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.27).attr("cy", 44.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.27).attr("cy", 44.86).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.27).attr("cy", 44.6).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.27).attr("cy", 44.02).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M139.29,40.22 L 141.26 40.22");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M139.29,43.85 L 141.26 43.85");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M140.27,40.93 L 140.27 40.22");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M140.27,42.13 L 140.27 43.85");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M137.82,42.13 L 142.73 42.13 142.73 40.93 137.82 40.93 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 134.36).attr("cy", 48.98).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 134.36).attr("cy", 47.45).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 134.36).attr("cy", 47.21).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 134.36).attr("cy", 45.68).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 134.36).attr("cy", 45.53).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 134.36).attr("cy", 45.05).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 134.36).attr("cy", 44.98).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M133.38,40.58 L 135.35 40.58");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M133.38,44.47 L 135.35 44.47");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M134.36,41.38 L 134.36 40.58");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M134.36,42.78 L 134.36 44.47");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M131.9,42.78 L 136.82 42.78 136.82 41.38 131.9 41.38 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 128.45).attr("cy", 49.04).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 128.45).attr("cy", 49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 128.45).attr("cy", 47.2).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 128.45).attr("cy", 46.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 128.45).attr("cy", 46.04).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 128.45).attr("cy", 46.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 128.45).attr("cy", 45.8).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M127.46,40.66 L 129.43 40.66");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M127.46,45.29 L 129.43 45.29");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M128.45,41.59 L 128.45 40.66");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M128.45,43.2 L 128.45 45.29");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M125.99,43.2 L 130.9 43.2 130.9 41.59 125.99 41.59 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 122.53).attr("cy", 51.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 122.53).attr("cy", 51.05).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 122.53).attr("cy", 49.7).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M121.55,41.54 L 123.52 41.54");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M121.55,48.58 L 123.52 48.58");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M122.53,42.43 L 122.53 41.54");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M122.53,45.04 L 122.53 48.58");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M120.08,45.04 L 124.99 45.04 124.99 42.43 120.08 42.43 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 76.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 61.35).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 59.29).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 59.26).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 59.02).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 58.71).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 58.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 58.62).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 58.59).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 58.54).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 58.54).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 58.48).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 58.29).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 58.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 58.2).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.71).attr("cy", 58.14).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M109.72,52.42 L 111.69 52.42");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M109.72,57.97 L 111.69 57.97");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M110.71,52.93 L 110.71 52.42");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M110.71,54.99 L 110.71 57.97");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M108.25,54.99 L 113.16 54.99 113.16 52.93 108.25 52.93 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 76.89).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 67.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 65.61).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 65.59).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 65.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 65.25).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 65.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 65.19).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 65.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 65.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 65.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 65.01).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 64.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 104.79).attr("cy", 64.96).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M103.81,60.99 L 105.78 60.99");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M103.81,64.63 L 105.78 64.63");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M104.79,61.24 L 104.79 60.99");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M104.79,62.68 L 104.79 64.63");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M102.34,62.68 L 107.25 62.68 107.25 61.24 102.34 61.24 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 98.88).attr("cy", 76.68).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 98.88).attr("cy", 73.9).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 98.88).attr("cy", 73.65).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M97.89,71.02 L 99.86 71.02");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M97.89,73.08 L 99.86 73.08");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M98.88,71.64 L 98.88 71.02");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M98.88,72.24 L 98.88 73.08");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M96.42,72.24 L 101.34 72.24 101.34 71.64 96.42 71.64 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 92.97).attr("cy", 76.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 92.97).attr("cy", 76).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 92.97).attr("cy", 75.91).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 92.97).attr("cy", 75.6).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 92.97).attr("cy", 75.4).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 92.97).attr("cy", 75.4).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 92.97).attr("cy", 74.52).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 92.97).attr("cy", 73.77).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M91.98,74.65 L 93.95 74.65");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M91.98,75.21 L 93.95 75.21");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M92.97,74.88 L 92.97 74.65");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M92.97,75.03 L 92.97 75.21");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M90.51,75.03 L 95.42 75.03 95.42 74.88 90.51 74.88 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 87.05).attr("cy", 76.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.05).attr("cy", 75.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.05).attr("cy", 75.94).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.05).attr("cy", 75.55).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.05).attr("cy", 75.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.05).attr("cy", 74.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.05).attr("cy", 74.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.05).attr("cy", 74.16).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.05).attr("cy", 74.14).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.05).attr("cy", 73.09).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M86.07,74.35 L 88.04 74.35");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M86.07,75.1 L 88.04 75.1");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M87.05,74.65 L 87.05 74.35");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M87.05,74.86 L 87.05 75.1");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M84.6,74.86 L 89.51 74.86 89.51 74.65 84.6 74.65 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 81.14).attr("cy", 76.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.14).attr("cy", 75.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.14).attr("cy", 75.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.14).attr("cy", 75.45).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.14).attr("cy", 75.28).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.14).attr("cy", 73.35).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.14).attr("cy", 73.3).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.14).attr("cy", 73.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.14).attr("cy", 72.94).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M80.15,73.72 L 82.12 73.72");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M80.15,74.88 L 82.12 74.88");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.14,74.2 L 81.14 73.72");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.14,74.59 L 81.14 74.88");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M78.68,74.59 L 83.6 74.59 83.6 74.2 78.68 74.2 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 75.22).attr("cy", 76.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 75.22).attr("cy", 75.04).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 75.22).attr("cy", 71.8).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 75.22).attr("cy", 71.26).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M74.24,72.04 L 76.21 72.04");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M74.24,75 L 76.21 75");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M75.22,73.15 L 75.22 72.04");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M75.22,73.9 L 75.22 75");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M72.77,73.9 L 77.68 73.9 77.68 73.15 72.77 73.15 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 76.93).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 73.84).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 73.68).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 73.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 73).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 72.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 72.76).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 72.75).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 72.66).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 72.63).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 72.6).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 72.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 72.42).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 72.42).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 69.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 68.97).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 68.89).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 68.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 69.31).attr("cy", 67.6).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M68.33,69.1 L 70.3 69.1");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M68.33,72.4 L 70.3 72.4");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M69.31,70.3 L 69.31 69.1");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M69.31,71.14 L 69.31 72.4");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M66.85,71.14 L 71.77 71.14 71.77 70.3 66.85 70.3 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 76.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 72.06).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 71.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 70.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 70.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 69.79).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 69.75).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 69.7).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 69.7).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 69.66).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 69.51).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 69.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 69.3).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 69.1).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 64.2).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 63.84).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 63.57).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 63.4).attr("cy", 62.98).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M62.41,64.81 L 64.38 64.81");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M62.41,68.64 L 64.38 68.64");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M63.4,65.91 L 63.4 64.81");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M63.4,67.02 L 63.4 68.64");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M60.94,67.02 L 65.85 67.02 65.85 65.91 60.94 65.91 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 77.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 69.19).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 67.68).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 65.53).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 65.29).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 65.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 65.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 65.02).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 65.02).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 64.95).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 64.83).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 64.74).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 64.53).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 64.21).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 64.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 57.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 57.04).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.48).attr("cy", 56.38).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M56.5,57.84 L 58.47 57.84");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M56.5,62.73 L 58.47 62.73");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M57.48,59.67 L 57.48 57.84");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M57.48,61.03 L 57.48 62.73");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M55.03,61.03 L 59.94 61.03 59.94 59.67 55.03 59.67 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 77.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 64.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 61.72).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 57.84).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 57.54).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 57.46).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 57.21).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 57.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 57.04).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 56.98).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 56.92).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 56.92).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 56.91).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 56.52).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 56.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 55.9).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 55.77).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 54.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.57).attr("cy", 48.38).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M50.58,49.55 L 52.56 49.55");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M50.58,53.33 L 52.56 53.33");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M51.57,50.71 L 51.57 49.55");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M51.57,51.97 L 51.57 53.33");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M49.11,51.97 L 54.03 51.97 54.03 50.71 49.11 50.71 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 77.14).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 58.74).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 55.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 50.27).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 50.24).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 50.24).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 50.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 49.94).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 49.88).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 49.85).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 49.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 49.64).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 49.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 49.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 49.55).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.66).attr("cy", 48.7).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M44.67,42.88 L 46.64 42.88");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M44.67,48.19 L 46.64 48.19");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M45.66,43.58 L 45.66 42.88");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M45.66,45.62 L 45.66 48.19");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M43.2,45.62 L 48.11 45.62 48.11 43.58 43.2 43.58 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 39.74).attr("cy", 77.14).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 39.74).attr("cy", 55.74).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 39.74).attr("cy", 52.34).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 39.74).attr("cy", 47.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 39.74).attr("cy", 46.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 39.74).attr("cy", 46.55).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 39.74).attr("cy", 46.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 39.74).attr("cy", 46.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 39.74).attr("cy", 46.27).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 39.74).attr("cy", 46.25).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 39.74).attr("cy", 46.24).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 39.74).attr("cy", 25.84).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M38.76,39.7 L 40.73 39.7");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M38.76,46.16 L 40.73 46.16");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M39.74,40.52 L 39.74 39.7");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M39.74,42.79 L 39.74 46.16");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M37.29,42.79 L 42.2 42.79 42.2 40.52 37.29 40.52 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 33.83).attr("cy", 77.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 33.83).attr("cy", 53.98).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 33.83).attr("cy", 51.01).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M32.84,38.93 L 34.81 38.93");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M32.84,45.86 L 34.81 45.86");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M33.83,39.7 L 33.83 38.93");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M33.83,42.52 L 33.83 45.86");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M31.37,42.52 L 36.29 42.52 36.29 39.7 31.37 39.7 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 169.84).attr("cy", 77.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 169.84).attr("cy", 52.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 169.84).attr("cy", 49.96).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M168.86,38.75 L 170.83 38.75");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M168.86,45.52 L 170.83 45.52");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M169.84,39.82 L 169.84 38.75");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M169.84,42.64 L 169.84 45.52");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M167.39,42.64 L 172.3 42.64 172.3 39.82 167.39 39.82 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 163.93).attr("cy", 77.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 163.93).attr("cy", 50.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 163.93).attr("cy", 49.43).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 163.93).attr("cy", 46.24).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 163.93).attr("cy", 45.82).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M162.94,39.85 L 164.92 39.85");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M162.94,45.43 L 164.92 45.43");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M163.93,40.45 L 163.93 39.85");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M163.93,42.53 L 163.93 45.43");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M161.47,42.53 L 166.39 42.53 166.39 40.45 161.47 40.45 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 158.02).attr("cy", 77.14).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 158.02).attr("cy", 48.2).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 158.02).attr("cy", 48.05).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 158.02).attr("cy", 47.32).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 158.02).attr("cy", 46.39).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 158.02).attr("cy", 44.99).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M157.03,40.24 L 159 40.24");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M157.03,44.66 L 159 44.66");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M158.02,41.15 L 158.02 40.24");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M158.02,42.68 L 158.02 44.66");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M155.56,42.68 L 160.47 42.68 160.47 41.15 155.56 41.15 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 116.62).attr("cy", 77.14).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 116.62).attr("cy", 77.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 116.62).attr("cy", 56.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 116.62).attr("cy", 55.2).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 116.62).attr("cy", 54.16).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 116.62).attr("cy", 53.42).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 116.62).attr("cy", 53.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 116.62).attr("cy", 52.82).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 116.62).attr("cy", 52.66).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M115.63,46.13 L 117.61 46.13");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M115.63,52.55 L 117.61 52.55");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M116.62,46.74 L 116.62 46.13");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M116.62,49.09 L 116.62 52.55");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M114.16,49.09 L 119.08 49.09 119.08 46.74 114.16 46.74 z");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M151.12,41.36 L 153.09 41.36");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M145.2,41.1 L 147.17 41.1");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M139.29,41.41 L 141.26 41.41");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M133.38,41.78 L 135.35 41.78");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M127.46,42.17 L 129.43 42.17");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M121.55,43.22 L 123.52 43.22");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M109.72,53.53 L 111.69 53.53");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M103.81,61.63 L 105.78 61.63");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M97.89,71.82 L 99.86 71.82");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M91.98,74.97 L 93.95 74.97");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M86.07,74.79 L 88.04 74.79");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M80.15,74.46 L 82.12 74.46");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M74.24,73.6 L 76.21 73.6");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M68.33,70.77 L 70.3 70.77");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M62.41,66.45 L 64.38 66.45");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M56.5,60.43 L 58.47 60.43");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M50.58,51.08 L 52.56 51.08");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M44.67,43.93 L 46.64 43.93");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M38.76,41.09 L 40.73 41.09");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M32.84,40.22 L 34.81 40.22");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M168.86,40.25 L 170.83 40.25");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M162.94,41.02 L 164.92 41.02");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M157.03,41.6 L 159 41.6");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M115.63,47.43 L 117.61 47.43");
            }(g.append("g")));
          }(g.append("g")));
        }(g.append("g")));
      }(g.append("g")));
      (function (g) {
        d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath2")
    .append("svg:path")
      .attr("d", " M30.87,15.35 L 172.8 15.35 172.8 78.96 30.87 78.96 z");g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
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
               .attr("d", "M165.8,18.35 L 169.8 18.35 169.8 22.35 165.8 22.35 z");
            (function (g) {
              g.attr("fill", "#6A6A6A")
               .attr("class", "button_logo");
              g.append("svg:path")
                 .attr("d", "M166.6,19.95 L 167.4 19.95 167.4 19.15 168.2 19.15 168.2 19.95 169 19.95 169 20.75 168.2 20.75 168.2 21.55 167.4 21.55 167.4 20.75 166.6 20.75 z");
            }(g.append("g")));
          }(g.append("g")));
          (function (g) {
            g.attr("fill", "#EAEAEA")
             .on("click", zoomslider_track_behavior(ctx, 139.8, 156.8));
            g.append("svg:path")
               .attr("d", "M146.3,18.35 L 165.3 18.35 165.3 22.35 146.3 22.35 z");
          }(g.append("g")));
          (function (g) {
            g.attr("fill", "#6A6A6A")
             .attr("class", "zoomslider_thumb")
             .call(zoomslider_behavior(ctx, 139.8, 156.8))
.on("mouseover", zoomslider_thumb_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_thumb_mouseover("#6a6a6a"))
;
            g.append("svg:path")
               .attr("d", "M154.8,18.35 L 156.8 18.35 156.8 22.35 154.8 22.35 z");
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
               .attr("d", "M141.8,18.35 L 145.8 18.35 145.8 22.35 141.8 22.35 z");
            (function (g) {
              g.attr("fill", "#6A6A6A")
               .attr("class", "button_logo");
              g.append("svg:path")
                 .attr("d", "M142.6,19.95 L 145 19.95 145 20.75 142.6 20.75 z");
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
