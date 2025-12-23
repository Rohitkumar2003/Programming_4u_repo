

// TODO: Destructring 
   const personDetails = {
                name:'john Doe',
                age:23,
                mobileNumber:91991991991,
                emailId:'johnDoe232@gmail.com',
                address:{
                    country:'USA',
                    location:'California',
                    houseNo:'2-B',
                    pincode:12648,
                }
        }

    const { name,age,mobileNumber,emailId,address:{country,location,houseNo,pincode} } = personDetails;

    console.log('User name',name);
    console.log('User age',age);
    console.log('User mobile Number',mobileNumber);
    console.log('User emaild id',emailId);
    console.log('User counttry',country);
    console.log('User location',location);
    console.log('User houseNo',houseNo);
    console.log('User pincode',pincode);


// TODO: Destructring in Array
        let arr1 = [1,2,3,4,5,6,'Rohit',true, 'Programming'];
                
        let [...userArr] = arr1;

        console.log(userArr);

// TODO: Default values in Array
        
        let [x,y,z=3] = [2,3,4];
        console.log(x,y,z);


// TODO : Skip array items 
        let [,,,,e] = [1,2,3,4,5,7];
        console.log(e);

// TODO : Swapping using destructring method
        let b = 5, c = 10;
        [b,c] = [c,b];
        console.log(b,c);

// TODO : Nested Array destructring
        let [a,,,[r,s]] = [1,2,3,[4,6]]

        console.log(a);
        console.log(r,s);

// TODO: 'Destructring' in Object with Basic Destructring 
        let obj = {
            name2:'Rohit',
            age2:23,

        };

        const {name2, age2} = obj;
        console.log(name2);
        console.log(age2);

// TODO: Destructring with Rest Operator

 const personDetails2 = {
                name3:'john Doe',
                age:23,
                mobileNumber2:91991991991,
                emailId:'johnDoe232@gmail.com',
                address:{
                    country:'USA',
                    location:'California',
                    houseNo:'2-B',
                    pincode:12648,
                }
        }


        const {name3,emailId2,mobileNumber2} = personDetails2;
        console.log(name3,emailId2,mobileNumber2);

// TODO: Default values in Objects
     let {userName,age3=19} = {
        name :'Rohit',
     }

     console.log(userName,age3);

// TODO : Remaining Variable 

        const {name:fullNames} = {name:'Rohit Kumar'}
        console.log(fullNames);


// TODO : Nested Objects 
        
        let someData = {
            userName:'Rohit',
            age:21,
                address:{ 
                    city:'New Delhi',
                    pincode:110008,
                    houseNo:'26/181-D',
                    arr:[
                       'hola','john','meow' 
                    ]
                }
        }

        let {
            userName:fullName, age:userAge, address:{pincode:code,arr},
        } = someData;

    
            console.log(fullName);
            console.log(userAge);
            console.log(code);
            console.log(arr);
            // console.log(arr);
         

