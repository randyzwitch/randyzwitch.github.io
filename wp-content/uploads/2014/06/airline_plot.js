function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "152.4mm")
              .attr("height", "152.4mm")
              .attr("viewBox", "0 0 152.4 152.4")
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
         .attr("x", 38.16)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("1");
   })
;
      g.append("svg:text")
         .attr("x", 91.56)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("12");
   })
;
      g.append("svg:text")
         .attr("x", 106.13)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("15");
   })
;
      g.append("svg:text")
         .attr("x", 101.27)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("14");
   })
;
      g.append("svg:text")
         .attr("x", 96.42)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("13");
   })
;
      g.append("svg:text")
         .attr("x", 144.97)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("23");
   })
;
      g.append("svg:text")
         .attr("x", 130.41)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("20");
   })
;
      g.append("svg:text")
         .attr("x", 57.58)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("5");
   })
;
      g.append("svg:text")
         .attr("x", 47.87)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("3");
   })
;
      g.append("svg:text")
         .attr("x", 52.72)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("4");
   })
;
      g.append("svg:text")
         .attr("x", 62.43)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("6");
   })
;
      g.append("svg:text")
         .attr("x", 140.12)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("22");
   })
;
      g.append("svg:text")
         .attr("x", 72.14)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("8");
   })
;
      g.append("svg:text")
         .attr("x", 115.84)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("17");
   })
;
      g.append("svg:text")
         .attr("x", 125.55)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("19");
   })
;
      g.append("svg:text")
         .attr("x", 81.85)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("10");
   })
;
      g.append("svg:text")
         .attr("x", 77)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("9");
   })
;
      g.append("svg:text")
         .attr("x", 67.29)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("7");
   })
;
      g.append("svg:text")
         .attr("x", 33.3)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("0");
   })
;
      g.append("svg:text")
         .attr("x", 135.26)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("21");
   })
;
      g.append("svg:text")
         .attr("x", 86.71)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("11");
   })
;
      g.append("svg:text")
         .attr("x", 110.99)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("16");
   })
;
      g.append("svg:text")
         .attr("x", 43.01)
         .attr("y", 136.05)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("2");
   })
