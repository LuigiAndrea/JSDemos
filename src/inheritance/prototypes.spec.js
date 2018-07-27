describe("Inheritance before ES6", function () {

    let prototypes = require('./prototypes').prototypes;
    let [Bus,Vehicle] = [prototypes.Bus,prototypes.Vehicle];
    var bus = new Bus();

    it("Check brake", function () {
        expect('brake' in bus).toBe(true);
    });

    it("Check constructor", function () {
        expect(bus.constructor === Bus).toBe(true);
    });

    it("Check property", function () {
        for (let prop in Bus.prototype)
            expect(prop).toEqual('brake');
    });

    it("Instance of Vehicle and Bus", function () {
        expect(bus instanceof Bus).toBe(true);
        expect(bus instanceof Vehicle).toBe(true);
        expect(bus instanceof Object).toBe(true);
    });
});