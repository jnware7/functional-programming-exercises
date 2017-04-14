require('../support');
var Task = require('data.task');
var _ = require('ramda');

// Exercise 1
// ==========
// Use _.add(x,y) and _.map(f,x) to make a function that increments a value inside a functor

var add =  function(x){return _.add(x,1)}
var ex1 = function(y){return _.map(add,y)}

// Exercise 2
// ==========
// Use _.head to get the first element of the list
var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
var ex2 = function(xs){return _.map(_.head, xs)}


// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user
// var safeProp = _.curry(function (x, o) { return Maybe.of(o[x]); });
// Modified safeProp
var safeProp = _.curry(function(x) { return Maybe.of(x); });
var user = { id: 2, name: "Albert" };
var ex3 = function(user) { return safeProp(_.head(user.name))}

// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement

// var ex4 = function (n) {
//   if (n) { return parseInt(n); }
// };

var ex4 = function(num) {return Maybe.of(parseInt(num))};

// Exercise 5
// ==========
// Write a function that will getPost then _.toUpper the post's title
//
// getPost :: Int -> Future({id: Int, title: String})


var getPost = function (i) {
  return new Task(function(rej, res) {
    setTimeout(function(){
      res({id: i, title: 'Love them futures'})

    }, 300)
  });
};

var ex5 = function(num){ return _.map(_.toUpper(), _.map(_.prop('title'), getPost(num))) };

// Exercise 6
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access or return the error

var showWelcome = _.compose(_.concat( "Welcome "), _.prop('name'));
var checkActive = function(user) {
 return user.active ? Right.of(showWelcome(user)) : Left.of('Your account is not active')
};

var ex6 = function(user) {return checkActive(user)}

// Exercise 7
// ==========
// Write a validation function that checks for a length > 3. It should return Right(x) if it is greater than 3 and Left("You need > 3") otherwise

var ex7 = function(x) {return x.length > 3 ? Right.of(x) : Left.of ("You need > 3")};

// Exercise 8
// ==========
// Use ex7 above and either as a functor to save the user if they are valid or return 
// the error message string. Remember either's two arguments must return the same type.

var save = function(x) {
  return new IO(function() {
    console.log("SAVED USER!");
    return x + '-saved';
  });
};

//Need to understand how to use EITHER couldn't find clear explanations
var ex8 = function(x) {return x.length > 3 ? save(x) : ex7(x)} 

module.exports = {ex1: ex1, ex2: ex2, ex3: ex3, ex4: ex4, ex5: ex5, ex6: ex6, ex7: ex7, ex8: ex8};