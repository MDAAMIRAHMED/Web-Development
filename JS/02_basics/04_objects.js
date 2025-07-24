// singleton
// const tinderUser = new Object()
// console.log(tinderUser);

// object literals
const tinderUser = {}
// console.log(tinderUser);

tinderUser.id = "abc123"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "user@google.com",
    fullname: {
        userfullname: {
            firstname: "Aamir",
            lastname: "Ahmed"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {2:"a", 4:"b"}
const obj3 = {5:"a", 6:"c"}

// const obj4 = {obj1, obj2}
// console.log(obj4);

// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id:1,
        email: "one@aa.com"
    },
    {
        id:2,
        email: "two@aa.com"
    },
    {
        id:3,
        email: "three@aa.com"
    }
]

console.log(users[2].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));

// ++++++++++++++++++++++++++++++++++++
// de-structuring

const course = {
    coursename: 'JS',
    price: 22,
    courseinstructor: "Aamir"
}

// course.courseinstructor

// const {courseinstructor} = course
// console.log(courseinstructor);

const {courseinstructor: instructor} = course
console.log(instructor);

// in react

// const navbar = ({company}) => {

// }

// navbar(company = "microsoft")


// Json

{
    "name":"aamir",
    "age":20,
    "isLoggedIn": false
}

// random user generator, json formatter, ap