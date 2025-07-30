function addTwo(num: number): number {
  return num + 2;
  //   return "Hello";
}

addTwo(5);
// addTwo("aamir"); // throws error

function getUpper(val: string) {
  return val.toUpperCase();
}

// getUpper(5) // throws error
getUpper("hitesh");

function signUpUser(name: string, email: string, isPaid: boolean) {}

// signUpUser(1,2,3) // shows mistakes one at a time
signUpUser("aamir", "aa@gg.com", false);

// let loginUser = (name: string, email: string, isPaid: boolean) => {} // throws error before default value
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("aamir", "aa@gg.cm");

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "hulk", "spiderman"];
// const heros = [1, 2, 3]; // type inference
heros.map((hero): string => {
  //   return 2;
  return `Hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
// handleError("this is error");

export {};
