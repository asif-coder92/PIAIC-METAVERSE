/*const loginDetail=(email, Password)=>{
    setTimeout(()=>{
        return {
            userEmail: email,
            userPassowaord: Password
        }
    }, 2000)
}
const userData=loginDetail("mr.asifjamal@gmail.com", "ajamal")
console.log(userData) // now by calling this function we will have the result in the console as undefined because
                    // when the loginDetail is called, we have the another function inside its body i.e settimeout function which will take 2 minutes delay to execute
                    //thus the JS sends this delay function to another call stack (web api) where it is running and executed.
                    //during the calling of loginDetail immediatly, JS dont have any value to print it becuase the function is running in the web api so in result we have undefined value.

                // to cater this problem we have to write a function inside loginDetail which call back the settimeout function which is running inside another stack (web api)
                // so the following will work as;  */


const loginDetail=(email, Password, callback)=>{
setTimeout(()=> {
// callback("Asif Jamal")
callback(email)

}, 2000)}
        
// const userData=loginDetail("mr.asifjamal@gmail.com", "ajamal", (userName)=>console.log("User logged",userName))
//  console.log(userData)

 loginDetail("mr.asifjamal@gmail.com", "ajamal", (email)=>console.log("User logged in as ",email))
 
/*...................................................................................*/

const getUserVideos=(email,callb)=>{
setTimeout(()=> {
callb( ["Video1","Video2","Video3"])

}, 2000) 
}

loginDetail("mr.asifjamal@gmail.com", "ajamal", (email)=> {
console.log("User logged in as ",email)
getUserVideos(email, (videos)=> console.log("videos fetched"))
getUserVideos(email, (videos)=> console.log(videos)) 
})  