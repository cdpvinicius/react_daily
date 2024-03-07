let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  age: number;
};

type Admin = {
  username: string;
  age: number;
};

let vinicius: User | Admin = { name: "vinicius", age: 25 };

vinicius = { username: "vinicius.cdp", age: 25 };

function getDbId(id: number | string) {
  console.log("DB id is: ${id}");
}

getDbId(3);
getDbId("3");

function getDbId2(id: number | string) {
  if (typeof id === "string") {
    // apenas funciona em string
    id.toLocaleLowerCase();
  }
}

// array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = [1, "2", "3"];

let seatAllotment: "aisle" | "middle" | "wubdiw";

seatAllotment = "aisle";
// seatAllotment = "crew";
