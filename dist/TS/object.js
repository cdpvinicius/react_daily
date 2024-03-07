"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "John",
    email: "john@example.com",
    isActive: true,
};
function createUser({ name: string, isPaid: boolean }) { }
createUser({ name: "John", isPaid: false });
function createCouse() {
    return { name: "react", price: 9.99 };
}
function createUser2(user) {
    return { _id: "", name: "", email: "", isActive: false };
}
createUser2({ _id: "", name: "", email: "", isActive: false });
let myUser = {
    _id: "12",
    name: "hani",
    email: "h@h.com",
    isActive: false,
};
myUser.email = "h@gmail.com";
