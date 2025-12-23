
// TODO: Spread Operator 

    let arr_1 = [1,2,3,4,4,5,6];
    console.log(...arr_1);

    let newArr = [...arr_1,8,9, 'rohit'];
        console.log(newArr);

    
        // Shallow Copy 
    let arrr = [2,4,5,7,8,6,5,1];

    let copyArr = [...arrr];
        copyArr.push(11,12,20);
    console.log(copyArr); 
    console.log(arr);

    //? Merge two arr
    let arr1 = ['captain', 'Joha','jarvis'];
    let arr2 = ['iron-man','spiderman','hulk']

    // let mergeredArr = arr1.concat(arr2);
    let mergeredArr = [...arr1,...arr2];

    console.log(mergeredArr);
    
    // ? Spread string 
        let str = 'Rohit kumar';
        // console.log(...str);
        let arr = str.split('');
        console.log(arr);

    //? Spread in function call 
        
    const users = ['Rohit','Neeraj','Mayank'];
    function getUser(name1,name2,name3) {
        console.log(name1);
        console.log(name2);
        console.log(name3);
    }

    getUser(...users)

    //? Spread Object
    let obj = {
        name:'Rohit',
        age:23,
        passion:'Programming',
        city:'New Delhi',
    }

    let objCopy = {...obj,age:24,passion:'Dancing',city:'Uttar-Pradesh'};

    console.log(objCopy);
    console.log(obj);


    //? Merge two objects 
     let obj1 = {
        name:'Rohit',age:23,passion:'Programming',city:'New Delhi',
    }

    let obj2 = {
        name2:'Mayank',age2:13,passion2:'Football',city2:'Uttar-Pradesh',
    }

    let mergeObj = {...obj1,...obj2};

    console.log(mergeObj);