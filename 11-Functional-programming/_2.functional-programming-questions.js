

//? 1. What is pure function, and why is it useful in UI rendering?

//? 2.How would you use .map() to transfer list of products into of HTML elements ?


    // let user =  [ 
    //     {
    //         name: 'rohit',
    //         age: 23,
    //     },
    //      {
    //         name: 'rohit',
    //         age: 23,
    //     },
    //      {
    //         name: 'rohit',
    //         age: 23,
    //     }, 
    // ]


    // user.map((obj) =>{ 
    //     console.log(obj)

    //     html = ` 
    //         <div>
    //                 <p>{obj.name} </p>
    //                 <p>{obj.age} </p>

    //         </div>
    //     `
    //     return html;

    // })


    //? 3. How do you .reduce() to calculate the total price in a shopping cart ?

    // let arr = [5,10,2,3];

    //     const newArr = arr.reduce((acc,curr) => {
    //         return acc+curr;
    //     },0)

    //     console.log(newArr)

//? Q.4 Explain immutablity and how would update an object in an array without mutating the original 


// let user =  {
//     name:'rohit',
//     age:23
// };

// r =  {
//     name:'rohit',
//     age:23
// };


// function updateName(user, name) {
//         return newObj = {...user,name};
// }

// let updateobj = updateName(user,'neeraj')
// console.log(updateobj)

// function updateName(user, name) {
//         return newObj = {...user,name};
// }

// let updateobj = updateName(user,'neeraj')
// console.log(updateobj)

//? Q.5 How would you compose multiple function to transform data step-by-step (eg- sanitize -> trim -> capitilize)? Scenerio: You're preparing user input before stroring it. (Expected Knowledge: Function composition, chaining, pipe or compose logic).


    // let str = 'Rohit';
    // let reverseString = str.split('').reverse().join(' ')

    // console.log(reverseString)


    let add = num => num+2;
    let multiply = num => num*2;
    let divide = num => num/2;
    let subtract = num => num-2;



    // compose --> Right to left 
    // Pipe --> Left to Right

//     function compose(...fns) {
//                 return function (val) {           
//                     return fns.reduceRight((acc,currFn) => {
//                        return currFn(acc)
//                     },val)
//                 }   
//     }
// const result = compose(add,multiply,divide,subtract)(5);
// console.log(result)

// function pipe(...fns) {
//                 return function (val) {           
//                     return fns.reduce((acc,currFn) => {
//                        return currFn(acc)
//                     },val)
//                 }   
//     }
// const result = pipe(add,multiply,divide,subtract)(5);
// console.log(result)


//? Q.6 How do you impliment your own version of .map() function on arrays ?

let arr = [1,3,4,5,7,8,9,10];


function square(arr) {
            let outputArr = [];
        for(let i=0; i<arr.length; i++) {
                outputArr.push(arr[i]*arr[i]);
        }
        return outputArr;
}

const newSquare = square(arr)
console.log(newSquare)