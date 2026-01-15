"use strict"; //treat all JS code as newer version

// alert(3+3) we are using nodejs not browser
// code readability should be high

let name = "shubhra"
let age = 20
let state = null
let isloggedin = false

/*
number =>2 to power 53
bigint 
string => " "
boolean => true/false
null = standalone value
undefined
symbol => uniqueness
*/ 

// object

console.log(typeof shubhra)
console.log(typeof age)
console.log(typeof null)
console.log(typeof undefined)

/* primitive datatypes:
 7 types : String number boolean null undefined symbol bigint

 reference (non primitive)
 array object function

 js is dynamically typed
 */
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
let userEmail

const bigNumber = 3490887n

//symbol
const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid) //false

//array in js:
const heros = ["shubhra" ,"najuk"]

//objects in js:
let myObject = {
    name : "shubhra",
    age : 21,

}

//function:
const myFunction = function(){
    console.log("hello world")
}