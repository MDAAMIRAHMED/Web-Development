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
    function User(email, name // private userId: number
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    User.prototype.deleteToken = function () {
        console.log("Token Deleted");
    };
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "Apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getCourseCount", {
        get: function () {
            return this._courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setCourseCount", {
        //   set setCourseCount(courseNum): string{} // set accessor has no return type
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var hitesh = new User("hitesh", "h@h.com");
// hitesh.city = "chennai" // throws error
// hitesh.name // throws error because it is private property
hitesh.email;
