// function sum(num1,num2){

// if(num1>10){
//     return num1-num2;
// }
// else{
//     return(num1+num2)
// }
// } 
// console.log(sum(20,9))

// function Dilawaiz(child)
// {
//     return `Hey honey! whats up? hows our ${child} child`
    
// }
// const y= Dilawaiz("Sehrish")

// console.log(y);



/////////////////////////////////////////
// 
//////////////////////////////////////


// const number1=1;
// const number2=2;

// let operator="+"
function calculator(a,b,c) {
    if (c=="-")
    {
        // console.log(a-b)
        return (a-b);
    }
    else{
        // console.log(a+b);
        return (a+b);
    }

}
// let y=calculator(number1,number2,operator)


const array=[]

for (let i = 0; i < 10; i++) {
    let val1=i*5;
    let val2=i+i;
    let result=calculator(val1,val2)
    // console.log(result);
    array.push(result);  //storing the resut into the empty array
    
}
console.log(array);
