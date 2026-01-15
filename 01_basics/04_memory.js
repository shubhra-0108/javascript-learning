// stack memory(primitve) copy milta h

//heap memory (non primitve) reference milta h


//stack memory:
let Name = "shubhra"
let anotherName = Name;
console.log(anotherName) //shubhra
anotherName = "najuk"
console.log(Name) //shubhra
console.log(anotherName) //najuk

//heap memory:
let user1 = {
    email : "shubhra@gmail.com",
    upi :"3485658"
}

let user2 = user1
user2.email = "hi@gmail.com"

console.log(user1.email) //hi@gmail.com
console.log(user2.email) //hi@gmail.com
