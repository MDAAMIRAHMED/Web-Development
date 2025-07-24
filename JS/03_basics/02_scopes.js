let a = 100;
// const b = 20;
// var c = 300;

if (true) {
    let a = 10;
    // const b = 20;
    // var c = 30;
    // console.log("INNER: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

// window and browser scopes are different // imp


// ++++++++++++++++++++++++++++++++++++++

let z = 10
function one(){
    const username = "aamir"

    function two(){
        const website = " youtube"
        console.log(username + website);
        
    }

    // console.log(website);
    console.log(z)
    
    two()
}

// one()

if (true) {
    const username = "aamir"

    if(username === "aamir"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


// +++++++++++++++++++ mini hoisting +++++++++++++++++

console.log(addOne(5));
function addOne(num) {
    return num + 1
}

// addTwo(5)
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5));
 