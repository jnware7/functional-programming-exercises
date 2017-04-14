// Solution for Functional Programming
//https://www.codewars.com/kata/dollars-and-cents/train/javascript

//dollars-and-cents
const formatMoney = amount=>{
  const dollarSign = '$'
  const fixed = amount.toFixed(2)
  const newMoney = fixed => {return dollarSign.concat(fixed)}
  return newMoney(fixed)
}
//https://www.codewars.com/kata/functional-addition/train/javascript
//Functional Addition
add = n => {
 return n2 => {
   return n+ n2
 }
}
//https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array/train/javascript
//Currying functions: multiply all elements in an array
function multiplyAll(arr){
  return function(num){
    return arr.map(function(element){
        return num * element
    })
  }
}
//https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names/train/javascript
//Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
function findOddNames(list) {
  var getName = list.map(function(x){
    return x.firstName
  })
  var char = function(string){
    return string.charCodeAt(0)
  }
    var char2 = function(string){
    return string.charCodeAt(1)
  }
    var char3 = function(string){
    return string.charCodeAt(2)
  }
  var nameValue = function(name) {
    return char(name) + char2(name) + char3(name)
  }

  console.log(getName)
  console.log(nameValue('aba'))

  var nameToNum = getName.map(function(x){
    return nameValue(x)
  })

  console.log('nameToNum:',nameToNum)

  var theOddOne;
  var returnOdd;
  var empty

  var odd = function(nameValue){
    if(nameValue % 2 == 1){
      theOddOne = nameToNum.indexOf(nameValue)
    } else empty = []
  }

  nameToNum.map(x => {return odd(x)})

  returnOdd = theOddOne === undefined ? empty : [list[theOddOne]]

  return returnOdd
}
//https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food/train/javascript
// Order the food
function orderFood(list){
  var count = {}
  var getMeals = list.map(function(x){
  return x.meal
 })
 console.log('meal: ', getMeals)

 var countMeals = getMeals.forEach(function(y){
   count[y] = (count[y]||0) + 1;

 })
 return count
}
