//calback




//Create a function `fetchData(id, callback)` that simulates fetching data from a database. After 2 seconds, pass the result to the callback function.

function fetchData(user_id, callback) {
    let data;
    const users = [
        { id: 101, name: "karan" },
        { id: 102, name: "sharan" }
    ];

    users.forEach(i => {
        if (i.id === user_id) {
            data = i
        }

    })

    callback(data)
}

function getData(data) {
    console.log("fetched data from a database", data);
}

fetchData(101, getData);

//Write a custom implementation of the `map()` function (called `mapCallback()`), which applies a callback function to each element of an array and returns the results in a new array.
function mapCallback(arr, callback) {
    let result = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        result.push(callback(arr[i]))
    }
    return result;
}
function getArray(num) {
    return 2 * num
}

let arr = [87, 6, 5, 5, 4, 3, 5, 7, 8];

const newArray = mapCallback(arr, getArray);
console.log("new Array", newArray);

//Write a function `getUserDetails(userId, callback)` that first fetches the user’s basic information, and once that is done, fetches their associated role using nested callbacks.
function getUserDetails(userId, callback) {
    const Employees =
        [{
            id: 101,
            name: "trump",
            role: "employee"
        },
        {
            id: 102,
            name: "donald",
            role: "manager"
        }
            ,
        {
            id: 103,
            name: "nick",
            role: "employee"
        }]
    userId = 101;
    console.log("userId:", userId, "Type of userId:", typeof userId);
    const data = Employees.filter(i => i.id === userId); 
    callback(data)
}

function nestedCallBack(data) {
    console.log("USer filter ",data)
    const role1=data.filter(i=>i.role)
    console.log("Role is ",role1)
}
getUserDetails(101, nestedCallBack)



//promises
console.log("Promises++++++++++++++++++++++++++")
//Write a function `delay(ms)` that returns a Promise that resolves after `ms` milliseconds. Use it to simulate a delayed task (e.g., logging something after 2 seconds).
function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Logging something after 2 seconds');
            resolve(); 
        });  
       });
}


const task = delay().then(() => {
    console.log('log completed');
}).catch((error) => {
    console.log('error logging the reqst:', error);
});










//Create a function `fetchData(id)` that returns a Promise that resolves with a fake user data object (e.g., `{ id: 1, name: 'John' }`). Chain multiple `.then()` 
//calls to modify the fetched data (e.g., add a property `status: 'active'`).
function fetchData(id){

    return new Promise((resolve,reject)=>{
    let emp={
        id: id,
        name: "nick",
        role: "employee"
    }   
    resolve (emp); 
   })
}
const data=fetchData(101).then((emp)=>{
   emp.status='active';
   return emp;
   console.log(emp)
}).then((updateEmp)=>{
    updateEmp.status='active';
    return updateEmp;
    console.log(updateEmp);
}).then((deleteEmp)=>{
    deleteEmp.status='Inactive';
    console.log(deleteEmp);

})

//Write a function `fetchUserData(ids)` that takes an array of user IDs and returns a Promise that resolves with an array of user data objects. 
//Use `Promise.all()` to fetch data for multiple users concurrently.
let users = [
    { id: 101, name: "karan" },
    { id: 102, name: "sharan" },
    { id: 103, name: "taran" },
    { id: 105, name: "kiran" },
];


function getUserDataById(id) {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.id === id);
        if (user) {
            resolve(user); 
        } else {
            reject(`User with id ${id} not found`); 
        }
    });
}

function fetchUserData(ids) {
    const promises = ids.map(id => getUserDataById(id)); 
        return Promise.all(promises) 
        .then(userData => {
            return userData; 
        })
        .catch(error => {
            console.error("Error fetching user data:", error);  
            throw error;  
        });
}

const id_Arr = [101, 102, 103, 105];

fetchUserData(id_Arr).then(users => {
    console.log("Fetched Users:", users);  }).catch(error => {
    console.log("Error:", error);  
});

//Write a function `fetchDataFromAPI(url)` that returns a Promise. If the URL is invalid, reject the 
//Promise with an error message, and handle the rejection using `.catch()`.

function fetchDataFromAPI(url){
   return new Promise((resolve,reject)=>{
         if(url==="http:localhost:1010/www.com")
         {
            resolve("url is verified");
         }
         else{
            reject("Invalid url");
         }
   })
}


const url="http:localhost:1010/w.com";
fetchDataFromAPI(url).then((ur)=>{
    console.log(ur)
}).catch((error)=>
{
    console.log(error) 
}
)

//Write a function `fetchUserInfo(id)` that first fetches user data using a Promise, then after a 2-second delay, fetches additional 
//info about the user (e.g., a list of the user's posts). Chain these Promises together.
 
users = [
    { id: 101, name: "karan" },
    { id: 102, name: "sharan" },
    { id: 103, name: "taran" },
    { id: 105, name: "kiran" },
];

 posts = [
    { userId: 101, postId: 1, content: "Post 1 by karan" },
    { userId: 101, postId: 2, content: "Post 2 by karan" },
    { userId: 102, postId: 3, content: "Post 1 by sharan" },
    { userId: 103, postId: 4, content: "Post 1 by taran" },
    { userId: 105, postId: 5, content: "Post 1 by kiran" },
    { userId: 105, postId: 6, content: "Post 2 by kiran" }
];

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getUserData(id) {
    const user = users.find(user => user.id === id); 
   
    await delay(2000); 
        console.log("User data fetched:", user);
    return user;
}

async function getUserPosts(user) {
    const userPosts = posts.filter(post => post.userId === user.id); 
    if (!userPosts.length) throw new Error("No posts found for this user");

    await delay(2000); 
    console.log("User posts fetched:", userPosts);
    return userPosts;
}

async function getUserDataAndPosts(userId) {
    try {
        const user = await getUserData(userId); 
        const posts = await getUserPosts(user);  
        console.log("Final user posts:", posts); 
    } catch (error) {
        console.error("Error:", error.message); 
    }
}

getUserDataAndPosts(105);


//Write an `async` function `fetchWithRetry(url, retries)` that attempts to fetch data from a URL. If the fetch fails, it retries up to the specified number 
//of retries. If it still fails after the maximum number of retries, it should throw an error.


async function fetchWithRetry(url, retries) {
    let attempts = 0;
    while (attempts < retries) {
        try {
            const response = await fetch(url);
            
            if (response) {
                const data = await response.json();  
                return data;  
            } else {
                throw new Error(`Request failed with status:`);
            }
        } catch (error) {
            attempts++;
            console.error(`Attempt failed:`, error.message);
            
            if (attempts >= retries) {
                throw new Error(`Failed to fetch after attempts`);
            }
            
            await new Promise(resolve => setTimeout(resolve, 1000));  
        }
    }
}



fetchWithRetry(url, 3)
    .then(data => {
        console.log("fetched data:>", data);  
    })
    .catch(error => {
        console.error(error);  
    });


