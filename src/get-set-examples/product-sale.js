let discount_in_percentage = 0;

class Product {

    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    set Discount_in_percentage(value) {
        if (!Number.isInteger(value)) {
            throw new TypeError("Discount in percentage should be a number indicating the percentage off");
        }
        
        discount_in_percentage = value;
    }

    get Discounted_cost() {
        return (this.cost * (1 - discount_in_percentage / 100)).toFixed(2);
    }

}

module.exports = {
    Product
}
