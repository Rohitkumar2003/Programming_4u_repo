

// ? 1. Create a person objects with the properties:name,age,city and the.                                                                                A).Log Each Property as: value of "name" property is "Rohit" using loop                                                                                B).Add a new Property called Email to the person objects.                                                                            C).Delete  "City" from the person. 


// let person =  {
//     name:'Rohit',
//     age:23,
//     city:'Mathura '
// }
// A).Log Each Property as: value of "name" property is "Rohit" using loop
// for(let key in person) {
//     console.log(`value of ${key} and properties is ${person[key]}`)
// }

// B). Add a new Property called Email to the person objects.                  

// person.Email = 'Mr.developer2003@gmail.com'
// console.log(person)


// C).Delete  "City" from the person. 

// delete person.city;
// console.log(`After deleting city`, person)


// ? 2. Create a function that takes an object with the firstName, middleName, lastName properties and return the fullName

// let user =  {
//     firstName:"Rohit",
//     middleName:"kumar",
//     lastName:"Varun",
// }

// let convertToFullName = (param)=>{
//     return `firstName:${param.firstName} middleName:${param.middleName} lastName:${param.lastName}`
// }

// let fullName = convertToFullName(user);
// console.log(fullName)

// ? 3. Write a function that takes object and return the number of properties in an objects.


// let person =  {
//     name:'Rohit',
//     age:23,
//     city:'Mathura '
// }

// let newObj = Object.keys(person).length;
// console.log(newObj)

// ? 4. write a funciton that return an array of names of users who have the role "admin"

// let arr = [
//     {name:'Rohit',role:"admin"},
//     {name:'someone2',role:"student"},
//     {name:'someone3',role:"visitor"},
//     {name:'Neeraj', role:"admin"}
// ]

// function filterArray (arr) {
//     let filterItem = arr.filter((item)=>{
//         return item.role === 'admin'
//     })
    
//     let resultArr = filterItem.map((item)=>{
//         return item.name
//     })
//     return resultArr;   
// }
//     let resultArr = filterArray(arr)
//     console.log(resultArr)


// ? 5. Write a function search (Products, keyword) that returns an array of products whoose name includes the given keywords (case-intensive). 

// let products = [
//     {id:1 , productName : "Samsung Galaxy"},
//     {id:2 , productName : "Poco M24"},
//     {id:3 , productName : "Apple Ios-16"},
//     {id:4 , productName : "Apple Mac-M2-chip Laptop "},
// ]


// function addTofunctinallity(products, keyword) {
//     let newFunctionallity = products.filter((obj)=>{
//         return obj.productName.toLowerCase().includes(keyword.toLowerCase())
//     })
//     console.log(newFunctionallity)
// }
// addTofunctinallity(products, "2")

// ? 6. Write a function groupByPost(comment) that return an object grouping comments by PostId

// let comments = [
//     {postId:1, comment: "Hello Everyone"},
//     {postId:2, comment: "Awesome Content"},
//     {postId:1, comment: "Hello Jee "},
// ]
// function groupByPost(comments) {
//     let groupedComments = {};
//     comments.forEach(obj => {
//              if(groupedComments.hasOwnProperty(obj.postId)) {
//                 groupedComments[obj.postId].push(obj)
//              }else {
//                 groupedComments[obj.postId] = [obj.comment];
//              }
//     });
//     console.log(groupedComments);
// }
// groupByPost(comments);

// ? 7. Write a function buildQuery(params) that return
const params = { 
        search: 'someone',
        page:4,
        sort: 'abc'
}

function createUrl(param) { 
    let url = "";
    for(let key in param) {
        url = url+`${key}=${param[key]}&`
    }
    let finalUrl = url.slice(0,url.length-1)
    console.log('url:-',finalUrl)
}

createUrl(params)