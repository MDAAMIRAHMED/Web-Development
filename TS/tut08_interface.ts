interface User {
  readonly dbId: number;
  name: string;
  isLoggedIn: boolean;
  googleId?: string;
  startTrail: () => string;
  getName(): string;
  getCoupon(couponname: string, value: number): number;
}

// if you forgot to add some properties
interface User {
  githubToken: number;
}
//inheritance
interface Admin extends User {
  role: "admin" | "ta";
}
let myUser: Admin = {
  dbId: 1,
  name: "h",
  githubToken: 123,
  isLoggedIn: true,
  role: "admin",
  startTrail: () => "",
  getName: () => {
    return `Hello`;
  },
  getCoupon: (name: "hc", discount: 10) => {
    return 10;
  },
};
export {};
