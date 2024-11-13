//Write a program using `fs.promises.readFile()` to read the content of a text file and log it to the console.


const { rejects } = require('assert');
const { error } = require('console');
const { copyFileSync } = require('fs');
const { resolve } = require('path');
let fs = require('fs').promises;

fs.readFile('example.txt', 'utf8').then((data) => {
    console.log("fs read file data")
}).catch((error) => {
    console.log("error while reading file")
})

console.log('File read initiated');

//Modify the program to read a JSON file and parse its content into a JavaScript object.

fs = require('fs').promises;

fs.readFile('example.txt', 'utf8').then((data) => {
    console.log("data json::", data)
    const objectData = JSON.parse(data)
    console.log("objectData", objectData)
    console.log("data in object all ")

    objectData.users.forEach(user => {
        console.log(`Hobbies for ${user.first_name} ${user.last_name} :`, user.hobbies, user.address);
    });

})

// Add error handling to your program to catch and log any errors (e.g., file not found or permission issues).

fs = require('fs').promises;

function readingFile() {
    return new Promise((resolve, reject) => {
        const data = fs.readFile('example.txt', 'utf-8');
        if (data) {
            resolve(data);
        }
        else {
            reject("File Not Found Error");
        }
    }
    )
}

readingFile().then((data) => {
    userDetails = JSON.parse(data);
    console.log("userDetails", userDetails)
}).catch((error) => {
    console.error("erorr", error)
})

//Write a program using `fs.promises.appendFile()` to append new text to an existing file.
 fs = require('fs').promises;

async function insertUserData(newUserData) {

        
    
        const updatedData = JSON.stringify(newUserData, null, 2);

        await fs.appendFile('example.txt', updatedData, 'utf-8').then(()=>{
            console.log("User data updated successfully!");
        }).catch((error)=>{
            console.error("Error while inserting the user data:", error);
        })
}

let newUser = {
    "id": 4,
    "first_name": "Bob",
    "last_name": "Williams",
    "age": 40,
    "email": "bob.williams@example.com",
    "hobbies": ["swimming", "fishing", "golfing"],
    "address": {
        "street": "321 Birch Blvd",
        "city": "Chicago",
        "state": "IL",
        "zip": "60601"
    }
};
insertUserData(newUser);


//insert the new data into the array new user with writeFile  
newUser={
    
        "id": 4,
        "first_name": "Michael",
        "last_name": "Johnson",
        "age": 30,
        "email": "michael.johnson@example.com",
        "hobbies": ["playing basketball", "travelling", "photography"],
        "address": {
          "street": "102 Maple Ave",
          "city": "Los Angeles",
          "state": "CA",
          "zip": "90001"
        }
          
}
fs=require('fs').promises;

async function insertUserData(newUser){
    
    try {
       
        const existingUsers = await fs.readFile('example.txt', 'utf-8');
        let plainData = JSON.parse(existingUsers);
        
        plainData.users.push(newUser);

        const jsonData = JSON.stringify(plainData, null, 2);  
        
        await fs.writeFile('example.txt', jsonData, 'utf-8');
        
        console.log("Created Successfully new user in array object");
    } catch (error) {
        console.log("Something went wrong: ", error);
    } 
}
insertUserData(newUser)


async function renameFile1(fileName) {
    try {
        try {
            await fs.access('example.txt');
        } catch (err) {
            console.log('The source file "example.txt" does not exist.');
        }
        await fs.rename('example.txt', fileName);
        console.log("File is renamed successfully to:", fileName);
    } catch (error) {
        console.log("Something went wrong:", error);
    }
}

let fileName = 'UserDetails.txt';
renameFile1(fileName);
