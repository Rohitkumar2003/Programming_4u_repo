
// TODO: REST OPERATOR 


    // ? REST in funciton in parameters
     function add(...args){
        return add = args.reduce((acc,cur)=>{
            return acc+cur;
        })
     }

     const response = add(12,2,3,4,5,6,3,45,646);
     console.log(response);

// ? Rest with Destructring in REST Operator

let arr = ['Rohit','mayank','pragati','unnati','sneha','Anant'];
    let [first,second,third,...others] = arr;
            console.log(first);
            console.log(second);
            console.log(third);
            console.log(others);

// ? Rest with Destructring in REST Objects


    const user1 = {
        name:'Rohit',
        age:23,
        hobbeies:['Dancing','Gaming','Programming'],
        isMarried:false,
    }

    const {name,age, ...user1Details} = user1;
    console.log(name,age,user1Details);