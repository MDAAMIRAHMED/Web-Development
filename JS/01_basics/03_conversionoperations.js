let score = false

console.table([score, typeof score])

let valueInNumber = Number(score)
console.table([valueInNumber, typeof(valueInNumber)])

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn;

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.table([isLoggedIn, booleanIsLoggedIn, typeof(booleanIsLoggedIn)])

// 1,2 => true, 0 => false
// "aamir" => true, "" => false
// null => false
// undefined => false

let someNumber = null
let stringNumber = String(someNumber)

console.table([someNumber, stringNumber, typeof(stringNumber)])

// anyvalue => "anyvalue"

// ************************ Operations ***************************

let value = 20
let negValue = -value

// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 3);

let str1 = "Aamir"
let str2 = " Ahmed"
let str3 = str1 + str2

// console.log(str3);

// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2") // 32

// console.log(+true); // 1
// console.log(+""); // 0

// prefix and postfix

let a = 10
let x = ++a
console.table([a, x])

a = 10
let y = a++
console.table([a, y])

let num1, num2, num3
num1 = num2 = num3 = 4
console.table([num1, num2, num3])




