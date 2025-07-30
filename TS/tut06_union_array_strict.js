"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 44;
score = 33;
score = "aamir";
var hitesh = { username: "sam", id: 12 };
hitesh = { adminname: "h", id: 23 };
function addTwo(num) {
    if (typeof num === "number") {
        return num + 2;
    }
    else {
        return num + "2";
    }
}
// array
var data = [1, 2, 3];
// const data: number[] = [1,2,3, "4"] // throws error
var data2 = ["a", "b", "c"];
// const data2: string[] = ["a", "b", "c", true] // throws error
// const data3: number[] | string[] = ["a", "b", "c"];
// const data3: number[] | string[] = [1, 2, 3];
// const data3: string | number[] = ["a", 1] // throws error
var data3 = ["a", 1];
var popcornsize;
popcornsize = "large";
