var Color = require("../color")
describe("color", function(){
  it("can diff another color", function(){
    var c1 = new Color(0,0,0)
    var c2 = new Color(255,255,255)
    var c3 = c1.diff(c2)
    expect(c3.r).toEqual(255)
    expect(c3.g).toEqual(255)
    expect(c3.b).toEqual(255)
    var c3 = c2.diff(c1)
    expect(c3.r).toEqual(255)
  })
  it("can be divided by n", function(){
    var c1 = new Color(10,10,10)
    var c2 = c1.dividedBy(2)
    expect(c2.r).toEqual(5)
    expect(c2.g).toEqual(5)
    expect(c2.b).toEqual(5)
  })
  it("can approach another color", function(){
    var c1 = new Color(10,10,10)
    var diff = new Color(45,45,45)
    var c2 = new Color(100,100,100)
    var c3 = c1.approach(c2, diff)
    expect(c3.r).toEqual(55)
    var c1 = new Color(100,100,100)
    var diff = new Color(45,45,45)
    var c2 = new Color(10,10,10)
    expect(c3.r).toEqual(55)
  })
})