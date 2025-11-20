// ? 1. For an Array with marks of the students find the average marks of the entire class ?

// let arr = [78,89,46,58,43,75];

// let sum = arr.reduce((acc,cur)=>{
//     return acc+cur;
// })

// let average = sum/arr.length;
// console.log(`Sum is ${sum}`)
// console.log(`Average is ${average}`)

// ? 2. create an array with the given lenght(n) and fill with 0

// let newArr = new Array(25).fill(0);
// console.log(newArr)

// ? 3. create an array with the given lenght(n) and store natural number from 1 to n

// let arr = new Array(25).fill();
// arr.forEach((item,index)=>{
//     arr[index] = index+1;
// })

// console.log(arr)

/* ? 4. consider an array of mcu heroes ([ironman,captain,black Widow, Wanda, hulk, black panther])
    Now,
    a). Add spiderman at the end and thor at the start
    b). Remove black Widow and add hawkeye in its place
    c). check wheather captain is in present in the array 
*/ 

// a. 
// let arr = ["ironman","captain" ,"black Widow", "Wanda", "hulk", "black" ,"panther"];

// arr.push("Spiderman");
// arr.unshift("Thor");

// console.log(`arr:`, arr)

// b.
// arr.splice(3,1,"Hokeye");
// console.log(arr) 

// c.
// console.log(arr.includes("captain"))


// ? 5. How to check if given thing is array or not? How to convert other datattypes to array? What if we try to converts into objects into the array ?

// How to check if given thing is array or not
// let test = "Hello";
// console.log(Array.isArray(test))

// How to convert other datattypes to array?
// console.log(Array.from(test))

//  What if we try to converts into objects into the array ? -> Empty Array
// let test2 = {
//     name:'Rohit',
//     lastName:'kumar',
//     age:23
// };

// console.log(Array.from(test2))

// ? 6. We have three variables a,b,c contains any number, b contain string any objects and d contains any array. Can we create an arrray from all these four variables? if Yes, How ?

// const companyName = 'CodingBlocks';
// const CompanyEstablish = 2014;
// const isOpen = true;
// const CoursesAvailable = true;
// const obj = {
//     name:'Rohit',lastName:'Kumar',age:24
// }
// const getArr = [20,43,'hello',true]

// const response = Array.of(companyName,CompanyEstablish,isOpen,CoursesAvailable,obj,getArr);

// console.log(`Createad an Array:`, response)

// ? 7. check wheather given string palindrom or not ?
// let str = 'Hello';
// let newStr = Array.from(str).reverse().join('');
// console.log(newStr);

// let str = 'racecar';
// let newStr = str.split("").reverse().join("");

// if(str === newStr) {
//     console.log(`Palindrom string`)
// }else {
//     console.log(`Not a palindrome string`)
// }

// ? 8. Capitalize the first letter of every words in a sentence 

let str = 'hey how are you';

let newStr = str.split(" ").map((e)=> {
    return e.charAt(0).toUpperCase() + e.slice(1);
})
let finalStr = newStr.join(" ");
console.log(finalStr)