// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.


describe("fibonacciSeq", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const test1 = [6]
    const test2 = [10]
    expect(fibonacciSeq(test1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciSeq(test2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.

// create a function named "fibonacciSeq"
// create a param of array
// loop to iterate up to the number that we input
// add the output to the previous number that was outputted 

const fibonacciSeq = (array) => {
  let num = []
  num[0] = 1
  num[1] = 1
  for (let i = 2; i < array; i++){
    num.push(num[i - 2] + num[i - 1])
  }
  return num
}

 console.log(fibonacciSeq(8));
 

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("sortedOdd", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    expect(sortedOdd(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(sortedOdd(fullArr2)).toEqual([-823, 7, 23])
  })
})

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

//create a function called 'sortedOdd'
//input a param of 'array'
//sort array from least to greatest
//filter the array and return the data type equal only to 'number' and odd numbers

const sortedOdd = (array) => {
    array.sort(function(a, b){return a-b})
  return array.filter(array => {
       return typeof(array) === 'number' && array % 2 !== 0
    })
  }


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


describe("accumSum", () => {
  it("returns accumulating sum array based on input array", () => {
    expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(accumulatingSum(numbersToAdd3)).toEqual([])
  })
})


// b) Create the function that makes the test pass.

//create function called 'accumulatingSum'
//enter param of 'array'
//create new variable called 'newArray'
//use forEach method to call upon each element of array
//create params of 'number, index' 
//create conditional statement stating first 'number' will stay as is
//add 'number' to the newArray 


const accumulatingSum = (array) => {
  let newArray = []
  array.forEach((number, index) => {
      if (index === 0){
        newArray[index] = number
      } else {
        newArray[index] = number + newArray[index - 1]
      }
  })
  return newArray
}