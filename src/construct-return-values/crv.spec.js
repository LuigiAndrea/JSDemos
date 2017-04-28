describe("construct-return-values", function () {
  let crv = require('./crv').CRV
  let Cycling = crv.Cycling
  let horseback = crv.horseback

  it("calling the function, primitive value returned", function () {
    expect(Cycling(true)).toBe(15);
  });

  it("calling the constructor, primitive value ignored, the return values is that specific object", function () {
    var cycling = new Cycling();
    expect(typeof cycling).toEqual("object");
    expect(cycling === horseback)
    expect(cycling.helmet === false)
  });
});
