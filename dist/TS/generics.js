"use strict";
const scores = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("3");
identityThree(3);
// shortcut
function identityFour(val) {
    return val;
}
identityFour({ brand: "bootle", type: 4 });
function getSeachProduct(product) {
    const index = 3;
    return product[index];
}
// same function as arrow function
const getModeSearchProducts = (products) => {
    const index = 4;
    return products[index];
};
function anotherone(valOne, ValTwo) {
    return {
        valOne,
        ValTwo,
    };
}
// ????????????????
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
