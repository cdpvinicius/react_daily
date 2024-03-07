function detect(val: number | string) {
  if (typeof val === "number") {
    return val + 3;
  }
  return val.toLocaleLowerCase();
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide a unique id");
    return;
  }
  id.toLocaleLowerCase();
}

interface Userinfo {
  name: string;
  email: string;
}

interface Admininfo {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminLoggedb(account: Userinfo | Admininfo) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x);
  } else {
    console.log(new Date(x));
  }
}

type Fish = { swinm: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swinm !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish food";
  } else {
    pet;
    return "Bird food";
  }
}

interface Circle {
  kind: "circles";
  radius: number;
}

interface Square {
  kind: "squares";
  side: number;
}

interface rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circles") {
    return shape.radius * 2 * Math.PI;
  }
  //   return shape.side * shape.side;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circles":
      return Math.PI * shape.radius ** 2;
    case "squares":
      return shape.side ** 2;
    case "rectangle":
      return shape.length * shape.width;
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
