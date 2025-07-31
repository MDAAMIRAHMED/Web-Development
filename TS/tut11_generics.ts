const score: Array<number> = [1, 2, 3, 4];
const names: Array<string> = ["a", "b", "c"];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree("1");
identityThree(true);

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "aamir", type: 2 });

// generic array
function getSearchProducts<T>(products: T[]): T {
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // <T,> in React we use it often
  const myIndex = 4;
  return products[myIndex];
};

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(1, "4"); // throws error

interface Database {
  connection: string;
  username: string;
  password: string;
}

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addCart(product: T) {
    this.cart.push(product);
  }
}
export {};
