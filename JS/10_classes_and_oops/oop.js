const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// user.getUserDetails();

// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome, ${this.username}`);
  };
  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("John", 23, false);
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
console.log(userTwo.constructor);

console.log(userOne instanceof User);
console.log(userTwo instanceof User);
console.log(userOne instanceof Object);


