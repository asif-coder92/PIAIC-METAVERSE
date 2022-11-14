// create an ecommerece store, product in store and cobmination of gift atached with products
// const products=["Shirts","Jacket","Trouser"];
// const gifts=["pen","Keychain","Tie"];
// for (let i = 0; i < products.length; i++) {
//     // console.log(products[i]);
//     for (let j= 0; j < gifts.length; j++) {
//         console.log(products[i]+ "-",gifts[j] )
        
//     }
    
// }
// const outerTable=[2,4,6,8,10,12,14,16];
// const innerTable =[2,4,6,8,10,12,14,16];
// for (let i = 0; i < outerTable.length; i++) {
//     // console.log(products[i]);
//     for (let j= 0; j < innerTable.length; j++) {
//         console.log(`${outerTable[i]} X ${innerTable[j]} = `, outerTable[i]*innerTable[j])
        
//     }
    
// }

const mutliplyTable=[];
const numValue=5;
for (let i= 0; i <numValue; i++) {
    const temporary=[];
    for (let j = 0; j < numValue; j++) {
        temporary.push(i*j)
    }
    mutliplyTable.push(temporary);
}
console.table(mutliplyTable)