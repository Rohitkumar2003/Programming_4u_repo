
let obj =  {
    name:"Rohit",
    lastName:"Kumar",
    age:23
}


//  ? 1. Object.key(obj_Name)
    // let keys = Object.keys(obj)
    // console.log(keys)

//  ? 2. Object.value(obj_Name)
    // let values = Object.values(obj)
    // console.log(values)

//  ? 3. Object.entries(obj_Name)
// let entry = Object.entries(obj);
// console.log(entry)

//  ? 4. Object.assign(target,source)
// let obj2 = {};
// let obj3 = Object.assign(obj2, obj);
// console.log(obj3)

// Alternative methods for spreed Operator 

// let newObj = {...obj};
// console.log(newObj)

//  ? 5. Object.freeze(objName)

// let newObj =  {
//     name:'John Doe',
//     city: 'New York',
//     age: 23,
// }


// Object.freeze(newObj);
//  newObj.email = 'johndoe13@gmail.com';
// delete newObj.age;

// console.log(newObj)

//  ? 6. Object.seal(objName)

// let newObj =  {
//     firstName: 'Rohit ',
//     lastName: 'Kumar',
//     age: 23,
//     State : 'Uttar-Pradesh',
//     Home_City: "Mathura", 
// }

// Object.seal(newObj);
// console.log(newObj);


//  ? 7. ObjectName.hasOwnProperty(key)
// let newObj =  {
//     firstName: 'Rohit ',
//     lastName: 'Kumar',
//     age: 23,
//     State : 'Uttar-Pradesh',
//     Home_City: "Mathura", 
// }

// let res = newObj.hasOwnProperty("Rohit")
// console.log(res)

// ! Singleton Object in Js 
