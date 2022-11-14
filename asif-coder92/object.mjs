// const car={
//     Name:"Honda",
//     Model:"2020",
//     Made: "Pakistan"

// };
// console.log(car.Name,car.Made)



// //objects inside an array
// const person=[
// {
//     firstName: "asif",
//     lastName:"Jamal",
//     address:"Charsadda",
//     country:"Pakistan"          

// },
// {
//     firstName: "Asad",
//     lastName:"Jamal",
//     address:"Charsadda",
//     country:"UK"

// },
// {
//     firstName: "Rasikh",
//     lastName:"Jamal",
//     address:"Charsadda",
//     country:"Pakistan"

// },

// ];
// console.log(person[0].firstName)
// console.log(person[2].country)

let car ={
    make:"Land rover",
    model:"Defender 110",
    year:"2023",
    color: "Red"
};
for (const key in car) {
    // if (car.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
    console.log(car[key]);
        
    }
