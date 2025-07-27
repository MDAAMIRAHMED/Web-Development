function SetUserName(username) {
  this.username = username;

  console.log("Called");
}

function CreateUser(username, email, password) {
  SetUserName.call(this, username);
  this.email = email;
  this.password = password;

  //   SetUserName(username);
  //   SetUserName.call(username);
}

const user = new CreateUser("chai", "chai@fb.com", "123");
console.log(user);
