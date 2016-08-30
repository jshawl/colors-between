var Color = function(r,g,b){
  this.r = Math.abs(r)
  this.g = Math.abs(g)
  this.b = Math.abs(b)
}
Color.prototype.diff = function(c){
  return new Color(
    this.r - c.r,
    this.g - c.g,
    this.b - c.b
  )
}
Color.prototype.dividedBy = function(n){
  return new Color(
    this.r / n,
    this.g / n,
    this.b / n
  )
}
Color.prototype.approach = function(c,c2){
  var r = this.r > c.r ? this.r = this.r - c2.r : this.r + c2.r
  var g = this.g > c.g ? this.g = this.g - c2.g : this.g + c2.g
  var b = this.b > c.b ? this.b = this.b - c2.b : this.b + c2.b
  return new Color(r,g,b)
}
module.exports = Color