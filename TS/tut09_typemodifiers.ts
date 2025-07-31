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
  readonly city: string = "Jaipur";
  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {}
}

const hitesh = new User("hitesh", "h@h.com", 1234);
// hitesh.city = "chennai" // throws error
// hitesh.name // throws error because it is private property
hitesh.email;
export {};
