function colorsBetween(c1,c2, n){
  c1 = new Color(c1)
  c2 = new Color(c2)
  var diff = c1.diff(c2).dividedBy(n + 1)
  var out = [c1]
  for(var i = 0; i < n; i++){
    out.push(out[i].approach(c2, diff))
  }
  out.push(c2)
  return out.map(c => c.toHex())
}