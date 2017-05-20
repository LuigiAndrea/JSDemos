
describe("crv - constructor return value", function () {

  let crv = require('./crv').CRV
  let Cycling = crv.Cycling
  let horseback = crv.horseback

  describe("returning a primitive", function () {

    it("calling the function, primitive value returned", function () {
      expect(Cycling(true)).toBe(15);
    });

    it("calling the constructor, primitive value ignored, the return values is a new initialized object", function () {
      var cycling = new Cycling(true);
      expect(typeof cycling).toEqual("object");
      expect(cycling.helmet).toEqual(true);
    });
  });


  describe("returning an object", function () {

    it("calling the constructor, the return values is that specific object", function () {
      var cycling = new Cycling(false);
      expect(typeof cycling).toEqual("object");
      expect(cycling).toBe(horseback)
      expect(cycling.helmet).toEqual(false)
    });
  });
});