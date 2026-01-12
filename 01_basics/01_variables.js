const accountID = 133
let accountEmail = "shubhrapandey@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId =2 not allowed

accountEmail = "sp@sp.com"
accountPassword = "2132213"
accountCity = "pune"

console.log(accountID);


/*
Prefer not to use var because of
issue in block scope and functional scope
*/

//variable without declaration is considered undefined

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])