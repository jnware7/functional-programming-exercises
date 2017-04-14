// Solution code for the Functional Programming
// https://www.codewars.com/kata/search/javascript?q=&tags=Functional+Programming&beta=false

//Dollars and Cents level 8
//https://www.codewars.com/kata/dollars-and-cents

formatMoney = amount => {
 let theFixed = amount.toFixed(2)
 let string = theFixed => {return theFixed.toString()}
 let dollars = string => {return "$" + string}
 return dollars(theFixed)
}

//Functional Additon level 7
//https://www.codewars.com/kata/functional-addition/

add = n => {return f => {return n + f}}

//Curry Function Multiple All
//https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array/train/javascript

multiplyAll = array => {num => {return array.map(x => { return x * num})}}

//Calculate Average
//https://www.codewars.com/kata/calculate-average/train/javascript

find_average = a => {return a.reduce((b,c) => {return b + c})/a.length}

//The 'if' function
//https://www.codewars.com/kata/the-if-function/train/javascript

_if = (bool, func1, func2) => { return bool == true ? func1 : func2 }

//https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names/train/javascript
//Coding Meetup #15 - Higher-Order Functions Series - Find the odd names

findOddNames = (list) => {
  getName = list.map(x => {return x.firstName})
  char = string => {return string.charCodeAt(0)}
  char2 = string => {return string.charCodeAt(1)}
  char3 = string => {return string.charCodeAt(2)}
  nameValue = name => {return char(name) + char2(name) + char3(name)}
  nameToNum = getName.map(x => {return nameValue(x)})
  let theOddOne, empty;
  odd = nameValue => {nameValue % 2 == 1 ? theOddOne = nameToNum.indexOf(nameValue) : empty = []
  nameToNum.map(x => {return odd(x)})
  return theOddOne === undefined ? empty : [list[theOddOne]]
}