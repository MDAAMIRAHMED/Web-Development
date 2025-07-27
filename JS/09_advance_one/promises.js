const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyn 1 task...");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise 1 Resolved...");
});

// promise two

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyn Task 2...");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 Resolved...");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyn Task 3...");
    resolve({ username: "John", email: "john@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
  console.log("Promise 3 Resolved...");
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      console.log("Async Task 4...");
      resolve({ username: "Doe", age: 20 });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
    console.log("Promise 4 Resolved...");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Promise 4 is either resolved or rejected..."));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      console.log("Async Task 5...");
      resolve({ username: "JavaScript", age: 20 });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function displayUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     // console.log(typeof response);
//     // console.log(response.json());
//     // const data = response.json();
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E", error);
//   }
// }

// displayUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