;
      g.append("svg:text")
         .attr("x", 120.7)
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
         .attr("x", 89.14)
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
      .attr("d", " M30.87,15.35 L 147.4 15.35 147.4 129.76 30.87 129.76 z");g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
        (function (g) {
          g.attr("class", "guide background")
           .attr("stroke", "#F1F1F5")
           .attr("fill", "#FAFAFA")
           .attr("opacity", 1.00);
          g.append("svg:path")
             .attr("d", "M30.87,15.35 L 147.4 15.35 147.4 129.76 30.87 129.76 z");
        }(g.append("g")));
        (function (g) {
          g.attr("stroke", "#F0F0F3")
           .attr("stroke-width", 0.2)
           .attr("class", "guide ygridlines xfixed");
          g.append("svg:path")
             .attr("d", "M30.87,234.45 L 147.4 234.45");
          g.append("svg:path")
             .attr("d", "M30.87,-35.38 L 147.4 -35.38");
          g.append("svg:path")
             .attr("d", "M30.87,18.59 L 147.4 18.59");
          g.append("svg:path")
             .attr("d", "M30.87,99.54 L 147.4 99.54");
          g.append("svg:path")
             .attr("d", "M30.87,-8.4 L 147.4 -8.4");
          g.append("svg:path")
             .attr("d", "M30.87,126.52 L 147.4 126.52");
          g.append("svg:path")
             .attr("d", "M30.87,-62.36 L 147.4 -62.36");
          g.append("svg:path")
             .attr("d", "M30.87,261.44 L 147.4 261.44");
          g.append("svg:path")
             .attr("d", "M30.87,-116.33 L 147.4 -116.33");
          g.append("svg:path")
             .attr("d", "M30.87,207.47 L 147.4 207.47");
          g.append("svg:path")
             .attr("d", "M30.87,180.49 L 147.4 180.49");
          g.append("svg:path")
             .attr("d", "M30.87,72.55 L 147.4 72.55");
          g.append("svg:path")
             .attr("d", "M30.87,-89.34 L 147.4 -89.34");
          g.append("svg:path")
             .attr("d", "M30.87,45.57 L 147.4 45.57");
          g.append("svg:path")
             .attr("d", "M30.87,153.5 L 147.4 153.5");
        }(g.append("g")));
        (function (g) {
          g.attr("stroke", "#F0F0F3")
           .attr("stroke-width", 0.2)
           .attr("class", "guide xgridlines yfixed");
          g.append("svg:path")
             .attr("d", "M118.27,15.35 L 118.27 129.76");
          g.append("svg:path")
             .attr("d", "M79.43,15.35 L 79.43 129.76");
          g.append("svg:path")
             .attr("d", "M108.56,15.35 L 108.56 129.76");
          g.append("svg:path")
             .attr("d", "M89.14,15.35 L 89.14 129.76");
          g.append("svg:path")
             .attr("d", "M132.83,15.35 L 132.83 129.76");
          g.append("svg:path")
             .attr("d", "M35.73,15.35 L 35.73 129.76");
          g.append("svg:path")
             .attr("d", "M98.85,15.35 L 98.85 129.76");
          g.append("svg:path")
             .attr("d", "M127.98,15.35 L 127.98 129.76");
          g.append("svg:path")
             .attr("d", "M137.69,15.35 L 137.69 129.76");
          g.append("svg:path")
             .attr("d", "M84.28,15.35 L 84.28 129.76");
          g.append("svg:path")
             .attr("d", "M64.86,15.35 L 64.86 129.76");
          g.append("svg:path")
             .attr("d", "M60,15.35 L 60 129.76");
          g.append("svg:path")
             .attr("d", "M40.58,15.35 L 40.58 129.76");
          g.append("svg:path")
             .attr("d", "M55.15,15.35 L 55.15 129.76");
          g.append("svg:path")
             .attr("d", "M74.57,15.35 L 74.57 129.76");
          g.append("svg:path")
             .attr("d", "M50.29,15.35 L 50.29 129.76");
          g.append("svg:path")
             .attr("d", "M103.7,15.35 L 103.7 129.76");
          g.append("svg:path")
             .attr("d", "M93.99,15.35 L 93.99 129.76");
          g.append("svg:path")
             .attr("d", "M69.71,15.35 L 69.71 129.76");
          g.append("svg:path")
             .attr("d", "M113.41,15.35 L 113.41 129.76");
          g.append("svg:path")
             .attr("d", "M45.44,15.35 L 45.44 129.76");
          g.append("svg:path")
             .attr("d", "M142.54,15.35 L 142.54 129.76");
          g.append("svg:path")
             .attr("d", "M123.12,15.35 L 123.12 129.76");
        }(g.append("g")));
      }(g.append("g")));
      (function (g) {
        d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath1")
    .append("svg:path")
      .attr("d", " M30.87,15.35 L 147.4 15.35 147.4 129.76 30.87 129.76 z");g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
        (function (g) {
          g.attr("class", "plotpanel");
          (function (g) {
            g.attr("class", "geometry");
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 73.34).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 72.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 70.88).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 70.88).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 67.72).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 67.35).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 67.08).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 66.86).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 130.41).attr("cy", 66.59).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M129.6,59.58 L 131.22 59.58");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M129.6,65.84 L 131.22 65.84");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M130.41,61.35 L 130.41 59.58");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M130.41,63.39 L 130.41 65.84");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M128.48,63.39 L 132.33 63.39 132.33 61.35 128.48 61.35 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 72.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 72.45).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 71.61).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 67.97).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 67.32).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 67.32).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 67.02).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 66.56).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 125.55).attr("cy", 66.05).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M124.74,59.25 L 126.36 59.25");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M124.74,65.13 L 126.36 65.13");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M125.55,60.87 L 125.55 59.25");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M125.55,62.91 L 125.55 65.13");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M123.62,62.91 L 127.48 62.91 127.48 60.87 123.62 60.87 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 74.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 72.12).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 71.74).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 68.61).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 68.43).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 67.97).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 120.7).attr("cy", 66.91).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M119.89,60.09 L 121.5 60.09");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M119.89,66.62 L 121.5 66.62");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M120.7,61.36 L 120.7 60.09");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M120.7,63.52 L 120.7 66.62");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M118.77,63.52 L 122.62 63.52 122.62 61.36 118.77 61.36 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 75.85).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 73.09).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 72.66).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 69.91).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 69.64).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 68.78).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 115.84).attr("cy", 68.64).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M115.03,60.74 L 116.65 60.74");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M115.03,67.72 L 116.65 67.72");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M115.84,62.17 L 115.84 60.74");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M115.84,64.68 L 115.84 67.72");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M113.91,64.68 L 117.77 64.68 117.77 62.17 113.91 62.17 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 75.95).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 75.87).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 72.64).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 70.61).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 70.56).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 70.53).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 110.99).attr("cy", 70.13).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M110.18,60.87 L 111.79 60.87");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M110.18,69.21 L 111.79 69.21");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M110.99,62.54 L 110.99 60.87");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M110.99,65.44 L 110.99 69.21");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M109.06,65.44 L 112.91 65.44 112.91 62.54 109.06 62.54 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 106.13).attr("cy", 79.89).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 106.13).attr("cy", 79.57).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 106.13).attr("cy", 77.14).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M105.32,62.46 L 106.94 62.46");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M105.32,75.12 L 106.94 75.12");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M106.13,64.05 L 106.13 62.46");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M106.13,68.74 L 106.13 75.12");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M104.2,68.74 L 108.06 68.74 108.06 64.05 104.2 64.05 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 126.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 98.08).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 94.38).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 94.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 93.9).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 93.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 93.3).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 93.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 93.12).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 93.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 93.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 92.93).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 92.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 92.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 92.41).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 96.42).attr("cy", 92.31).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M95.61,82.03 L 97.23 82.03");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M95.61,92.01 L 97.23 92.01");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M96.42,82.94 L 96.42 82.03");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M96.42,86.64 L 96.42 92.01");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M94.49,86.64 L 98.35 86.64 98.35 82.94 94.49 82.94 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 126.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 108.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 105.74).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 105.72).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 105.45).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 105.1).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 105.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 104.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 104.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 104.88).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 104.85).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 104.66).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 104.64).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 91.56).attr("cy", 104.58).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M90.75,97.43 L 92.37 97.43");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M90.75,103.99 L 92.37 103.99");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M91.56,97.89 L 91.56 97.43");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M91.56,100.48 L 91.56 103.99");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M89.64,100.48 L 93.49 100.48 93.49 97.89 89.64 97.89 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 86.71).attr("cy", 125.66).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 86.71).attr("cy", 120.67).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 86.71).attr("cy", 120.21).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M85.9,115.48 L 87.52 115.48");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M85.9,119.18 L 87.52 119.18");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M86.71,116.59 L 86.71 115.48");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M86.71,117.67 L 86.71 119.18");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M84.78,117.67 L 88.64 117.67 88.64 116.59 84.78 116.59 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 125.09).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 124.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 124.28).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 123.71).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 123.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 123.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 121.77).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 81.85).attr("cy", 120.42).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.04,122.01 L 82.66 122.01");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.04,123.01 L 82.66 123.01");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.85,122.42 L 81.85 122.01");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M81.85,122.69 L 81.85 123.01");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M79.93,122.69 L 83.78 122.69 83.78 122.42 79.93 122.42 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 124.77).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 124.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 124.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 123.63).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 123.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 121.26).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 121.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 121.12).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 121.1).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 77).attr("cy", 119.21).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M76.19,121.47 L 77.81 121.47");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M76.19,122.82 L 77.81 122.82");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M77,122.01 L 77 121.47");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M77,122.39 L 77 122.82");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M75.07,122.39 L 78.93 122.39 78.93 122.01 75.07 122.01 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 125.09).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 123.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 123.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 123.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 123.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 119.67).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 119.59).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 119.34).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 72.14).attr("cy", 118.94).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M71.33,120.34 L 72.95 120.34");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M71.33,122.42 L 72.95 122.42");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M72.14,121.2 L 72.14 120.34");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M72.14,121.91 L 72.14 122.42");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M70.21,121.91 L 74.07 121.91 74.07 121.2 70.21 121.2 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 67.29).attr("cy", 126.22).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.29).attr("cy", 122.72).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.29).attr("cy", 116.89).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 67.29).attr("cy", 115.92).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M66.48,117.32 L 68.1 117.32");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M66.48,122.63 L 68.1 122.63");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M67.29,119.32 L 67.29 117.32");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M67.29,120.67 L 67.29 122.63");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M65.36,120.67 L 69.21 120.67 69.21 119.32 65.36 119.32 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 126.12).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 120.56).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 120.26).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 119.45).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 119.05).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 118.97).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 118.61).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 118.59).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 118.43).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 118.37).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 118.32).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 118.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 117.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 117.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 111.9).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 111.79).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 111.65).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 110.36).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 62.43).attr("cy", 109.33).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M61.62,112.03 L 63.24 112.03");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M61.62,117.97 L 63.24 117.97");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M62.43,114.19 L 62.43 112.03");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M62.43,115.7 L 62.43 117.97");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M60.5,115.7 L 64.36 115.7 64.36 114.19 60.5 114.19 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 126.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 117.35).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 115.57).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 113.95).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 113.7).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 113.27).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 113.19).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 113.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 113.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 113.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 112.76).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 112.73).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 112.38).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 112.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 103.21).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 102.56).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 102.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 57.58).attr("cy", 101.02).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M56.77,104.31 L 58.39 104.31");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M56.77,111.19 L 58.39 111.19");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M57.58,106.28 L 57.58 104.31");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M57.58,108.28 L 57.58 111.19");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M55.65,108.28 L 59.5 108.28 59.5 106.28 55.65 106.28 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 126.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 112.19).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 109.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 105.61).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 105.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 104.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 104.88).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 104.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 104.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 104.56).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 104.34).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 104.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 103.8).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 103.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 103.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 91.15).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 90.34).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 52.72).attr("cy", 89.15).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M51.91,91.77 L 53.53 91.77");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M51.91,100.56 L 53.53 100.56");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M52.72,95.06 L 52.72 91.77");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M52.72,97.51 L 52.72 100.56");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M50.79,97.51 L 54.65 97.51 54.65 95.06 50.79 95.06 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 126.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 103.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 98.75).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 91.77).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 91.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 91.09).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 90.63).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 90.52).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 90.34).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 90.23).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 90.12).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 90.12).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 90.09).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 89.39).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 88.69).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 88.29).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 88.04).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 85.13).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 47.87).attr("cy", 74.77).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M47.06,76.87 L 48.68 76.87");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M47.06,83.67 L 48.68 83.67");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M47.87,78.95 L 47.87 76.87");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M47.87,81.22 L 47.87 83.67");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M45.94,81.22 L 49.79 81.22 49.79 78.95 45.94 78.95 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 126.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 93.39).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 87.45).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 78.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 78.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 78.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 78).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 77.57).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 77.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 77.41).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 77.11).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 77.03).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 76.93).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 76.93).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 76.87).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 75.87).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 43.01).attr("cy", 75.33).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M42.2,64.86 L 43.82 64.86");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M42.2,74.42 L 43.82 74.42");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M43.01,66.13 L 43.01 64.86");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M43.01,69.8 L 43.01 74.42");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M41.08,69.8 L 44.94 69.8 44.94 66.13 41.08 66.13 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 126.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 87.99).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 81.89).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 72.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 71.72).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 71.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 71.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 71.07).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 70.96).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 70.94).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 70.91).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 38.16).attr("cy", 34.21).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M37.35,59.14 L 38.96 59.14");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M37.35,70.77 L 38.96 70.77");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M38.16,60.63 L 38.16 59.14");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M38.16,64.7 L 38.16 70.77");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M36.23,64.7 L 40.08 64.7 40.08 60.63 36.23 60.63 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 33.3).attr("cy", 126.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 33.3).attr("cy", 84.83).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 33.3).attr("cy", 79.49).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M32.49,57.77 L 34.11 57.77");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M32.49,70.23 L 34.11 70.23");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M33.3,59.14 L 33.3 57.77");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M33.3,64.22 L 33.3 70.23");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M31.37,64.22 L 35.23 64.22 35.23 59.14 31.37 59.14 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 144.97).attr("cy", 126.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 144.97).attr("cy", 81.54).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 144.97).attr("cy", 77.6).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M144.16,57.44 L 145.78 57.44");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M144.16,69.61 L 145.78 69.61");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M144.97,59.36 L 144.97 57.44");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M144.97,64.43 L 144.97 69.61");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M143.04,64.43 L 146.9 64.43 146.9 59.36 143.04 59.36 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 140.12).attr("cy", 126.47).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.12).attr("cy", 78.33).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.12).attr("cy", 76.66).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.12).attr("cy", 70.91).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 140.12).attr("cy", 70.15).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M139.31,59.41 L 140.93 59.41");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M139.31,69.45 L 140.93 69.45");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M140.12,60.49 L 140.12 59.41");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M140.12,64.24 L 140.12 69.45");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M138.19,64.24 L 142.04 64.24 142.04 60.49 138.19 60.49 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 135.26).attr("cy", 126.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 135.26).attr("cy", 74.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 135.26).attr("cy", 74.17).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 135.26).attr("cy", 72.85).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 135.26).attr("cy", 71.18).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 135.26).attr("cy", 68.67).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M134.45,60.11 L 136.07 60.11");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M134.45,68.07 L 136.07 68.07");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M135.26,61.76 L 135.26 60.11");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M135.26,64.51 L 135.26 68.07");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M133.33,64.51 L 137.19 64.51 137.19 61.76 133.33 61.76 z");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD");
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 126.49).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 126.44).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 88.58).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 87.02).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 85.16).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 83.83).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 83.48).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 82.75).attr("r", 0.6)
              ;
              g.append("svg:circle")
                .attr("cx", 101.27).attr("cy", 82.46).attr("r", 0.6)
              ;
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M100.47,70.72 L 102.08 70.72");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M100.47,82.27 L 102.08 82.27");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M101.27,71.81 L 101.27 70.72");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.3)
               .attr("stroke", "#0096DD");
              g.append("svg:path")
                 .attr("d", "M101.27,76.03 L 101.27 82.27");
            }(g.append("g")));
            (function (g) {
              g.attr("fill", "#00BFFF")
               .attr("stroke", "#0096DD")
               .attr("stroke-width", 0.3);
              g.append("svg:path")
                 .attr("d", "M99.35,76.03 L 103.2 76.03 103.2 71.81 99.35 71.81 z");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M129.6,62.13 L 131.22 62.13");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M124.74,61.67 L 126.36 61.67");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M119.89,62.22 L 121.5 62.22");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M115.03,62.89 L 116.65 62.89");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M110.18,63.6 L 111.79 63.6");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M105.32,65.47 L 106.94 65.47");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M95.61,84.02 L 97.23 84.02");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M90.75,98.59 L 92.37 98.59");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M85.9,116.91 L 87.52 116.91");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M81.04,122.58 L 82.66 122.58");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M76.19,122.26 L 77.81 122.26");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M71.33,121.66 L 72.95 121.66");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M66.48,120.13 L 68.1 120.13");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M61.62,115.03 L 63.24 115.03");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M56.77,107.25 L 58.39 107.25");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M51.91,96.43 L 53.53 96.43");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M47.06,79.62 L 48.68 79.62");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M42.2,66.75 L 43.82 66.75");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M37.35,61.65 L 38.96 61.65");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M32.49,60.09 L 34.11 60.09");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M144.16,60.14 L 145.78 60.14");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M139.31,61.52 L 140.93 61.52");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M134.45,62.57 L 136.07 62.57");
            }(g.append("g")));
            (function (g) {
              g.attr("stroke-width", 0.6)
               .attr("stroke", "#34FFFF");
              g.append("svg:path")
                 .attr("d", "M100.47,73.05 L 102.08 73.05");
            }(g.append("g")));
          }(g.append("g")));
        }(g.append("g")));
      }(g.append("g")));
      (function (g) {
        d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath2")
    .append("svg:path")
      .attr("d", " M30.87,15.35 L 147.4 15.35 147.4 129.76 30.87 129.76 z");g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
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
