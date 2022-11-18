// console.log('js is linked!')

// Callbacks

// js has 'first class functions'
// a function can be anything in javascript

// creating named functions
function myNamedFunction() {}
// assigning a anonymous function to a varaible
const myAnonFunction = function() {}
// anonymous arrow functions
const myArrow = () => {}

// fisrt class functions can be passed to other functions as arguments
// addEventListener is a 'higher order function'
// element.addEventListener('click', function(e) {}) // example of a 'callback function'

// higher order function -- takes another function as an argument
// callback function -- a function that is passed as an argument to another function

// DIY higher order function
function higherOrder(banana) {
    // since this is a higher order function, it will invoke the callback
    banana()
}

// defining a named callback function
function myCallback() {
    console.log('the callback has been invoked!')
}

higherOrder(myCallback)
higherOrder(function() {
    // inside the anonymous function
    console.log('hello from the anonymous callback! 👋')
})

// callback calculator
// higher order function
function doCalculation(numOne, numTwo, callbackMath) {
    return callbackMath(numOne, numTwo)
}

// callback for adding
function add(firstNum, secondNum) {
    return firstNum + secondNum
}

// console.log(add(10, 15))
let result = doCalculation(43, 7, add)
console.log(result)
result = doCalculation(10, 5, function(taco, banana) {
    return taco - banana
})
console.log(result)

// Timing functions

// (these are higher order functions)

// setInterval -- executes a callback function at a specified interval
function tick() {
    console.log('tick')
}

// setInteral(callback to invoke, time in ms to invoke it)
let tickInterval = setInterval(tick, 1000)
// clearInterval(tickInterval)

// an anonymous function as the callback
setTimeout(function() {
    setInterval(function() {
        console.log('tock')
    }, 1000)
}, 500)

// setTimeout -- executes a callback ONE TIME after a certain amount of time has passed
function timeoutCallback() {
    console.log('the timeout is running!')
    clearInterval(tickInterval)
}

let timeoutInterval = setTimeout(timeoutCallback, 1000)
clearTimeout(timeoutInterval)

