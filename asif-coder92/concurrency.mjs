//Concurrency means doing task simultaneously or in parallel. 
//three type of concurrency . Call back, promises and asynchronous
// call back is a function which is being input as an argument in other function
//call back then executed in its executed block

// function doFlexiblejob(executedStuff) {
//     executedStuff();
//     console.log("do flexibleStuff");  
// }
// const function1=()=>console.log("Hello from funciton1")
// doFlexiblejob(function1)

//call back 2nd example

// setInterval(() => {
//     console.log("Hello world")
// }, 1000);

//call back 3rd example

// 1. create a function name greet

function greet(fullname){
    console.log(`Hello ${fullname[0] + ' '+ fullname[1]}`);
}
//create a second function tht has two arguments, string for the user
// full name, and the second is the call back function
function secondFunction(userName, callback)
{
// split the string into an array using split() method.
    const spliting=userName.split(" ")

    //send the full name array to the greet() function created in the first step
    
    // console.log(spliting);
    
    callback(spliting);
}

secondFunction("ASIF jamal", greet)

