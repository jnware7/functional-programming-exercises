require('../support');
var _ = require('ramda');



// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

// var words = function(str) {
//   return split(' ', str);
// };
var words = function(str) {
  return str.split(' ');
};
// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = function(array){
  return array.map(words);
}
// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

var filterQs = function(xs) {
  return xs.filter(match(/q/i));
};

var filterQs = function(xs) {
  return xs.filter(match(/q/i));
};
// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };
//
// REFACTOR THIS ONE:
// var max = function(xs) {
//   return reduce(function(acc, x){
//     return _keepHighest(acc, x);
//   }, -Infinity, xs);
// };
//
// REFACTOR THIS ONE:
var max = function(xs) {
  return xs.reduce(_keepHighest, -Infinity);  
};


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)

var slice = function(num1) {
  return function(num2) {
    return function(array) {
      return array.slice(num1, num2)
    }
  }
};

// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried


var take = function(num2) {
    return function(array) {
      return array.slice(0, num2)
    }
};

module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
