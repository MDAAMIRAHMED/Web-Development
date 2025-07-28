// let myName = "Aamir";
// let myChannel = "Chai";

// console.log(myName.trueLength());

const myHeros = ["thor", "hulk"];

const heroPower = {
  thor: "hammer",
  hulk: "smash",

  getHulkPower: function () {
    console.log(`Hero power is ${this.hulk}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`Hitesh is present in all objects`);
};

// myHeros.hitesh();
// heroPower.hitesh();

Array.prototype.heyHitesh = function () {
  console.log("Hey Hitesh");
};

myHeros.heyHitesh();
// heroPower.heyHitesh();

// inheritance

const User = {
  name: "chai",
  email: "chai@gmail.com",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignments",
  fullTime: true,
  //   __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

Object.setPrototypeOf(TeachingSupport, TASupport);

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

let anotherUserName = "ChaiAurCode    ";
anotherUserName.trueLength();

"Hitesh   ".trueLength()
