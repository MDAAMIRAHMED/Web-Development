class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME ${this.username}`);
  }

  static createId() {
    return "123";
  }
}

const chai = new User("Hitesh");
// chai.logMe();
// console.log(chai.createId()); // throws error
// console.log(User.createId()); // 123

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const tea = new Teacher("tea", "tea@gmail.com");
// tea.logMe();
console.log(tea.createId());
