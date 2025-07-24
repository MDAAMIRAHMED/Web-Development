const user = {
    username: "Aamir",
    age: 20,
    
    welcomeMessage: function(){
        console.log(`${this.username} , you are welcome`)
        console.log(this); // this -> current context
        
    }
}

// user.welcomeMessage
// user.welcomeMessage()
// user.username = "Ahmed"
// user.welcomeMessage()
// console.log(this) // {} but in browser window object

// function chai() {
//     // console.log(this); // global
//     let username = "aamir"
//     console.log(this.username) // undefined
// }

// chai()

// const chai = function(){
//     // console.log(this);
//     let username = "aamir"
//     console.log(this.username)
// }

// chai()

// const chai = () => {
//     console.log(this) // {}
//     let username = "aamir"
//     console.log(this.username)
// }

// chai()

// Arrow Functions

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => {username: "aamir"} // undefined
const addTwo = (num1, num2) => ({username: "aamir"})

console.log(addTwo(1,4));
