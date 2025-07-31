"use strict";
// class User {
//   public email: string;
//   private name: string; // #name: string; we can use both
//   readonly city: string = "Jaipur";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const hitesh = new User("hitesh", "h@h.com");
// // hitesh.city = "chennai" // throws error
// // hitesh.name // throws error because it is private property
// hitesh.email;
var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Jaipur";
    }
    return User;
}());
var hitesh = new User("hitesh", "h@h.com", 1234);
// hitesh.city = "chennai" // throws error
// hitesh.name // throws error because it is private property
hitesh.email;
