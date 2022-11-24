//  const fruits = ['Apple', 'Banana'];
// // for (let i = 0; i< fruits.length; i++) {
// //     console.log(fruits[i]);
// // }

// //the alternative of above for loop is forEach()

// fruits.forEach((items)=>{
//     console.log(items);
// })
// // in foreach we can not return any thing despite if we write the return keword inside ..
// // we can use foreach where we perform a function interanly.
// // if we want to use such thing outside of the For block, then we will use the map()

// const  fruits2=fruits.map((items)=>{
//     console.log(items);
//     return items
// })
// console.log(fruits2);

//the map function return an array


const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);


//4.pushJavascript array push() method appends the given element(s) in the last of the array and returns the length of the new array.
//When you want to add an element to the end of your array, use push().
const countries = ["Nigeria", "Ghana", "Rwanda"];

countries.push("Kenya");

console.log(countries); // ["Nigeria","Ghana","Rwanda","Kenya"]


/*..................................................*/


// 6.splice

// The splice() method is a general-purpose method for changing the contents of an array by removing, replacing, or adding elements in specified positions of the array. This section will cover how to use this method to add an element to a specific location.
// splice actually modifies the existing content of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi"); //Banana,Orange,Lemon,Kiwi,Apple,Mango


/*
7.slice

The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]


//unshift and pop return the length of an array


/* 
10.join

JavaScript array join() is a built-in method that creates and returns the new string by concatenating all of the elements of the array. 
The join() method joins the array’s items into the string and returns that string. The specified separator will separate the array of elements. The default separator is a comma (,).
*/
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"


/* 
11.every

The every() method tests whether all elements in the array pass the test implemented by the provided function. 
It returns a Boolean value.*/

const abc=[3,2,56,7,5,6,59]
const result=abc.every((current)=> current>1)
console.log(result); // the every function recieves a calling function in its parameter. the output result is a boolean ( ture or false)
                        // behind the every function a loop is working and check the array element one by one
                        // if any of the element doesnt meet the condition it will return the false result and vice versa


/* 
12.filter

The filter() method creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present','limit'];

const result2 = words.filter(word => word.length > 6);
const result3=  words.filter(word=> word==="limit")

console.log(result2); // expected output: Array ["exuberant", "destruction", "present"]

console.log(result3);//expected output : Array ['limit',limit]


/* 
13.indexOf
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
*/

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison','bison'];

console.log(beasts.indexOf('bison')); // expected output: 1


// start from index 2
console.log(beasts.indexOf('bison', 2)); // expected output: 4


console.log(beasts.lastIndexOf("bison")); // expected output: 5

/*..............................................................................*/


const cal=[34,5,6,7]
let temp=3
const cal2=cal.forEach((number=>{
    temp=temp+number
}))
console.log(temp);

/*........................................................*/
// the above work can also be done through reduce() method.. by reduce method we can add or subtract or mulitply the element of array
/* 14.reduce

The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value
 */

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce((previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial) // output is 10 


/*...........................................*/

/*15.reverse

The reverse() method reverses an array in place and returns the reference to the same array, 
the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated
 */

const array4 = ['one', 'two', 'three'];
console.log('array1:', array4);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array4.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array4);
// expected output: "array1:" Array ["three", "two", "one"]


/* 

16.sort

The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. 
The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
 */



const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array5 = [1, 30, 4, 21, 100000];
array5.sort();
console.log(array5);
// expected output: Array [1, 100000, 21, 30, 4] . so it actually sort the numbers according to thier first digit, disregarding the actual number's worth
// to sort the according to their actual number's worth or value we should  pass a calling function in sort()
array5.sort((x,y)=>x-y)
console.log(array5);


/*  17.toString

The toString() method returns a string representing the object. */




/* 
18.at

The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. 
Negative integers count back from the last item in the array.
*/

const array6 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array6.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array6.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"



/* 19.find

The find() method returns the first element in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, undefined is returned. it is similar to filter method but in filter the return output is an array but here it gives us the value
  */

const array7 = [5, 12, 8, 130, 44];

const filterarr=array7.filter((element)=>element>10) 
console.log(filterarr);// expected output: [ 12, 130, 44 ]

const found = array7.find(element => element > 10); // this actually takes a callback function
console.log(found); // expected output: 12


/*............................................................... */

/*20.some

The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, 
it finds an element for which the provided function returns true; otherwise it returns false. 
It doesn't modify the array. */

const array8 = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array8.some(even)); // expected output: true



