describe("colorsBetween", function(){
  it("is a function", function(){
    expect(typeof colorsBetween).toBe("function")
  })
  it("returns an array", function(){
    var cb = colorsBetween("#000000","#ffffff", 2)
    console.log(cb)
    expect(cb.length).toBe(4)
  })
})
