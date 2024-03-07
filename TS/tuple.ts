// only in TS not JS

// const user: (string | number)[] = ['hc', 1]

let tUser: [string, number, boolean];

tUser = ["hc", 1, false];

let rgb: [number, number, number] = [0, 0, 0];

type User2 = [number, string];

const newUser: User2 = [122, "hc@gmail.com"];

newUser[1] = "hc.com";
