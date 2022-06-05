import * as d3 from 'd3';
export const convexHulls = (nodes) => {
  const offset = 15;
  var hulls = {};
  // create point sets
  for (var k = 0; k < nodes.length; ++k) {
    var n = nodes[k];
    if (nodes[k].size) continue;
    var x = nodes[k]['x'];
    var y = nodes[k]['y'];
      var i = n.group,
      l = hulls[i] || (hulls[i] = []);
    l.push([x - offset, y - offset]);
    l.push([x - offset, y + offset]);
    l.push([x + offset, y - offset]);
    l.push([x + offset, y + offset]);
  }
  var hullset = [];
  
  for (i in hulls) {
    hullset.push({ group: i, path: d3.polygonHull(hulls[i]) });
  }

  return hullset;
}

var curve = d3.line().curve(d3.curveCardinalClosed.tension(0.55));

export const drawCluster = (d) => {
  return curve(d.path);
}