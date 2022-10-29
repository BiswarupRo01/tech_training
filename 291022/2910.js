// js is modern scripting language
// it can't work as a stand alone file .... it needs to be 
// it's output is visible in console 

//console.log("Welcome to javascript.");

var score = 99;
//console.log(score);

var score = 100;
console.log(score);    

// for strings

var petName = 'Dog'
console.log(petName)

petName = 'Perro'
console.log(petName)

// printing the data type of variables
console.log(typeof score)
console.log(typeof petName)

// Max and Min in JS
var max = Number.MAX_VALUE
var min = Number.MIN_VALUE
console.log("The max and min of int value are ",max," and ",min," respectively")

// undefined, NaN and null
var b1 = undefined
console.log(b1)

var b2 = 0 / 0
console.log(b2)

var b3 = null
console.log(b3)

/*
*  --> * = single multiplication
*  --> ** = power 
*/

console.log(3 * 7)

console.log(3 ** 7)
// alternatively
console.log(Math.pow(3, 7))

// type conversion
var conv = '3'

console.log(conv)
console.log(typeof conv)

console.log(parseInt(conv))
console.log(typeof parseInt(conv))

var convFloat = "11"
console.log(parseFloat(convFloat)) //but the result should have been 11.00

// more on strings

s = 'apple'

console.log(s);
console.log(typeof s);
console.log(s.length);
console.log(s.indexOf('p'));
console.log(s.lastIndexOf('p'));
console.log(s.charAt(-1));