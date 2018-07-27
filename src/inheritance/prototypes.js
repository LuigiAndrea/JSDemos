function Vehicle() { };

Vehicle.prototype.brake = function () { };

function Bus() { };
Bus.prototype = new Vehicle();

Object.defineProperty(Bus.prototype, "constructor", {
    enumerable: false,
    value: Bus,
    writable: true
});

module.exports = {
    prototypes: { Bus, Vehicle }
};
