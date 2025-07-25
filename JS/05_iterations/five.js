const programming = ["js", 'java', 'py', "swift", 'cpp']

// foreach

// programming.forEach(function (item) {
//     console.log(item);
// })

// programming.forEach(item => console.log(item))

function printMe(item){
    console.log(item);    
}

// programming.forEach(printMe)

// programming.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

// [{}, {}, {}]

const myCoding = [
    {
        name:"John",
        age: 10
    },
    {
        name:"James",
        age: 19
    },
    {
        name:"Johnathan",
        age: 76
    },
]

myCoding.forEach( (item) => {
    console.log(item.name);
    
})