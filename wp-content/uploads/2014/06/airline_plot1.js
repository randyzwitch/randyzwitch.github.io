function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "101.6mm")
              .attr("height", "152.4mm")
              .attr("viewBox", "0 0 101.6 152.4")
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
           .attr("y", 153.5)
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
           .attr("y", 234.45)
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
         .attr("y", 45.57)
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
           .attr("y", -35.38)
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
           .attr("y", -89.34)
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
         .attr("y", 18.59)
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
         .attr("y", 72.55)
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
         .attr("y", 99.54)
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
           .attr("y", 180.49)
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
           .attr("y", -8.4)
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
           .attr("y", 207.47)
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
         .attr("y", 126.52)
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
           .attr("y", -116.33)
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
           .attr("y", -62.36)
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
           .attr("y", 261.44)
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
         .attr("x", 9.17)
         .attr("y", 72.55)
         .attr("text-anchor", "middle")
         .style("dominant-baseline", "central")
         .attr("transform", "rotate(-90, 9.17, 72.55)")
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
         .attr("x", 34.98)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("1");
   })
;
      g.append("svg:text")
         .attr("x", 65.11)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("12");
   })
;
      g.append("svg:text")
         .attr("x", 73.32)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("15");
   })
;
      g.append("svg:text")
         .attr("x", 70.58)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("14");
   })
;
      g.append("svg:text")
         .attr("x", 67.84)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("13");
   })
;
      g.append("svg:text")
         .attr("x", 95.23)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("23");
   })
;
      g.append("svg:text")
         .attr("x", 87.01)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("20");
   })
;
      g.append("svg:text")
         .attr("x", 45.93)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("5");
   })
;
      g.append("svg:text")
         .attr("x", 40.46)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("3");
   })
;
      g.append("svg:text")
         .attr("x", 43.2)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("4");
   })
;
      g.append("svg:text")
         .attr("x", 48.67)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("6");
   })
;
      g.append("svg:text")
         .attr("x", 92.49)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("22");
   })
;
      g.append("svg:text")
         .attr("x", 54.15)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("8");
   })
;
      g.append("svg:text")
         .attr("x", 78.8)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("17");
   })
;
      g.append("svg:text")
         .attr("x", 84.28)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("19");
   })
;
      g.append("svg:text")
         .attr("x", 59.63)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("10");
   })
;
      g.append("svg:text")
         .attr("x", 56.89)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("9");
   })
;
      g.append("svg:text")
         .attr("x", 51.41)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("7");
   })
;
      g.append("svg:text")
         .attr("x", 32.24)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("0");
   })
;
      g.append("svg:text")
         .attr("x", 89.75)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("21");
   })
;
      g.append("svg:text")
         .attr("x", 62.37)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("11");
   })
;
      g.append("svg:text")
         .attr("x", 76.06)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("16");
   })
;
      g.append("svg:text")
         .attr("x", 37.72)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("2");
   })
