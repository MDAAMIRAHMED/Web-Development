type User = {
  readonly _id: string;
  name: string;
  isLoggedIn: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "aamir",
  isLoggedIn: true,
};

myUser.name = "hitesh";
// myUser._id = "abc"; // throws error

type CardNumber = {
  cardnumber: number;
};

type CardDate = {
  carddate: string;
};

type CardDetails = CardNumber &
  CardDate & {
    cvv: number;
  };

let myCard: CardDetails = {
  cardnumber: 100,
  carddate: "12",
  cvv: 10,
};
export {};
