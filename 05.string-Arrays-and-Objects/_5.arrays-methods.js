
// ! Methods in Arrays  

// ? 1. Push -> add item end of the array 
// let arr = [2,4,6,8,'John',true, 10];
// console.log(`Without push `, arr)

// arr.push(100);
// console.log(`With push `, arr)

// ? 2. Pop -> Remove item end of the array
// let arr = [2,4,6,8,"John",10];
// console.log(`Without pop `, arr)

// arr.pop(10);
// console.log(`With Pop `, arr)

// ? 3. Unshift -> Add item to start
// let arr = [2,4,6,8,"John",10];
// console.log(`Without Unshift `, arr)

// arr.unshift(1);
// console.log(`With unshift`, arr)

// ? 3. shift -> remove item to start
// let brr = [3,4,6,8,"John",10];
// console.log(`Without shift `, brr)

// let  Brr = brr.shift(3);
// console.log(`With shift`, Brr)

// ? 4. Slice -> A new Array (sliced Partion)
// let arr = [2,4,6,8,"John",10];
// console.log(`without slice`, arr);

// let newArr = arr.slice(1,4);
// console.log(`With slice`, newArr)
// console.log(heros)
// ? 5. Splice -> An Array removed the items  
// let arr = [2,4,6,8,"John",10];
// console.log( 'Without splice',arr)

// let newArr = arr.splice(3, 2);
// console.log(`With splice`, newArr)

// ? 6. Concat -> A new array combined array----Alternative of spread operators
// let arr = [2,4,6,8,"John",10];
// let arr2 = [5,6];
// let arr3 = ["Abc","One-Two-Three", 'I II III'];

// let newConcatination = arr.concat(arr2, arr3);
// console.log(newConcatination)

// ? Alternate in Spread operators
// let arr = [2,4,6,8,"John",10];
// let arr2 = [5,6];
// let arr3 = ["Abc","One-Two-Three", 'I II III'];

// let newConcatination = [...arr, ...arr2, ...arr3];
// console.log(newConcatination)

// ? 7. Join -> String made by joining elements 
// let fruits = ["Mango","Apple","Berries","Oranges","Banana"]
// console.log(`Without join:`,fruits)

// let newFriuts = fruits.join(' flavors ');
// console.log(`With Join:`, newFriuts,"-type:", typeof(newFriuts))

// ? 8.toString
// let fruits = ["Mango","Apple","Berries","Oranges","Banana"]
// console.log(`Without toString:`,fruits)

// let str = fruits.toString();
// console.log('with toString', str, typeof(str))

// ? 9.includes -> 
// let fruits = ["Mango","Apple","Berries","Oranges","Banana"]
// console.log(`With includes:`,fruits)

// let bool = fruits.includes('Mangoes');
// console.log(`Presnt :`,bool)

// ? 10. indexOf
// let fruits = ["Mango","Apple","Berries","Oranges","Banana"]
// console.log(`Without indexOf:`,fruits)

// let indexOfFruits = fruits.indexOf('Oranges')
// console.log(`with indexOf`, indexOfFruits)

// ? 11. reverseobject
// let fruits = ["Mango","Apple","Berries","Oranges","Banana"]
// console.log(`Without reverse:`,fruits)

// let reverseFruits = fruits.reverse()
// console.log(`Reverse fruits:`,reverseFruits)

// ? 12.find 
// let fruits = ["Mango","Apple","Berries","Oranges","Banana"]
// console.log(`without find:`, fruits);
// let findFruits = fruits.find( function(items) {
//     return items==='Mango'
// })

// console.log(`find method:`,findFruits)


// ? 13. flat
// let _students_Details_ = ["Rohit","Sneha","Mayank","Unnati",[78,69,84,69],["B","C","A","B"]]
// console.log(`without flat:`,_students_Details_);

// let response = _students_Details_.flat(2);
// console.log(`with flat:`,response)

// ? 14. sort
// let arr = [10,16,8,1,4,90,34,345,20];
// let heros = ["hulk","spiderman","ironman","hawkey","wanda"];

// arr.sort((a,b)=>{
//     return  a-b;
// });
// console.log(arr)


