class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME IS ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`This course is added by ${this.username}`);
  }
}

const chai = new Teacher("Chai", "chai@gb.com", "123");
chai.addCourse();

const masalaChai = new User("MasalaChai");
// masalaChai.addCourse();
masalaChai.logMe();
chai.logMe();

console.log(chai === Teacher); // false
console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true
