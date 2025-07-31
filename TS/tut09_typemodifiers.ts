// class User {
//   public email: string;
//   private name: string; // #name: string; we can use both
//   readonly city: string = "Jaipur";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const hitesh = new User("hitesh", "h@h.com");
// // hitesh.city = "chennai" // throws error
// // hitesh.name // throws error because it is private property
// hitesh.email;

class User {
  private _courseCount = 1;
  readonly city: string = "Jaipur";
  constructor(
    public email: string,
    public name: string // private userId: number
  ) {}

  private deleteToken() {
    console.log("Token Deleted");
  }
  get getAppleEmail(): string {
    return `Apple${this.email}`;
  }

  get getCourseCount(): number {
    return this._courseCount;
  }

  //   set setCourseCount(courseNum): string{} // set accessor has no return type

  set setCourseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const hitesh = new User("hitesh", "h@h.com");
// hitesh.city = "chennai" // throws error
// hitesh.name // throws error because it is private property
hitesh.email;
// hitesh.deleteToken();// private method
export {};
