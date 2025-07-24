// JavaScript Execution Context
// -> Global Execution Context
// -> Function Execution Context
// -> Eval Execution Context

// Execute code
// -> Memory Creation Phase / Creation Phase
// -> Execution Phase

// 1) Global Execution Phase
// 2) Memory Phase
//      val-> undefined
//      addnum() -> defination
// 3) Execution Phase
//      val = 10
//      addnum() -> (new Env variable + execution thread) //repeat inside the addnum() func

// call stack (charaurcode.js)

function one(){
    console.log("one");
    two()
}

function two(){
    console.log("two");
    three()
}

function three(){
    console.log("three");
}

one()
two()
three()