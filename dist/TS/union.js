"use strict";
let score = 33;
score = 44;
score = "55";
let vinicius = { name: "vinicius", age: 25 };
vinicius = { username: "vinicius.cdp", age: 25 };
function getDbId(id) {
    console.log("DB id is: ${id}");
}
getDbId(3);
getDbId("3");
function getDbId2(id) {
    if (typeof id === "string") {
        // apenas funciona em string
        id.toLocaleLowerCase();
    }
}
// array
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = [1, "2", "3"];
let seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew";
