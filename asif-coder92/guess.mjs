import promptSync from "prompt-sync"
const prompt=promptSync();
const maxValue=10;
const randomNumber=Math.floor(Math.random()*maxValue) //math floor method will convert it into a lower down round figure

let status=false;

while(!status){
    let userInput=prompt(`Guess a number between 1 and ` +maxValue + ' ' );
    userInput=Number(userInput);
    if (userInput===maxValue)
    {
        status=true;
        console.log("You won!The number was "+randomNumber)
    

    } else if(userInput>randomNumber){
        console.log("Sorry your guess is too high")
    }else{
        console.log("sorry your guess number is too low")
    }

}