;
      g.append("svg:text")
         .attr("x", 81.54)
         .attr("y", 136.05)
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
         .attr("x", 63.74)
         .attr("y", 145.4)
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
         .attr("x", 63.74)
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
      .attr("d", " M30.87,15.35 L 96.6 15.35 96.6 129.76 30.87 129.76 z");g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
        (function (g) {
          g.attr("class", "guide background")
           .attr("stroke", "#F1F1F5")
           .attr("fill", "#FAFAFA")
           .attr("opacity", 1.00);
          g.append("svg:path")
             .attr("d", "M30.87,15.35 L 96.6 15.35 96.6 129.76 30.87 129.76 z");
        }(g.append("g")));
        (function (g) {
          g.attr("stroke", "#F0F0F3")
           .attr("stroke-width", 0.2)
           .attr("class", "guide ygridlines xfixed");
          g.append("svg:path")
             .attr("d", "M30.87,234.45 L 96.6 234.45");
          g.append("svg:path")
             .attr("d", "M30.87,-35.38 L 96.6 -35.38");
          g.append("svg:path")
             .attr("d", "M30.87,18.59 L 96.6 18.59");
          g.append("svg:path")
             .attr("d", "M30.87,99.54 L 96.6 99.54");
          g.append("svg:path")
             .attr("d", "M30.87,-8.4 L 96.6 -8.4");
          g.append("svg:path")
             .attr("d", "M30.87,126.52 L 96.6 126.52");
          g.append("svg:path")
             .attr("d", "M30.87,-62.36 L 96.6 -62.36");
          g.append("svg:path")
             .attr("d", "M30.87,261.44 L 96.6 261.44");
          g.append("svg:path")
             .attr("d", "M30.87,-116.33 L 96.6 -116.33");
          g.append("svg:path")
             .attr("d", "M30.87,207.47 L 96.6 207.47");
          g.append("svg:path")
             .attr("d", "M30.87,180.49 L 96.6 180.49");
          g.append("svg:path")
             .attr("d", "M30.87,72.55 L 96.6 72.55");
          g.append("svg:path")
             .attr("d", "M30.87,-89.34 L 96.6 -89.34");
          g.append("svg:path")
             .attr("d", "M30.87,45.57 L 96.6 45.57");
          g.append("svg:path")
             .attr("d", "M30.87,153.5 L 96.6 153.5");
        }(g.append("g")));
        (function (g) {
          g.attr("stroke", "#F0F0F3")
           .attr("stroke-width", 0.2)
           .attr("class", "guide xgridlines yfixed");
          g.append("svg:path")
             .attr("d", "M80.17,15.35 L 80.17 129.76");
          g.append("svg:path")
             .attr("d", "M58.26,15.35 L 58.26 129.76");
          g.append("svg:path")
             .attr("d", "M74.69,15.35 L 74.69 129.76");
          g.append("svg:path")
             .attr("d", "M63.74,15.35 L 63.74 129.76");
          g.append("svg:path")
             .attr("d", "M88.38,15.35 L 88.38 129.76");
          g.append("svg:path")
             .attr("d", "M33.61,15.35 L 33.61 129.76");
          g.append("svg:path")
             .attr("d", "M69.21,15.35 L 69.21 129.76");
          g.append("svg:path")
             .attr("d", "M85.65,15.35 L 85.65 129.76");
          g.append("svg:path")
             .attr("d", "M91.12,15.35 L 91.12 129.76");
          g.append("svg:path")
             .attr("d", "M61,15.35 L 61 129.76");
          g.append("svg:path")
             .attr("d", "M50.04,15.35 L 50.04 129.76");
          g.append("svg:path")
             .attr("d", "M47.3,15.35 L 47.3 129.76");
          g.append("svg:path")
             .attr("d", "M36.35,15.35 L 36.35 129.76");
          g.append("svg:path")
             .attr("d", "M44.57,15.35 L 44.57 129.76");
          g.append("svg:path")
             .attr("d", "M55.52,15.35 L 55.52 129.76");
          g.append("svg:path")
             .attr("d", "M41.83,15.35 L 41.83 129.76");
          g.append("svg:path")
             .attr("d", "M71.95,15.35 L 71.95 129.76");
          g.append("svg:path")
             .attr("d", "M66.47,15.35 L 66.47 129.76");
          g.append("svg:path")
             .attr("d", "M52.78,15.35 L 52.78 129.76");
          g.append("svg:path")
             .attr("d", "M77.43,15.35 L 77.43 129.76");
          g.append("svg:path")
             .attr("d", "M39.09,15.35 L 39.09 129.76");
          g.append("svg:path")
             .attr("d", "M93.86,15.35 L 93.86 129.76");
          g.append("svg:path")
             .attr("d", "M82.91,15.35 L 82.91 129.76");
        }(g.append("g")));
      }(g.append("g")));
      (function (g) {
        d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath1")
    .append("svg:path")
      .attr("d", " M30.87,15.35 L 96.6 15.35 96.6 129.76 30.87 129.76 z");g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
        (function (g) {
          g.attr("class", "plotpanel");
          (function (g) {
            g.attr("class", "geometry");
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 87.01).attr("cy", 73.34).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.01).attr("cy", 72.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.01).attr("cy", 70.88).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.01).attr("cy", 70.88).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.01).attr("cy", 67.72).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.01).attr("cy", 67.35).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.01).attr("cy", 67.08).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.01).attr("cy", 66.86).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 87.01).attr("cy", 66.59).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M86.56,59.58 L 87.47 59.58");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M86.56,65.84 L 87.47 65.84");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M87.01,61.35 L 87.01 59.58");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M87.01,63.39 L 87.01 65.84");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M86.15,63.39 L 87.88 63.39 87.88 61.35 86.15 61.35 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 84.28).attr("cy", 72.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 84.28).attr("cy", 72.45).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 84.28).attr("cy", 71.61).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 84.28).attr("cy", 67.97).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 84.28).attr("cy", 67.32).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 84.28).attr("cy", 67.32).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 84.28).attr("cy", 67.02).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 84.28).attr("cy", 66.56).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 84.28).attr("cy", 66.05).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M83.82,59.25 L 84.73 59.25");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M83.82,65.13 L 84.73 65.13");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M84.28,60.87 L 84.28 59.25");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M84.28,62.91 L 84.28 65.13");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M83.41,62.91 L 85.15 62.91 85.15 60.87 83.41 60.87 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 81.54).attr("cy", 74.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.54).attr("cy", 72.12).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.54).attr("cy", 71.74).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.54).attr("cy", 68.61).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.54).attr("cy", 68.43).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.54).attr("cy", 67.97).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.54).attr("cy", 66.91).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.08,60.09 L 81.99 60.09");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.08,66.62 L 81.99 66.62");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.54,61.36 L 81.54 60.09");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.54,63.52 L 81.54 66.62");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M80.67,63.52 L 82.41 63.52 82.41 61.36 80.67 61.36 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 78.8).attr("cy", 75.85).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 78.8).attr("cy", 73.09).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 78.8).attr("cy", 72.66).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 78.8).attr("cy", 69.91).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 78.8).attr("cy", 69.64).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 78.8).attr("cy", 68.78).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 78.8).attr("cy", 68.64).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M78.34,60.74 L 79.26 60.74");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M78.34,67.72 L 79.26 67.72");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M78.8,62.17 L 78.8 60.74");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M78.8,64.68 L 78.8 67.72");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M77.93,64.68 L 79.67 64.68 79.67 62.17 77.93 62.17 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 76.06).attr("cy", 75.95).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 76.06).attr("cy", 75.87).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 76.06).attr("cy", 72.64).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 76.06).attr("cy", 70.61).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 76.06).attr("cy", 70.56).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 76.06).attr("cy", 70.53).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 76.06).attr("cy", 70.13).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M75.6,60.87 L 76.52 60.87");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M75.6,69.21 L 76.52 69.21");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M76.06,62.54 L 76.06 60.87");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M76.06,65.44 L 76.06 69.21");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M75.19,65.44 L 76.93 65.44 76.93 62.54 75.19 62.54 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 73.32).attr("cy", 79.89).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 73.32).attr("cy", 79.57).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 73.32).attr("cy", 77.14).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M72.86,62.46 L 73.78 62.46");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M72.86,75.12 L 73.78 75.12");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M73.32,64.05 L 73.32 62.46");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M73.32,68.74 L 73.32 75.12");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M72.45,68.74 L 74.19 68.74 74.19 64.05 72.45 64.05 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 126.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 98.08).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 94.38).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 94.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 93.9).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 93.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 93.3).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 93.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 93.12).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 93.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 93.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 92.93).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 92.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 92.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 92.41).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.84).attr("cy", 92.31).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M67.39,82.03 L 68.3 82.03");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M67.39,92.01 L 68.3 92.01");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M67.84,82.94 L 67.84 82.03");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M67.84,86.64 L 67.84 92.01");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M66.97,86.64 L 68.71 86.64 68.71 82.94 66.97 82.94 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 126.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 108.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 105.74).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 105.72).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 105.45).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 105.1).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 105.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 104.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 104.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 104.88).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 104.85).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 104.66).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 104.64).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 65.11).attr("cy", 104.58).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M64.65,97.43 L 65.56 97.43");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M64.65,103.99 L 65.56 103.99");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M65.11,97.89 L 65.11 97.43");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M65.11,100.48 L 65.11 103.99");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M64.24,100.48 L 65.97 100.48 65.97 97.89 64.24 97.89 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 62.37).attr("cy", 125.66).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.37).attr("cy", 120.67).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.37).attr("cy", 120.21).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M61.91,115.48 L 62.82 115.48");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M61.91,119.18 L 62.82 119.18");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M62.37,116.59 L 62.37 115.48");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M62.37,117.67 L 62.37 119.18");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M61.5,117.67 L 63.24 117.67 63.24 116.59 61.5 116.59 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 59.63).attr("cy", 125.09).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 59.63).attr("cy", 124.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 59.63).attr("cy", 124.28).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 59.63).attr("cy", 123.71).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 59.63).attr("cy", 123.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 59.63).attr("cy", 123.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 59.63).attr("cy", 121.77).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 59.63).attr("cy", 120.42).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M59.17,122.01 L 60.08 122.01");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M59.17,123.01 L 60.08 123.01");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M59.63,122.42 L 59.63 122.01");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M59.63,122.69 L 59.63 123.01");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M58.76,122.69 L 60.5 122.69 60.5 122.42 58.76 122.42 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 56.89).attr("cy", 124.77).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 56.89).attr("cy", 124.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 56.89).attr("cy", 124.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 56.89).attr("cy", 123.63).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 56.89).attr("cy", 123.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 56.89).attr("cy", 121.26).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 56.89).attr("cy", 121.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 56.89).attr("cy", 121.12).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 56.89).attr("cy", 121.1).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 56.89).attr("cy", 119.21).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M56.43,121.47 L 57.35 121.47");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M56.43,122.82 L 57.35 122.82");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M56.89,122.01 L 56.89 121.47");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M56.89,122.39 L 56.89 122.82");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M56.02,122.39 L 57.76 122.39 57.76 122.01 56.02 122.01 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 54.15).attr("cy", 125.09).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 54.15).attr("cy", 123.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 54.15).attr("cy", 123.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 54.15).attr("cy", 123.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 54.15).attr("cy", 123.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 54.15).attr("cy", 119.67).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 54.15).attr("cy", 119.59).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 54.15).attr("cy", 119.34).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 54.15).attr("cy", 118.94).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M53.69,120.34 L 54.61 120.34");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M53.69,122.42 L 54.61 122.42");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M54.15,121.2 L 54.15 120.34");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M54.15,121.91 L 54.15 122.42");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M53.28,121.91 L 55.02 121.91 55.02 121.2 53.28 121.2 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 51.41).attr("cy", 126.22).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.41).attr("cy", 122.72).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.41).attr("cy", 116.89).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 51.41).attr("cy", 115.92).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M50.96,117.32 L 51.87 117.32");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M50.96,122.63 L 51.87 122.63");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M51.41,119.32 L 51.41 117.32");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M51.41,120.67 L 51.41 122.63");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M50.54,120.67 L 52.28 120.67 52.28 119.32 50.54 119.32 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 126.12).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 120.56).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 120.26).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 119.45).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 119.05).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 118.97).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 118.61).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 118.59).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 118.43).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 118.37).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 118.32).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 118.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 117.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 117.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 111.9).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 111.79).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 111.65).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 110.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 48.67).attr("cy", 109.33).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M48.22,112.03 L 49.13 112.03");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M48.22,117.97 L 49.13 117.97");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M48.67,114.19 L 48.67 112.03");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M48.67,115.7 L 48.67 117.97");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M47.8,115.7 L 49.54 115.7 49.54 114.19 47.8 114.19 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 126.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 117.35).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 115.57).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 113.95).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 113.7).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 113.27).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 113.19).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 113.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 113.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 113.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 112.76).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 112.73).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 112.38).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 112.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 103.21).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 102.56).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 102.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 45.93).attr("cy", 101.02).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M45.48,104.31 L 46.39 104.31");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M45.48,111.19 L 46.39 111.19");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M45.93,106.28 L 45.93 104.31");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M45.93,108.28 L 45.93 111.19");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M45.07,108.28 L 46.8 108.28 46.8 106.28 45.07 106.28 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 126.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 112.19).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 109.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 105.61).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 105.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 104.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 104.88).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 104.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 104.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 104.56).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 104.34).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 104.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 103.8).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 103.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 103.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 91.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 90.34).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.2).attr("cy", 89.15).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M42.74,91.77 L 43.65 91.77");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M42.74,100.56 L 43.65 100.56");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M43.2,95.06 L 43.2 91.77");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M43.2,97.51 L 43.2 100.56");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M42.33,97.51 L 44.07 97.51 44.07 95.06 42.33 95.06 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 126.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 103.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 98.75).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 91.77).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 91.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 91.09).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 90.63).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 90.52).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 90.34).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 90.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 90.12).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 90.12).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 90.09).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 89.39).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 88.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 88.29).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 88.04).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 85.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 40.46).attr("cy", 74.77).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M40,76.87 L 40.91 76.87");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M40,83.67 L 40.91 83.67");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M40.46,78.95 L 40.46 76.87");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M40.46,81.22 L 40.46 83.67");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M39.59,81.22 L 41.33 81.22 41.33 78.95 39.59 78.95 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 126.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 93.39).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 87.45).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 78.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 78.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 78.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 78).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 77.57).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 77.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 77.41).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 77.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 77.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 76.93).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 76.93).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 76.87).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 75.87).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 37.72).attr("cy", 75.33).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M37.26,64.86 L 38.18 64.86");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M37.26,74.42 L 38.18 74.42");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M37.72,66.13 L 37.72 64.86");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M37.72,69.8 L 37.72 74.42");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M36.85,69.8 L 38.59 69.8 38.59 66.13 36.85 66.13 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 34.98).attr("cy", 126.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 34.98).attr("cy", 87.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 34.98).attr("cy", 81.89).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 34.98).attr("cy", 72.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 34.98).attr("cy", 71.72).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 34.98).attr("cy", 71.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 34.98).attr("cy", 71.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 34.98).attr("cy", 71.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 34.98).attr("cy", 70.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 34.98).attr("cy", 70.94).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 34.98).attr("cy", 70.91).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 34.98).attr("cy", 34.21).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M34.52,59.14 L 35.44 59.14");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M34.52,70.77 L 35.44 70.77");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M34.98,60.63 L 34.98 59.14");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M34.98,64.7 L 34.98 70.77");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M34.11,64.7 L 35.85 64.7 35.85 60.63 34.11 60.63 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 32.24).attr("cy", 126.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 32.24).attr("cy", 84.83).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 32.24).attr("cy", 79.49).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M31.79,57.77 L 32.7 57.77");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M31.79,70.23 L 32.7 70.23");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M32.24,59.14 L 32.24 57.77");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M32.24,64.22 L 32.24 70.23");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M31.37,64.22 L 33.11 64.22 33.11 59.14 31.37 59.14 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 95.23).attr("cy", 126.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 95.23).attr("cy", 81.54).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 95.23).attr("cy", 77.6).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M94.77,57.44 L 95.69 57.44");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M94.77,69.61 L 95.69 69.61");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M95.23,59.36 L 95.23 57.44");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M95.23,64.43 L 95.23 69.61");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M94.36,64.43 L 96.1 64.43 96.1 59.36 94.36 59.36 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 92.49).attr("cy", 126.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 92.49).attr("cy", 78.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 92.49).attr("cy", 76.66).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 92.49).attr("cy", 70.91).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 92.49).attr("cy", 70.15).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M92.04,59.41 L 92.95 59.41");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M92.04,69.45 L 92.95 69.45");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M92.49,60.49 L 92.49 59.41");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M92.49,64.24 L 92.49 69.45");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M91.62,64.24 L 93.36 64.24 93.36 60.49 91.62 60.49 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 89.75).attr("cy", 126.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 89.75).attr("cy", 74.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 89.75).attr("cy", 74.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 89.75).attr("cy", 72.85).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 89.75).attr("cy", 71.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 89.75).attr("cy", 68.67).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M89.3,60.11 L 90.21 60.11");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M89.3,68.07 L 90.21 68.07");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M89.75,61.76 L 89.75 60.11");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M89.75,64.51 L 89.75 68.07");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M88.88,64.51 L 90.62 64.51 90.62 61.76 88.88 61.76 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 70.58).attr("cy", 126.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 70.58).attr("cy", 126.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 70.58).attr("cy", 88.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 70.58).attr("cy", 87.02).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 70.58).attr("cy", 85.16).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 70.58).attr("cy", 83.83).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 70.58).attr("cy", 83.48).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 70.58).attr("cy", 82.75).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 70.58).attr("cy", 82.46).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M70.13,70.72 L 71.04 70.72");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M70.13,82.27 L 71.04 82.27");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M70.58,71.81 L 70.58 70.72");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M70.58,76.03 L 70.58 82.27");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M69.71,76.03 L 71.45 76.03 71.45 71.81 69.71 71.81 z");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M86.56,62.13 L 87.47 62.13");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M83.82,61.67 L 84.73 61.67");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M81.08,62.22 L 81.99 62.22");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M78.34,62.89 L 79.26 62.89");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M75.6,63.6 L 76.52 63.6");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M72.86,65.47 L 73.78 65.47");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M67.39,84.02 L 68.3 84.02");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M64.65,98.59 L 65.56 98.59");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M61.91,116.91 L 62.82 116.91");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M59.17,122.58 L 60.08 122.58");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M56.43,122.26 L 57.35 122.26");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M53.69,121.66 L 54.61 121.66");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M50.96,120.13 L 51.87 120.13");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M48.22,115.03 L 49.13 115.03");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M45.48,107.25 L 46.39 107.25");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M42.74,96.43 L 43.65 96.43");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M40,79.62 L 40.91 79.62");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M37.26,66.75 L 38.18 66.75");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M34.52,61.65 L 35.44 61.65");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M31.79,60.09 L 32.7 60.09");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M94.77,60.14 L 95.69 60.14");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M92.04,61.52 L 92.95 61.52");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M89.3,62.57 L 90.21 62.57");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M70.13,73.05 L 71.04 73.05");
            }(g.append("g")));
          }(g.append("g")));
        }(g.append("g")));
      }(g.append("g")));
      (function (g) {
        d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath2")
    .append("svg:path")
      .attr("d", " M30.87,15.35 L 96.6 15.35 96.6 129.76 30.87 129.76 z");g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
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
               .attr("d", "M89.6,18.35 L 93.6 18.35 93.6 22.35 89.6 22.35 z");
            (function (g) {
              g.attr("fill", "#6A6A6A")
               .attr("class", "button_logo");
              g.append("svg:path")
                 .attr("d", "M90.4,19.95 L 91.2 19.95 91.2 19.15 92 19.15 92 19.95 92.8 19.95 92.8 20.75 92 20.75 92 21.55 91.2 21.55 91.2 20.75 90.4 20.75 z");
            }(g.append("g")));
          }(g.append("g")));
          (function (g) {
            g.attr("fill", "#EAEAEA")
             .on("click", zoomslider_track_behavior(ctx, 63.6, 80.6));
            g.append("svg:path")
               .attr("d", "M70.1,18.35 L 89.1 18.35 89.1 22.35 70.1 22.35 z");
          }(g.append("g")));
          (function (g) {
            g.attr("fill", "#6A6A6A")
             .attr("class", "zoomslider_thumb")
             .call(zoomslider_behavior(ctx, 63.6, 80.6))
.on("mouseover", zoomslider_thumb_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_thumb_mouseover("#6a6a6a"))
;
            g.append("svg:path")
               .attr("d", "M78.6,18.35 L 80.6 18.35 80.6 22.35 78.6 22.35 z");
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
               .attr("d", "M65.6,18.35 L 69.6 18.35 69.6 22.35 65.6 22.35 z");
            (function (g) {
              g.attr("fill", "#6A6A6A")
               .attr("class", "button_logo");
              g.append("svg:path")
                 .attr("d", "M66.4,19.95 L 68.8 19.95 68.8 20.75 66.4 20.75 z");
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
