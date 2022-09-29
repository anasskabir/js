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

// falsy or truthy?
function isItFalsy (item1, item2) {
    return !item1 ? item1 : item2
}
console.log(isItFalsy(0,`500`))

// return length of array
function arrayLength (array) {
    return array.length
}
console.log(arrayLength([1,2,3]))

//last element of array
function lastElement (array) {
    return (array[array.length - 1])
}
console.log(lastElement([`dog`, `cat`, `ball`]))

// sum of array
function sumArray (array) {
    let sum = 0
    for (let i = 0; i < array.length; ++i) {
        sum = sum + array[i]
    }
    return sum
}
console.log(sumArray([0,-5,-9]))

//adding number from a single number
function addGroup (num) {
    let sum = 0;
    for (i = 1; i <= num ; ++i){
        sum = sum + i;
    }
    return sum
}
console.log(addGroup(4))

// seconds to time format (mm:ss)
function calcTime (seconds) {
    let minutes = Math.floor(seconds / 60)
    let timeSeconds = seconds % 60

    if ( minutes.toString().length === 1){
        return `0`+minutes + `:` + timeSeconds
    }

    return minutes + `:` + timeSeconds
}
console.log(calcTime(5737))

//find larget number in array
function findLarge (array) {
    let max = array[0];
    for (i = 0; i < array.length; ++i){
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max
}
console.log(findLarge([-200,-100, -300]))

//reverse a string using incrementing loop
function incRevString(string) {
    let newString1 = ``
    for ( i=0; i < string.length; ++i){
        newString1 = string[i] + newString1;
    }
    return newString1;

}
console.log(incRevString(`abc`))

//reverse a string using a decremementing loop
function decRevString (string) {
    let newString2 = ``
    for (i = string.length - 1; i >= 0; --i){
        newString2 = newString2 + string[i]
    }
    return newString2
}
console.log(decRevString(`abcde`))

// convert string to array (in order to edit - [in this case reverse])
/** 1. .split('') -> converts string to array
 *  2. .reverse -> reverses array
 *  3. .join('') -> converts array to string
 */
function revStrIntoArr (string){
    let newArr = string.split('')
    return newArr.reverse().join('')
}
console.log(revStrIntoArr('qwerty'))

// turn every element in array to 0 (for loop)
function forToZero (array){
    for (i = 0; i < array.length; ++i){
        array[i] = 0
    }
    return array
}
console.log(forToZero([1,2,3,4,5]))

// turn every element in array to 0 (array fill)
function fillToZero (array) {
    return new Array(array.length).fill(0)
}
console.log(fillToZero([1,2,3,4,5,6]))

//turn every element in array to 0 (array map)
function mapToZero (array) {
    let newArr = array.map(element => 0)
    return newArr
}
console.log(mapToZero([1,2,3,4,5]))

//filter out all the apples (for loop)
function removeApples (array){
    let noApple = []
    for (i = 0; i < array.length; ++i){
        if (array[i] !== 'Apple'){
            noApple.push(array[i])
        }
    }
    return noApple
}
console.log(removeApples(['Banana','Apple','Orange','Apple']))

//filter out all the apples (array.map)
function removeApplesMap (array) {
    return array.filter (element => element !== `Apple`)
}
console.log(removeApplesMap(['Banana','Apple','Orange','Apple']))

// filter out all the falsy values (for loop)
function removeFalsy (array) {
    let noFalsy = []
    for (i = 0; i < array.length; ++i){
        if (!array[i] === false){
            noFalsy.push(array[i])
        }
    }
    return noFalsy
}
console.log(removeFalsy(['Tomato','Apple','Banana',0, "",]))

//filter out all the falsy values (filter)
function removeFalsyFilter (array){
    return array.filter(element => !element === false )
}
console.log(removeFalsyFilter(['Tomato','Apple','Banana',0, "",]))

//truthy to true, falsy to false
function TtoTFtoF (array){
    // let newArray = []
    // 1)
    // for (i = 0; i < array.length ; ++i){
    //     if (!!array[i] === true){
    //         newArray.push(true)
    //     }
    //     if (!!array[i] === false){
    //         newArray.push(false)
    //     }
        
    // }
    // return newArray
    // 2)
    // for (i = 0; i < array.length ; ++i){
    //     newArray.push(!!array[i])
    // }
    // return newArray
    // 3)
    return array.map(element => !!element)
}
console.log(TtoTFtoF([500,0,"David","",[]]))