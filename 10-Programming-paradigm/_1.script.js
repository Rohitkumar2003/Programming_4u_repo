

//? Programming Paradigm 

let arr = [2,4,5,5,6,6,7];

// How it works properly i understand 
// for(let i=0; i<arr.length; i++) {
//         console.log(arr[i])
// }

//? Alternative way of loop is .map or .forEach()



// const newArr = arr.map(elem => console.log(elem));

//? 1 procedural programming / functions 


// ! Imperative Way
// function consoleEnd() {
//     console.log('Program is End!')
// }

// function checkNumbers(num) {
//     if(num === 0) consoleZero();
//     else if(num>0) positive();
//     else negative();
//     consoleEnd();
// }


// function positive() {
//     console.log('Number is Positive')
// }

// function consoleZero(){
//     console.log('Number is Zero')
 
// }

// function negative() {
//     console.log('Number is Negative')
// }


// let num=10;
// checkNumbers(num)

// ! Decalrative Way -> sequence Way (stractured)

function checkNumbers(num) {
    if(num===0) console.log('number is Zero');
    else if(num>0) console.log('Number is Positive')
    else console.log('Number is Negative')
}

checkNumbers(10)
