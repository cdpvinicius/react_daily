"use strict";
// https://www.typescriptlang.org/docs/handbook/intro.html
console.log("typscript is here");
console.log("typscript is amazing");
// tsc --init = tsconfig.json
// outDir": "./" -in tsconfig.json
// tsc -w
// on html put the js file
// ----------------------------------------------------------------
class UserClass {
    constructor(email, name) {
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
    }
}
// same line above less code
class UserSame {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Jaipur";
    }
}
class UserSame2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    get getEmail() {
        return "apple${this.email}";
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(value) {
        if (this.courseCount <= 1) {
            throw new Error("Course count should be greater than 1");
        }
        this._courseCount = value;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
const viniuser = new UserClass("v@v.com", "vinicius");
// viniuser.city = "gravata";
// viniuser.city
// defaut = public  private no extends = protected exteds
class SubUser extends UserSame2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        // this._courseCount = 4;
    }
}
