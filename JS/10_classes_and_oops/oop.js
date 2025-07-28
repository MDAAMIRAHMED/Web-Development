// Object Literal

const user = {
  username: "Hitesh",
  isLoggedIn: true,

  getUserName: function () {
    // console.log(`Username is ${username}`);
    // console.log(`Username is ${this.username}`);
    // console.log(this);
  },
};

// console.log(user.username);
// user.getUserName();
// console.log(this);

// constructor function

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Hello, ${this.username}`);
  };

  // return this; // implicit
}

// const userOne = User("Hitesh", 12, true);
// const userTwo = User("John", 11, false);
// console.log(userOne); // userTwo values

const userOne = new User("Hitesh", 12, true);
const userTwo = new User("John", 11, false);
console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
console.log(userTwo instanceof User);
