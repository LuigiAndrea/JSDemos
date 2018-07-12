describe("Send and receive data with a generator", function () {

    function *Bus(driverName){
        const driver = yield driverName;
        yield driver!=driverName;
    }

    it("Check driver name", function () {
        const bus = Bus("Luigi");
        const driverName = bus.next();
        expect(driverName.value).toEqual("Luigi");   
        
        const differentDriver = bus.next("Mario");
        expect(differentDriver.value).toBe(true);   
    });
});