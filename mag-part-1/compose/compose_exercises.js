require('../support');
var _ = require('ramda');
var accounting = require('accounting');
  
// Example Data
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

var isLastInStock = _.compose(_.prop('in_stock'), _.last());

// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car

var nameOfFirstCar = _.compose(_.prop('name'), _.head());

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition

var _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; // <- leave be
var averageDollarValue = _.compose(_average, map(function(c) { return c.dollar_value }));

// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that takes an array of cars and 
// returns a list of lowercase and underscored names: e.g: sanitizeNames([{name: "Ferrari FF"}]) //=> ["ferrari_ff"].

var _underscore = replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize
var sanitizeNames = _.map(_.compose(_underscore, _.toLower, _.prop('name')))

// var sanitizeNames = _.compose();

// Bonus 1:
// ============
// Refactor availablePrices with compose.

var available_cars = _.filter(_.prop('in_stock'));
var format  = map(function(x){return accounting.formatMoney(x.dollar_value)});
var availablePrices = _.compose( join(', '), format, available_cars)

// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip()

var sorted = _.sortBy(function(car){ return car.horsepower });
var fastest = _.last();  
var result = function(theFastCar){return theFastCar.name + ' is the fastest'};
var fastestCar = _.compose(result, fastest, sorted)

module.exports = { CARS: CARS,
                   isLastInStock: isLastInStock,
                   nameOfFirstCar: nameOfFirstCar,
                   fastestCar: fastestCar,
                   averageDollarValue: averageDollarValue,
                   availablePrices: availablePrices,
                   sanitizeNames: sanitizeNames
                 };
