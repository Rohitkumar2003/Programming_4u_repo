



//! 1. Imperative Programming Way
// let arr = [1,2,3,4,5,6];

// let double = [];

// for(let i=0; i<arr.length; i++) {
//     double.push(arr[i]*2);
//     console.log(double)
// }

// console.log(double)

//? 2. Declarative Programming Way 

// const arr = [2,4,5,6,7,8,10,12,24,43];

// const doubleArr = arr.map((element) => element*2)

// console.log(doubleArr)


//? 3. Pure Functions 

    // function sum(a,b) {
    //     return a+b;
    // }


    // let result = sum(1,4)
    // console.log(result)


    // let arr = [1,2,3,4,5,6,7,8,9];

    //     arr[0] = 100;
    //     console.log(arr)




    

    // TODO - Build a Todo App

    // const taskArr  = ['coding','sleeping','eating'];
     
    // function addNewtask(task) { 
    //     return task = [...taskArr, task];
    // }

    // function removeTask(taskArr) {
    //     return task = taskArr.slice(0,-1);
    // }

    // console.log('Task Arr', taskArr)
    // console.log(`Add new task`, addNewtask('repeating'))
    // console.log('Task Arr', taskArr)
    // console.log(`Remove last item`, removeTask(taskArr))
    // console.log('Task Arr', taskArr)

    //? 4. Avoid Shared State 

    // let total = 0;
    // function addAmount(ammount) { 
    //     total+=100;
    // }

    // addAmount(100);

    // console.log(total)


    //? Avoid Side Effect

    // const str = 'how are you'
    // const capitilizeFirstLetter = (str) => {
    //     return newStr = str.charAt(0).toUpperCase() + str.slice(1);
    // }
    // const newString = capitilizeFirstLetter(str);
    // console.log(newString);
    


    // Reuse or compose logic 
    
    // let username = 'Rohit kumar varun '
  
    // const createuser = (str) => {
    //     console.log("@"+str.toLowerCase().replaceAll(" ","")); 
    // }

    // createuser(username)




    const arr = [2,4,4,6,7,9,10,11,13,15] ;
    const newArr = arr.filter( elem => elem % 2 === 0);
    
    console.log(newArr) 