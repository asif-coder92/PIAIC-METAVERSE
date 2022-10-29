let rain = true;
if(rain){
console.log("** Taking my umbrella when I need to go outside **");
} else {
console.log("** I can leave my umbrella at home **");
}

let age1=18;
if(age1 < 18) {
    console.log("We're very sorry, but you can't get in under 18");
    } else {
    console.log("Welcome!");
    }


let age = 100;
let cost = 0;
let message;
if (age < 3) {
cost = 0;
message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
cost = 5;
message ="With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
cost = 10;
message ="A regular ticket costs 10 dollars.";

} else {
cost = 7;
message ="A ticket is 7 dollars.";
}
console.log(message);
console.log("Your Total cost "+cost);

// ternry operator
let percentage=80;
const result=percentage>=80? "Pass":"Fail"
console.log(result)

//Switch statments

let position=prompt("where are you");
switch(position){
    case"America":
         console.log("you are in Americal");
        break;
    case "Paksitan":
        console.log("You are in Pakistan");
        break;
    default:
        console.log("You are not somewhere")
}
