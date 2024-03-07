"use strict";
function detect(val) {
    if (typeof val === "number") {
        return val + 3;
    }
    return val.toLocaleLowerCase();
}
function provideId(id) {
    if (!id) {
        console.log("Please provide a unique id");
        return;
    }
    id.toLocaleLowerCase();
}
function isAdminLoggedb(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x);
    }
    else {
        console.log(new Date(x));
    }
}
function isFish(pet) {
    return pet.swinm !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    else {
        pet;
        return "Bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circles") {
        return shape.radius * 2 * Math.PI;
    }
    //   return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circles":
            return Math.PI * shape.radius ** 2;
        case "squares":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
