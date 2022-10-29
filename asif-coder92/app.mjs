import { addTwonum } from "./hello.mjs";
console.log(addTwonum(3));

// const familyName = ["Asif", "Jamal","Dilawez","Rasikh"]
// familyName.push("Yasir")
// console.log(familyName)

const familyName = ["Asif", "Jamal","Dilawez","Rasikh"]
familyName.splice(2,0,"hamad") // this will add hamad at 2 index.. 0 mea not to delete any thing
console.log(familyName)