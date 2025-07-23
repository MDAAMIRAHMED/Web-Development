const accountId = 1223
let accountEmail = "aa@google.com"
var accountPassword = "1234"
accountCity = "Warangal"
let accountState;

// accountId = 1222 // not allowed
accountEmail = "aa@aa.com"
accountPassword = "1212"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
