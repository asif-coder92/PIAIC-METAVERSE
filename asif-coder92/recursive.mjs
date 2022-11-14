// function getrecursive(nr) {
//     console.log(nr);
//     getrecursive(--nr);//decrementing nr

// }
// getrecursive(5);

// function getrecursive(nr) {
//     console.log("Started fnction",nr);
//     if (nr>0){
//     getrecursive(--nr);//decrementing nr
//     }
// }
// getrecursive(5);

//best use case of recursive is factorial of any number

function factorial(fl) {
    console.log(fl);
    if (fl===0){
        return 1
    }
    else{
        return fl* factorial(--fl)
    }
}
console.log(factorial(0));