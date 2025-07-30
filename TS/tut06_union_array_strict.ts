let score: number | string = 44;

score = 33;
score = "aamir";
// score = true; // throws error

type User = {
  username: string;
  id: number;
};

type Admin = {
  adminname: string;
  id: number;
};

let hitesh: User | Admin = { username: "sam", id: 12 };

hitesh = { adminname: "h", id: 23 };

function addTwo(num: string | number): string | number {
  if (typeof num === "number") {
    return num + 2;
  } else {
    return num + "2";
  }
}

// array
const data: number[] = [1, 2, 3];
// const data: number[] = [1,2,3, "4"] // throws error
const data2: string[] = ["a", "b", "c"];
// const data2: string[] = ["a", "b", "c", true] // throws error
// const data3: number[] | string[] = ["a", "b", "c"];
// const data3: number[] | string[] = [1, 2, 3];
// const data3: string | number[] = ["a", 1] // throws error
const data3: (string | number)[] = ["a", 1];

let popcornsize: "small" | "medium" | "large";

popcornsize = "large";
// popcornsize = "xlarge"; // throws error
export {};
