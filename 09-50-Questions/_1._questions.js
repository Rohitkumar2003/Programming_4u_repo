
// !  ######################  BASIC QUESTIONS ################################


//? Q.1. Create a function that returns the last element of an array 

// let arr = [1,2,3,4,4,5,6,7,7,8,9];

// function getLastElement(localArr) {
//       return localArr[localArr.length-1];
// }

// const resposne = getLastElement(arr)
// console.log(resposne)


//? Q.2. Find the combination of two array 

   // let arr1 = [1,2,2,3,3];
   // let arr2 = [,4,5,6,7,8];

   // let combinationArr = [...arr1,arr2]
   //  console.log(combinationArr)

//? Q.3. Generate a random integer between 0 to 100

   // const generatRandomNumber = Math.floor(Math.random()*100);
   // console.log(generatRandomNumber)

//? Q.4. create a function that takes an array containing both numbers and strings, and return a new array containing only string values 


// let arr = [23,33,44,'Hey','holla','dummy',23, true, false];   
// const resultArr = arr.filter(element => {
//    if(typeof element === 'string') return true;
//          return false;
// })

// console.log(resultArr)

//? Q.5. Find the maximum number of array 
   
   // const arr = [1,4,5,6,9];
   // console.log(Math.max(...arr))

//? Q.6. Write a function that returns the lengtht of a given object (number of keys)


// const obj = {
//    name:"Rohit",
//    lastname:"kumar",
//    isMarries:false,
//    age:23
// }

// const getObjectLenght = (object) =>{ 
//       return Object.keys(object).length;
// }

// console.log(getObjectLenght(obj))

//? Q.7. In an array of objects fileter out those projects which have gender's value male 
   
// const arr = [
//     {
//       name:'Rohit ', gender:'male'
//     },
//     {
//       name:'Mayank', gender:'male'
//     },
//     {
//       name:'Unnati', gender:'male'
//     },
//     {
//       name:'pragati', gender:'female'
//     }
// ];

// const resposne = arr.filter((user_response)=>{
//    return user_response.gender==='male';
// })

// console.log(resposne)

//? Q.8. Given an array of strings, return a new array where all string are uppercase

// const arr = ['holla','uymmy','meow','ohhl','dassh'];

// const resultArr = arr.map((element)=>{ 
//       return element.toLocaleUpperCase();
// })

// console.log(resultArr)

//? Q.9. check if an object is empty (has no keys)

// const obj = {
//     name:'Rohit',lastname:'kumar',isMarried:false
// }


// const keysArr = Object.keys(obj);
// const isEmptyObj = keysArr.length <1;
// console.log(isEmptyObj)

//? Q.10. Create an array of numbers and double each value using.map()

   // const arr = [1,5,3,4,2];

   //  const newArr = arr.map(item=> {
   //    return item*2;
   //  })
   //  console.log(newArr)

//? Q.11. convert an array of strings into a single comma-seprated string 

// const arr = [1,'hey',32,'holla', 32,4,4,]
// const string = arr.join(' ');
// console.log(string)


//? Q.12. Write  a function to flatten a nested array (one level deep)..eg [1[2,3]] ->  [1,2,3,4]  


// const arr = [1,2,3,4,5, ['a','b','c'], [7,8,9,10,11]];

// console.log(arr.flat(2))      

//? Q.13. Write a function that checks if all elements in an array are numbers
   // let arr = [1,2,3,4,5,5,'holl','john',6,7,8];

   // function checkNumbers(localArr) {
      // ! WAY - 1
      // let isNumber=false;
      // arr.forEach((element) => {
      //   if(typeof element != 'number') isNumber=false;

      // })
      // return isNumber;  // let isNumber=false;
      // arr.forEach((element) => {
      //   if(typeof element != 'number') isNumber=false;

      // })
      // return isNumber;


      // ! WAY - 2 

      // let isNumber = localArr.every(element => typeof element === 'number'); 
      //                return isNumber;

   // }

   // let isAllNumbers = checkNumbers(arr);
   // console.log(isAllNumbers)


   //? Q.14. Build a simple isPrime() function to check if a number is prime 

      // function isPrime(num) {

      //    // Base Case
      //    if(num === 0 || num ===1 ) return false;

      //    // recursive Case 
      //    for(let i=2; i<=Math.sqrt(num); i++) {
      //       if(num%i === 0) return false;
      //       return true;
      //    }
      // }
      // console.log(isPrime(1))

//? Q.15. Create a function that removes duplicate values from an array 


// function removeDuplicatValue(arr) {
// //    let set = new Set(arr)
// //    return [...set]

//      const resultArr = arr.filter((element,index) => {
//             return arr.indexOf(element) === index
//       })
//       return resultArr;
// }

// const resultArr = removeDuplicatValue([1,2,2,3,3,4,5,6,7,7,8]);
// console.log(resultArr)

// !  ######################  INTERMEDIATE QUESTIONS ################################


//? Q.16.