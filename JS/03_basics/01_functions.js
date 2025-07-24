function sayMyName() {
    console.log("S");
    console.log("a");
    console.log("m");
}

// sayMyName()

function addTwoNumbers(number1, number2){ // parameters
    // console.log(number1 + number2)
    // let result = number1 + number2
    // return result
    return number1 + number2
    // console.log("aamir") // unreachable code

}

// addTwoNumbers() // NaN
// addTwoNumbers(1, null) // 1
// addTwoNumbers(1, 2) // 3
// addTwoNumbers(1) // NaN
// addTwoNumbers(1, "a") // 1a

let result = addTwoNumbers(1, 4) // arguments
// console.log(result);

function loginUserMessage(username = "Sam") {
    // if(username === undefined) {
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("aamir"));
console.log(loginUserMessage());




