"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [1, 2, 3, 4];
var names = ["a", "b", "c"];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("1");
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: "aamir", type: 2 });
// generic array
function getSearchProducts(products) {
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProducts = function (products) {
    // <T,> in React we use it often
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo,
    };
}
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
