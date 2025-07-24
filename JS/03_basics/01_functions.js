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

// console.log(loginUserMessage("aamir"));
// console.log(loginUserMessage());

// +++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(100, 200, 300, 2000));

const user = {
    username: "Aamir",
    price: 199
}

function handleObject(anyObj){
    console.log(`${anyObj.username} is username, and price is ${anyObj.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 1000
})

const myNewArray = [10, 20, 30, 40, 50]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([1,2,3,4,5]))



