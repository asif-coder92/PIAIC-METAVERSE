import promptSync from "prompt-sync"
var month=promptSync();
var monthDes=month("Enter month name ")
var charsinMonth=monthDes.length;
if (charsinMonth>3){
    let monthAbbr=monthDes.slice(0,3);
    console.log(monthAbbr);
}