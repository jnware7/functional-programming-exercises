// Solution code for the Functional Programming
// https://www.codewars.com/kata/search/javascript?q=&tags=Functional+Programming&beta=false

//Dollars and Cents level 8
//https://www.codewars.com/kata/dollars-and-cents

formatMoney = amount => {
 var theFixed = amount.toFixed(2)
 var string = theFixed => { return theFixed.toString() }
 var dollars = string => {return "$" + string}
 return dollars(theFixed)
}

//Functional Additon level 7
//https://www.codewars.com/kata/functional-addition/

add = n => { return f => { return n + f } }

//Curry Function Multiple All
//https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array/train/javascript

multiplyAll = array => { num => {return array.map(x => { return x * num})}}

//Calculate Average
//https://www.codewars.com/kata/calculate-average/train/javascript

find_average = a => {return a.reduce((b,c) => {return b + c})/a.length}

//The 'if' function
//https://www.codewars.com/kata/the-if-function/train/javascript

_if = (bool, func1, func2) => { return bool == true ? func1 : func2 }