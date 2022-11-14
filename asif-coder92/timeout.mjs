/*Use the arrow format to create functions that output the values one and two to the
console. Create a third function that outputs the value three to the console, and then
invokes the first two functions.
Create a fourth function that outputs the word four to the console and also use
setTimeout() to invoke the first function immediately and then the third function.
What does your output look like in the console? Try to get the console to output*/

const one=()=>console.log("One")
const two=()=>console.log("two")
const three=()=>{
    console.log("three");
    one();
    two();

};
// three();

const four=()=>{
console.log("four");
setTimeout(one,4000); //it takes two parameters ie. the function name and the timeout in millisecond. so it will run the function after that specidifed timeout
three();
}
four();