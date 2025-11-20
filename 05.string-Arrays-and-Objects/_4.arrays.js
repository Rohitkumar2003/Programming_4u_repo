
// ? Declare Arrays
// let arr = ['Rohit',34, '895', true, null];
// let arr2 = ['Mango', 'Apple' , 'PineApple']
// let arr3 = ['Rohit', 'Sneha', 'Unnati','Uttar-Pradesh']
// let arr4 = ["Mercidies", "BMW", "Farrari" , [12892,12389,8924]]

// console.log(arr)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)

// ? make an array using constructor Method but Avoid Constructor function
// let brr = new Array("Car","Bus","Train","Aerorplace")
// console.log('Constructor Function Create Array:', brr)


// ? Array constructor is mostly used when we want to create an empty array with the given lenght

// ! Note 1 :- typeof array is not "Array", It's an "Object".
// let arr = [20]
// console.log(arr)
// console.log(arr.length)
// ! Note 2 :- Array is a special type of object.

// console.log(typeof arr)
// let carr = new Array(20).fill(2);
// console.log(carr)
// console.log(carr.length)
// console.log(typeof carr)

// ! Note 3 :- Array are mutable. 
    // let arr = [1,2,3,4,5]
    // console.log(arr[0])
    // console.log(arr[1])
    // console.log(arr[2])
    // console.log(arr[3])
    // arr[2] = 90;
    // console.log(arr)


// ? For in loop in iterating in array 
let arr = [1,2,4,5,7,8,10,]
// for(let i=0; i<arr.length;i++) {
//     console.log(arr[i])
// }
for(let elem of arr) {
    console.log(elem)
}

