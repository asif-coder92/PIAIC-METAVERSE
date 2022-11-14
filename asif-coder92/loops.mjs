// let forArr=["Asif", "Jamal","Rasikh","Mumtaz","dialwaiz"]
// for (let i=0;i<=4;i++)
// {
//     console.log(forArr[i])

// }
// let forArr=["Asif", "Jamal","Rasikh","Mumtaz","Dilo"]
// for (let i=0;i<=4;i++)
// {
//     if("Dilo"===forArr[i]){
//         console.log("it is my wife name");
//         break;
//     }
// }
// let forArr=["Asif", "Jamal","Rasikh","Mumtaz","Dilo"]
// for (let i=0;forArr.length;i++) //dynamically 
// {
//     if("Dilo"===forArr[i]){
//         console.log("it is my wife name");
//         break;
//     }
// }

// const num=7;

// for (let i = 1; i <11; i++) 
// {
//     console.log(`${num} x ${i} = `, num * i);
    
// }

const myArr=[];
for (let i = 1; i < 11; i++) 
{
    let status = i%2 ? true:false; //ternry operator
    let temp={
        name:`Lesson ${i}`,
        status:status
    }
    myArr.push(temp)
    
}
console.log(myArr);
    