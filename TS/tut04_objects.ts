const User = {
  name: "hitesh",
  age: 20,
  isLoggedIn: true,
};

function createUser({ user: string, isPaid: boolean }) {}

createUser({ user: "aamir", isPaid: false });

let user1 = { user: "hitesh", isPaid: false };
createUser(user1);

// bad behavior
let user2 = { user: "hitesh", isPaid: false, email: "aa@gb.com" };
createUser(user2);

function UserDetails(): { user: string; isLogged: boolean } {
  return { user: "sam", isLogged: false };
}
export {};
