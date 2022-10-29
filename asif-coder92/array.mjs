const arr1= ["Asif", "Jamal", "Yasir Kamal", "Dilawaiz", "Rasikh Jan", "Asad Jamal"];
arr1.push("Sidra Farhat");
arr1.splice(1,0, "Asma Gul");

console.log(arr1);
//console.log(arr1.length);

//console.log(arr1.find(function(e) {e === "Yasir Kamal"}))
//let findValue=arr1.find(e => e === "Yasir Kamal");
//console.log(findValue)

//sorting method
//let sortValue=arr1.sort();
//let reverseValue=arr1.reverse();
//console.log(sortValue)

//multi dimensional arrays

//let arr2=[123,456,789,90,56,]
//let combneArr=[arr1,arr2]
//console.log(combneArr)

// object creation
const Student1={
studentFirstName:"Asif",
studentLastName: "Jamal",
studentRollNo:"PIAIC123456",
studentAdderess:"Charsadda"

}
console.log(Student1.studentLastName)

const Student2={
    studentFirstName:"Asif",
    studentLastName: "Jamal",
    studentRollNo:"PIAIC123456",
    studentAdderess:{
        city:"Charsadda",
        VPO: "Utmanzai",
        District: "Charsadda",
        Tehsil: "Charsadda",
        Country: "Pakistan",
    }
}
    console.log(Student2.studentAdderess.Country)
