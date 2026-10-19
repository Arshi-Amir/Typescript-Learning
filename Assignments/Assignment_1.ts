// Assignment – TypeScript Variables


// Question 1:

// Create a variable called userName using let and store value:
// John
// Print the variable.
let userName : string = "John"
console.log(userName);


// Question 2:

// Create a constant variable called baseURL and store:
// https://testapp.com
// Print the value.
const baseURL : string = "https://testapp.com"
console.log(baseURL);


// Question 3:
// Create a variable:
// environment="QA"
// Update it to:
// UAT
// Print final value.
let environment : string ="QA"
environment = "UAT";
console.log(environment)


// Question 4:
// Create retry counter:
// retryCount=2
// Increase retry count by 1 and print updated value.
let retryCount = 2;
retryCount++;
console.log(retryCount);


// Question 5:
// Create variables:
// browser="Chrome"
// headless=true
// Print both values.
let browser = "Chrome" , headless = true;
console.log(browser," ",headless)


// Question 6:
// Create execution timeout variable:
// executionTimeout=30000
// Make it constant and try updating:
// 40000
// Observe result.
const executionTimeout=30000;
//executionTimeout = 40000; // updating a const value will show error 
console.log(executionTimeout)


// Question 7:
// Create variables:
// firstName="John"
// lastName="Doe"
// Combine and print full name.
// Expected:
// John Doe
let firstName : string ="John"
let lastName : string ="Doe"
console.log(firstName + " "+ lastName)


// Question 8:
// Create API configuration variables:
// apiURL="https://api.test.com"
// statusCode=200
// Print values.
const apiURL : string ="https://api.test.com";
let statusCode : Number = 200;
console.log(apiURL," ",statusCode)


// Question 9:
// Create variable:
// totalTests=100
// Create another variable:
// failedTests=15
const totalTests=100;
let failedTests=15;

// Calculate remaining passed tests.
// Formula:
// Passed = Total – Failed
let passed = totalTests - failedTests;
console.log("Passed Tests: " ,passed)


// Question 10:
// Create framework configuration:
// browser="Chrome"
// retry=2
let retry = 2
// timeout=30000
let timeout = 30000
// Print all variables.

console.log(browser," ", retry," ",timeout)

