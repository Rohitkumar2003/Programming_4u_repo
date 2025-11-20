// ! Array iteration methods or functional array methods 

// ? 1. Map 
// let arr = [1,2,5,9,7]; 
// let newArr = arr.map((elements,index)=>{
//     console.log(elements,index)
//     return elements*2;
// })

// console.log(`Original Array:`, arr)
// console.log(`New Array:`, newArr)


// ? 2.ForEach
// arr = [2,3,3,4,5,5];
//  arr.forEach((elem,index)=>{
//     arr[index] = elem*2;
// })

// console.log(`original Array:`, arr)


// ? 3. Filter 
// let arr = [2,5,1,3,5,6,8,9];

// let newFilter = arr.filter( filter=(elem,index,arr)=> {
//     return elem%2==0;
// })

// console.log('Arr:', arr);
// console.log(`newArr:`, newFilter)


// ? 4. reduce

let arr = [2,2,4,5,6,8,10];
let newReduce = arr.reduce((acc, currentVal)=>{
    return acc+ currentVal;
})
console.log(newReduce)

