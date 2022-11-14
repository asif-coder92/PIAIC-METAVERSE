//this in object..  it reduce the code and easy to readable
// "This" keyword use
//with "This" keyword in arrow function denotes the object
//in arrow function we dont have the function keywords , we start directly from parameter

// e.g  (param)=>statement or ()=> statement
// ()=>{}

// function add (x,y){
//     return x+y
// }
// add(1,2)

// now we will convert the above regular normal function into arrow function

//let add2=(x,y)=>x+y
//add2(1,2) // calling an arrow function

// .........................................................................................//

//spread operator used to extract and copy the content of an array

// const number1=[1,2,3,4];
// const number2=[3,4,6,7];
// const numbercombined=[...number1,...number2];
// console.log(numbercombined)


//..................................................................................//
//rest parameters is when you passed unlimited parameters n fucntions and the return output of those passing numbers will come as an arry

// const addnumbers=(...numbers)=>{
//     let result=2;
// for (let i= 0; i < numbers.length; i++) {
//     result=result+numbers[i]
// }
//     // console.log(result * numbers[i]);
//     return result
// }
   
// const finalResult=addnumbers(0,2,3,4,7,8,9)
// console.log(finalResult);


