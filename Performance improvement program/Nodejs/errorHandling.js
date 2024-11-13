//Write a function that checks whether a user’s input is a valid email address. If it’s invalid, throw a ValidationError.

const email='pranv@gmal.com';

function validateEmail(email){
try{
    if(email==='pranv@gmail.com')
    {
        console.log("Approced")
    }
    else{
        throw new Error("invalid email");
        
    }
}
catch(error)
{
    console.log(error.message)
}
}
validateEmail(email)
//Implement a function that checks if a number is within a valid range (e.g., between 1 and 100). Throw an appropriate error if the number is outside this range.

var number=101
function checkTheAppropriateNumber(number){
try{
    if(number<100)
    {
        console.log('ohk')
    }
    else{
        throw new RangeError('out of range error')
    }
}
catch(error)
{
    console.log(error.message)
}
}
checkTheAppropriateNumber(number)

//Write a function that simulates reading a file. If the file doesn't exist or there’s an error reading it, throw an error with a custom message.
class FileReadError extends Error {
    constructor(message) {
        super(message);  
        this.name = "FilerreadError"; 
    }
}

// Function that simulates reading a file
function readFile(filename) {
    try {
       
        const fileSystem = {
            "file1.txt": "This is file 1......."
        };

       
        if (!fileSystem[filename]) {
            throw new FileReadError(`file "${filename}" does not exist...here`);
        }
        
      
        console.log(`Reading file: ${filename}`);
        console.log(`Content: ${fileSystem[filename]}`);
        
    } catch (error) {
       
        console.log(`${error.name}: ${error.message}`);
    }
}


readFile("file1.txt");  
readFile("file4.txt"); 

//Write a function that accepts a callback. The callback should be executed inside a try...catch block to handle any potential errors.

function checkstatus(callback)
{
    try
    {
        callback();
    }
    catch(error)
    {
        console.log(error.message)
    }
}
let num1=3
checkstatus(() => CheckPrimeNumber(num1)); 

function CheckPrimeNumber(num1){
     if(num1%2==0)
     {
        console.log("even number")
     }
     else{
        throw new Error("num format is odd")
     }
}

//How do you handle errors in a promise using .catch()? Provide an example.

function fetchData(isData){
    return new Promise((resolve,reject)=>{
       setTimeout( ()=>{
        if(resolve)
            {
                resolve("data is defined")
            }
            else{
                reject("data is undefined")
            }
        },2000)
    });
}
fetchData(false).then(result=>{
    console.log(result)
}).catch(reject=>{
    console.log(reject)
})


//If an async function throws an error, how can you catch it in the calling function?

async function fetchData1(data) {
    if (data) {
        return "data fetched successfully...";
    } else {
        throw new Error("failed to fetch data");
    }
}

async function callFetchData() {
    try {
        const result = await fetchData1(false);  
        console.log(result);
    } catch (error) {
        console.error( error.message);
    }
}

callFetchData();

