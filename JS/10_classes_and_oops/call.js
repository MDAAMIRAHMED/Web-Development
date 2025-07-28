function setUserName(username) {
  this.username = username;
  console.log("Called");
}

function createUser(username, email) {
  // setUserName(username); // username will be vanished
  // setUserName.call(username); // no reference
  setUserName.call(this, username);
  this.email = email;
}

const user = new createUser("Hitesh", "chai@fb.com");
console.log(user);
