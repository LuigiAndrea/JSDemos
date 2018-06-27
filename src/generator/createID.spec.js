describe("ID Generator", function () {
    const counter = require('./createID').IDGenerator.createID();

    it("generate id", function () {
        
        expect(counter.next().value).toEqual(1);
        expect(counter.next().value).toEqual(2);
        expect(counter.next().value).toEqual(3);

    });
});