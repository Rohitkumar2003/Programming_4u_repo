

// Destructring
let obj =  {
    name:'Rohit',
    lastName:'kumar',
    age:23,
    city:'Mathura'
}


// let userName = obj.name;
// let user_cityName = obj.city;

//  for object
const {name, city, age} = obj;
console.log(name,city,age)

// for Array 
let arr = [1,2,4,5,7,5 , true, 'Hey', {
    name:"SomeUserName",lastName:`SomeoneSharma`
}];

let [a,b,c,d,e,f,g,h,i] = arr;
console.log(a,b,c,d,e,f,g,h,i)

