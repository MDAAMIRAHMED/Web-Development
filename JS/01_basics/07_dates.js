let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// create
// let myCreatedDate = new Date(2023, 0, 14);
// let myCreatedDate = new Date(2023, 0, 14, 5, 3);
// let myCreatedDate = new Date("2020-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myCreatedDate.getTime()/1000))

let newDate = new Date()

console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

// `${newDate.getDate()} and time is `

let weekDay = newDate.toLocaleString('default', {
    weekday: 'short'
})

console.log(weekDay)
