describe("new object without original function", function () {

    function Car(){}
    const car = new Car();
    const car2 = new car.constructor();

    it("It is a Car", function () {
      expect(car instanceof Car).toBe(true);      
    });

    it("Different Cars", function () {
      expect(car != car2).toBe(true);      
    });
});