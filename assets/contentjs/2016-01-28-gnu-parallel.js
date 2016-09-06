// parse a spec and create a visualization view
function parse(divid,spec) {
  vg.parse.spec(spec, function(chart) { chart({el:"#" + divid}).update(); });
}
parse("cat", {"name":"lineplot","height":300,"padding":"auto","marks":[{"marks":[{"properties":{"enter":{"stroke":{"field":"group","scale":"group"},"x":{"field":"x","scale":"x"},"strokeWidth":{"value":2},"y":{"field":"y","scale":"y"}}},"type":"line"},{"properties":{"enter":{"shape":{"value":"circle"},"stroke":{"field":"group","scale":"group"},"x":{"field":"x","scale":"x"},"strokeWidth":{"value":2},"size":{"value":10},"y":{"field":"y","scale":"y"}}},"type":"symbol"}],"from":{"data":"table_uc4u1","transform":[{"groupby":["group"],"type":"facet"}]},"type":"group"},{"properties":{"enter":{"align":{"value":"center"},"fontWeight":{"value":"bold"},"x":{"value":300.0},"font":{"value":""},"fontSize":{"value":16},"fill":{"value":"black"},"baseline":{"value":"top"},"text":{"value":"GNU Parallel - Concatenating 1MM Small Text Files"},"y":{"value":-40}}},"from":{"value":"GNU Parallel - Concatenating 1MM Small Text Files"},"type":"text"}],"axes":[{"tickSizeEnd":0,"tickSizeMajor":0,"scale":"x","tickSize":0,"tickSizeMinor":0,"format":"","layer":"front","properties":{"title":{"fontSize":{"value":14}}},"grid":false,"title":"Number of Jobs (-j)","type":"x","ticks":0},{"tickSizeEnd":0,"tickSizeMajor":0,"scale":"y","tickSize":0,"tickSizeMinor":0,"format":"","layer":"front","properties":{"title":{"fontSize":{"value":14}}},"grid":false,"title":"Run Time (seconds)","type":"y","ticks":0}],"data":[{"name":"table_uc4u1","values":[{"x":1,"y2":0,"group":1,"y":1304.964},{"x":2,"y2":0,"group":1,"y":701.117},{"x":3,"y2":0,"group":1,"y":473.303},{"x":4,"y2":0,"group":1,"y":391.253},{"x":5,"y2":0,"group":1,"y":371.978},{"x":6,"y2":0,"group":1,"y":307.872},{"x":7,"y2":0,"group":1,"y":303.418},{"x":8,"y2":0,"group":1,"y":259.178},{"x":9,"y2":0,"group":1,"y":249.653},{"x":10,"y2":0,"group":1,"y":233.797},{"x":11,"y2":0,"group":1,"y":222.969},{"x":12,"y2":0,"group":1,"y":220.886},{"x":13,"y2":0,"group":1,"y":223.34},{"x":14,"y2":0,"group":1,"y":207.559},{"x":15,"y2":0,"group":1,"y":232.308},{"x":16,"y2":0,"group":1,"y":221.911},{"x":17,"y2":0,"group":1,"y":206.54},{"x":18,"y2":0,"group":1,"y":213.942},{"x":19,"y2":0,"group":1,"y":207.867},{"x":20,"y2":0,"group":1,"y":190.877},{"x":21,"y2":0,"group":1,"y":182.036},{"x":22,"y2":0,"group":1,"y":192.572},{"x":23,"y2":0,"group":1,"y":206.578},{"x":24,"y2":0,"group":1,"y":189.286},{"x":25,"y2":0,"group":1,"y":194.401},{"x":26,"y2":0,"group":1,"y":203.384},{"x":27,"y2":0,"group":1,"y":210.049},{"x":28,"y2":0,"group":1,"y":198.004},{"x":29,"y2":0,"group":1,"y":226.276},{"x":30,"y2":0,"group":1,"y":203.434},{"x":31,"y2":0,"group":1,"y":212.843},{"x":32,"y2":0,"group":1,"y":219.118},{"x":33,"y2":0,"group":1,"y":203.405},{"x":34,"y2":0,"group":1,"y":211.549},{"x":35,"y2":0,"group":1,"y":200.647},{"x":36,"y2":0,"group":1,"y":232.607},{"x":37,"y2":0,"group":1,"y":206.571},{"x":38,"y2":0,"group":1,"y":206.798},{"x":39,"y2":0,"group":1,"y":216.022},{"x":40,"y2":0,"group":1,"y":207.278},{"x":41,"y2":0,"group":1,"y":206.914},{"x":42,"y2":0,"group":1,"y":201.995},{"x":43,"y2":0,"group":1,"y":214.288},{"x":44,"y2":0,"group":1,"y":200.884},{"x":45,"y2":0,"group":1,"y":202.341},{"x":46,"y2":0,"group":1,"y":185.73},{"x":47,"y2":0,"group":1,"y":187.341},{"x":48,"y2":0,"group":1,"y":191.507},{"x":49,"y2":0,"group":1,"y":198.25},{"x":50,"y2":0,"group":1,"y":204.698},{"x":51,"y2":0,"group":1,"y":196.467},{"x":52,"y2":0,"group":1,"y":196.271},{"x":53,"y2":0,"group":1,"y":191.073},{"x":54,"y2":0,"group":1,"y":195.392},{"x":55,"y2":0,"group":1,"y":194.869},{"x":56,"y2":0,"group":1,"y":205.017},{"x":57,"y2":0,"group":1,"y":200.079},{"x":58,"y2":0,"group":1,"y":197.29},{"x":59,"y2":0,"group":1,"y":197.427},{"x":60,"y2":0,"group":1,"y":197.866}]}],"scales":[{"name":"x","range":"width","domain":{"data":"table_uc4u1","field":"x"},"type":"linear"},{"name":"y","range":"height","domain":{"data":"table_uc4u1","field":"y"},"type":"linear"},{"name":"group","range":["rgb( 31,120,180)"],"domain":{"data":"table_uc4u1","field":"group"},"type":"ordinal"}],"width":600})
