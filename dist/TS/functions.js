"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
let loginUser = (name, email, isPaid = false) => { };
addTwo(5);
getUpper("hint");
signUpUser("hint", "email@example.com", true);
loginUser("hint", "h@exemple.com");
function getValue(myvalue) {
    if (myvalue > 5) {
        return true;
    }
    return "200 ok";
}
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spider-man", "iron-man"];
// const heros = [1, 2, 3]
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
