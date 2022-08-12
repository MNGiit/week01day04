// 1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
const maxOfTwoNumbers = (x, y) => {
    if(x >= y) { return x }
    else return y
}
// console.log(maxOfTwoNumbers(10, 20))
// console.log(maxOfTwoNumbers(30, 20))

// 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThreeNumbers = (x, y, z) => {
    let max = 0;
    x > y ? max = x : max = y
    // max > z ? max : max = z
    if(max > z) return max
    else return z

    // if(x > y) max = x
    // else max = y

    // if(max > z) return max
    // else return z
}
// console.log(maxOfThreeNumbers(10, 20, 30))
// console.log(maxOfThreeNumbers(30, 20, 10))
// console.log(maxOfThreeNumbers(10, 20, 30))

// 3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
const isCharAVowel = (c) => {
    let vowels = ["a", "e", "i", "o", "u"] // and sometimes y?
    return vowels.includes(c)
}
// console.log(isCharAVowel("a"))
// console.log(isCharAVowel("b"))

// 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
const sumArray = (nums) => {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) { sum += nums[i]}
    return sum;
}
// console.log(sumArray([1, 2, 3]))


// 5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
const multiplyArray = (nums) => {
    let product = nums[0]
    for(let i = 1; i < nums.length; i++) product *= nums[i]
    return product
}
// console.log(multiplyArray([2, 4, 5]))

// 6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
// const numArgs = (nums) => { return nums.length }
let numArgs = function(nums) { return nums.length }
// console.log(numArgs(["a", "b", "c", 1, 2, 3]))

// 7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
// function reverseString(words) { return words.reverse() } // doesn't work?!?!
// let strTest = "This is a string."
// console.log(strTest.reverse())
function reverseString(words) {
    let newString = "";
    for(let i = words.length; i > 0; i--) { newString += words[i-1] }
    return newString;
}
// console.log(reverseString("Hello"))


// 8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
// const longestStringInArraythat(a)
let longestStringInArray = function(arr) {
    let longestStr = "";
    for(let i = 0; i < arr.length; i++) { if (arr[i].length > longestStr.length) longestStr = arr[i]}
    return longestStr;
}
// console.log(longestStringInArray(["Bob", "Dr. House", "Super Mario"]))

// 9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
function stringsLongerThan(arr, num) {
    let newStrings = [];
    for(let i = 0; i < arr.length; i++) { if(arr[i].length > num) newStrings.push(arr[i])}
    return newStrings
}
// console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))
// Note: some of these questions are saying the function is an expression, or a declaration, go over again.