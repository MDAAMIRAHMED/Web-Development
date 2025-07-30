// const User: (string | number) [] = ["hc", 12]

let tUser: [number, string, boolean];

// tUser = [1, 2, 3] // throws error

tUser = [1, "hc", true];

let rgb: [number, number, number] = [23, 23, 144];

type User = [number, string];

let myUser: User = [12, "sam"];
// let myUser1: User = [12, true]; // throws error
// myUser[1] = 12; // throws error

// myUser.push(true); // throws error
// but
myUser.push(12); // it accepts but wrong
export {};
