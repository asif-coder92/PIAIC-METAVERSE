/*Promises are the functions which return an object, where we can attach callback, 
when promises are created the initial statement is pending depending on the execution of block
it either fullfilled or rejected. 
it improves code readibility, 

The new key word will create a constructor or class or an object of promise variable

const promise=new Promise(()=>console.log("Have a nice day")) 
console.log(promise);


Promise constructor or class takes two functions as parameter i.e resolve and reject both are callback functions.
resovle is called when our promise is succesfull otherwise the reject will called */

// const promise=new Promise((resolve, reject) => {
//     let marks=90
//     if (marks>=80) {
//         resolve("A")
//     }else {
//         reject()
//     }
// })

/*the following are ways to create the body of the two callback function i.e resolve and reject 
because in above code the we pass and call the resolve and reject function 
but we didnt yet define its body so in then statement we are creating the body. */

// promise.then((grade)=>{
//    console.log(grade)
//    return "give us treat" 
// }).then((treat)=>{
//     console.log(treat)
// })

//usually we write promises in function and return it inside the function

// const getMymarks=()=>{
//     return new Promise((resolve, reject) => {
//         let marks=90
//         if (marks>=80) {
//             resolve("A")
//         }else {
//             reject()
//         }
//     })
// }
// getMymarks().then((grade)=>{
//     console.log(grade)
// }
// )

// const loginDetailPromise=(email, Password)=>{
//     return new Promise((resolve, reject) =>{
//     setTimeout(()=> {
//     resolve(email)
//     }, 2000)})
// }
// loginDetailPromise("mr.asifjamal@gmail.com", 1234).then((email)=>{
//     console.log(email)
// })


const loginDetailPromise=(email, Password)=>{
    return new Promise((resolve, reject) =>{
    setTimeout(()=> {
        if (email==="mr.asifjamal@gmail.com" && Password===1234) {
            resolve(email)
        }else
        {
            reject("You entered wrong email or password")
        }
    }, 2000)})
}

const getUserVideos=(email)=>{
    return new Promise((resolve, reject) =>{
    setTimeout(()=> {
        if (email) {
            resolve( ["Video1","Video2","Video3"])
        }
        else{
            reject("Email not found")
        }
    
    }, 2000) 
    })}
 

loginDetailPromise("mr.asifjamal@gmail.com", 1234)
.then((email)=>{
    console.log(email)
    return getUserVideos(email)

}).then((videos)=>{
    console.log(videos);
})
.catch((err)=>{
    console.log(err)
})

