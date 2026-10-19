// Questions On Switch Statement

// 1. Browser Execution Framework
// Browsers:
// let browser = "Chrome";
// Rules:
//  Chrome → Run Smoke Tests
//  Firefox → Run Regression Tests
//  Edge → Run API Tests
//  Safari → Run Sanity Tests
// Expected Output:
// Executing Smoke Tests

let browser = "Chrome";
switch (browser) {
        case 'Safari':
        console.log('Run Sanity Tests')
        break;
         case 'Firefox':
        console.log('Run Regression Tests')
        break;
         case 'Edge':
        console.log(' Run API Tests')
        break;
         case 'Chrome':
        console.log('Run Smoke Tests')
        break;
    
    default:
        break;
}


// 2. Environment Configuration Loader
// Input:
// let env = "QA";
// Rules:
// QA → test.qa.com
// UAT → test.uat.com
// PROD → prod.com
// Print environment URL.
let env = "QA";
switch (env) {
        case 'PROD':
        console.log('prod.com')
        break;
        case 'UAT':
        console.log('test.uat.com')
        break;
        case 'QA':
        console.log('test.qa.com')
        break;

    default:
        break;
}


// 3. Payment Processing System
// Input:
// let paymentMode = "UPI";
// let amount = 10000;
// Rules:
// UPI → 2% cashback
// CARD → 5% cashback
// NETBANKING → 3% cashback
// Calculate final cashback.

let paymentMode = "UPI";
let amount:number = 10000;

switch (paymentMode) {
        case 'NETBANKING':
              console.log('3% cashback ' , amount * 3/100 );
        break;
         case 'CARD':
        console.log('5% cashback ' , amount * 5/100 );
        break;
         case 'UPI':
        console.log('2% cashback ' , amount  * 2/100);
        break;

    default:
        break;
}


// 4. API Status Code Analyzer
// Input:
// let statusCode = 404;
// Rules:
// 200 → Success
// 400 → Bad Request
// 404 → Resource Not Found
// 500 → Internal Server Error
let statusCode = 404;
switch (statusCode) {
        case 200:
        console.log("Success")
        break;
        case 400:
        console.log("Bad Request")
        break;
        case 404:
        console.log("Resource Not Found")
        break;
         case 500:
        console.log("Internal Server Error")
        break;
    default:
        break;
}


// 5. Employee Role Access System
// Input:
// let role = "QA";
// Rules:
// QA → Access Test Environment
// DEV → Access Development Server
// ADMIN → Full Access
// USER → Limited Access

let role = "QA";
switch (role) {
        case 'DEV':
        console.log("Access Development Server")
        break;
        case 'ADMIN':
        console.log("Full Access")
        break;
         case 'USER':
        console.log("Limited Access")
        break;
         case 'QA':
        console.log("Access Test Environment")
        break;

    default:
        break;
}