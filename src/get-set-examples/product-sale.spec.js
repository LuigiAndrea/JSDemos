describe("Product for sale", function () {

    let Product = require('./product-sale').Product;

    it("product without discount", function () {
        let originalPrize = 12..toFixed(2);
        let p = new Product("Meat", originalPrize);
        expect(p.Discounted_cost).toEqual(originalPrize);
    });

    it("product with discount", function () {
        let originalPrize = 12;
        let expectedPrize = 11.4.toFixed(2);
        let p = new Product("Meat", originalPrize);
        p.Discount_in_percentage = 5;
        expect(p.Discounted_cost).toEqual(expectedPrize);
    });

    it("Passing a wrong number as discount", function () {
        let p = new Product("Meat", 12);
        expect(function () { p.Discount_in_percentage = null; })
            .toThrow(new TypeError("Discount in percentage should be a number indicating the percentage off"));
    });
});
