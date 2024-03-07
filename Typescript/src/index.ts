// https://www.typescriptlang.org/docs/handbook/intro.html

console.log("typscript is here");
console.log("typscript is amazing");

// tsc --init = tsconfig.json
// outDir": "./" -in tsconfig.json
// tsc -w
// on html put the js file

// ----------------------------------------------------------------

class UserClass {
  public email: string;
  name: string;
  private readonly city: string = "Jaipur";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

// same line above less code
class UserSame {
  readonly city: string = "Jaipur";
  constructor(public email: string, private name: string) {}
}

class UserSame2 {
  protected _courseCount = 1;
  readonly city: string = "Jaipur";
  constructor(public email: string, private name: string) {}
  get getEmail(): string {
    return "apple${this.email}";
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(value) {
    if (this.courseCount <= 1) {
      throw new Error("Course count should be greater than 1");
    }
    this._courseCount = value;
  }
  private deleteToken() {
    console.log("Token deleted");
  }
}

const viniuser = new UserClass("v@v.com", "vinicius");
// viniuser.city = "gravata";
// viniuser.city

// defaut = public  private no extends = protected exteds

class SubUser extends UserSame2 {
  isFamily: boolean = true;
  changeCourseCount() {
    // this._courseCount = 4;
  }
}
