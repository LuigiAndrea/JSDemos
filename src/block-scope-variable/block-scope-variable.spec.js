
describe("bsv - block-scope-variable", function () {

    let bsv = require('./block-scope-variable').BSV
    let task = bsv.task
    let tasklet = bsv.tasklet

    describe("calling task var", function () {

        it("initialize false", function () {
            expect(task(false)).toBeUndefined();
        });

        it("initialize true", function () {
            expect(task(true)).toBe(2);
        });
    });

    describe("calling task let", function () {

        it("initialize false", function () {
            expect(tasklet(false)).toBe(3);
        });

        it("initialize true", function () {
            expect(tasklet(true)).toBe(3);
        });
    });
});
