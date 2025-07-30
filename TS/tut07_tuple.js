"use strict";
// const User: (string | number) [] = ["hc", 12]
Object.defineProperty(exports, "__esModule", { value: true });
var tUser;
// tUser = [1, 2, 3] // throws error
tUser = [1, "hc", true];
var rgb = [23, 23, 144];
var myUser = [12, "sam"];
// let myUser1: User = [12, true]; // throws error
// myUser[1] = 12; // throws error
// myUser.push(true); // throws error
// but
myUser.push(12); // it accepts but wrong
