"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    age: 20,
    isLoggedIn: true,
};
function createUser(_a) {
    var string = _a.user, boolean = _a.isPaid;
}
createUser({ user: "aamir", isPaid: false });
var user1 = { user: "hitesh", isPaid: false };
createUser(user1);
// bad behavior
var user2 = { user: "hitesh", isPaid: false, email: "aa@gb.com" };
createUser(user2);
function UserDetails() {
    return { user: "sam", isLogged: false };
}
function UserFunction(user) {
    return { name: "aamir", age: 20, isPaid: true };
}
UserFunction({ name: "aamir", age: 20, isPaid: true });
