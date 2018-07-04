describe("Identically name methods", function () {

    function Car(){
        this.start = () => "start engine";
        this.stop = () => "stop engine";
    }
    Car.prototype.start = () => "start engine with NOS";
   
    it("Instance or prototype?", function () {
        let car = new Car();
        expect(car.start()).toEqual("start engine");      
    });

});