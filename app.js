// Addition
function addition (num1, num2) {
    return num1 + num2 ; 
}
console.log(addition(3,5))

// Hours into seconds
function multiplication (hours) {
    return hours * 3600
}
console.log (multiplication(2))

// perimeter of a square/rectangle
function calculatePerimeter(length, width){
    return (length * 2) + (width * 2)
}
console.log(calculatePerimeter(6,7))

// area of a triangle
function areaTriangle (base,height) {
    return .5*(base*height)
}
console.log(areaTriangle(10,10))

// Extend a string
function addFrontend (string) {
    return string + `Frontend`
}
console.log(addFrontend(`apple`))

// greater than 100
function grtThan100 (num1, num2) {
    return num1 + num2 > 100
}
console.log(grtThan100(50,70))

// less than or equal to 0
function zero (number) {
    return number <= 0
} 
console.log(zero(6))

//opposite Boolean
function oppBoolean (bool){
    return !bool
}
console.log(oppBoolean(true))

// not the number 0
function notZero (number) {
    return number !== 0
}
console.log(notZero(0))

//calculate the remainder
function calcRemainder (num1, num2) {
    return num1 % num2
}
console.log(calcRemainder(7,8))

// is the number odd?
function oddOrEven (num) {
    return num % 2 !== 0
}
console.log(oddOrEven())

//if even, return -1
function ifEven (num) {
    return num % 2 === 0? 1 : -1
}
console.log(ifEven(5))

//check if user is logged in and subscribed
function userStatus (string1, string2) {
    return string1 === `Logged_in` && string2 === `subscribed`
}
console.log(userStatus(`Logged_in`, `subscribed`))

