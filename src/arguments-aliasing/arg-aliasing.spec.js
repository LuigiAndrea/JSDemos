
describe("arguments-aliasing", function () {

    describe("arguments aliasing", function () {

        it("no strict mode", function () {
            function haveBreakfast(prod1, prod2) {
                expect(arguments[0]).toBe(prod1);
                arguments[0] = "bagel";
                expect(arguments[0]).toBe(prod1);
                prod2 = "milk";
                expect(arguments[1]).toBe(prod2);
            }

            haveBreakfast("coffee", "tea");
        });

        it("strict mode", function () {
            function haveBreakfast(prod1, prod2) {
                'use strict'
                expect(arguments[0]).toBe(prod1);
                arguments[0] = "bagel";
                expect(arguments[0]).not.toBe(prod1);
                expect(prod1).toBe("coffee");
                prod2 = "milk";
                expect(arguments[1]).not.toBe(prod2);
                expect(arguments[1]).toBe("tea");
            }

            haveBreakfast("coffee", "tea");
        });

        it("rest paramater", function () {
            function haveBreakfast(...products) {
                expect(arguments[0]).toBe(products[0]);
                arguments[0] = "bagel";
                expect(arguments[0]).not.toBe(products[0]);
                expect(products[0]).toBe("coffee");
                products[1] = "milk";
                expect(arguments[1]).not.toBe(products[1]);
                expect(arguments[1]).toBe("tea");
            }

            haveBreakfast("coffee", "tea");
        });
    });
});
