import promptSync from "prompt-sync"
import randomInteger from "random-int"


const choice= ["rock", "paper","scissor"];
let outcome="Please try for another turn"
const computerChoice=randomInteger(0,2);  //computer choices
// console.log(computerChoice)

const computerChoiceName=choice[computerChoice];
// console.log(computerChoiceName)

// now we will take input from the user

const userInput=promptSync();
const userChoice=userInput("Enter your choice: 0 for rock, 1 for paper, 2 for scissor");
const userCompletchoice=choice[userChoice];
console.log(userCompletchoice);


if(computerChoiceName===userCompletchoice){
    outcome="Draw"
}
else if(computerChoiceName==="rock" && userCompletchoice==="paper"){
    outcome="Computer Win" ;
}
else if(computerChoiceName==="scissor" && userCompletchoice==="rock"){
    outcome="User Win" ;
}
else if(computerChoiceName==="paper" && userCompletchoice==="scissor"){
    outcome="User Win" ;
}
else{
    outcome="Invalid Entry,Pls try again later";
}
console.log("The Computer choses " +computerChoiceName)
console.log("The User choses " + userCompletchoice)
console.log(outcome)






