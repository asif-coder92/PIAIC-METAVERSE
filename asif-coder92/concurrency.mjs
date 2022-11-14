//Concurrency means doing task simultaneously or in parallel. 
//three type of concurrency . Call back, promises and asynchronous
// call back is a function which is being input as an argument in other function
//call back then executed in its executed block

function doFlexiblejob(executedStuff) {
    executedStuff();
    console.log("do flexibleStuff");  
}
const function1=()=>console.log("Hello from funciton1")
doFlexiblejob(function1)
