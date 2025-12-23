
//? Q.1 : What will be output 
            /*
             const arr = [1,2,3];
            const obj = {...arr};
            console.log(obj);
            */

            const arr = [1,2,3];
            const obj1 = {...arr};
            console.log(obj1);

// ? Q.2 : How does spread help avoid mutation? Modify the object without affecting the original?

    const obj = {
        name:'Rohit',age:23,city:'New Delhi'
    }
    const copyObj = {...obj,city:'Mathura'}
    console.log(copyObj);
    console.log(obj);

//? Q.3 : Write a function that takes numbers as arguments and seprate even or odd numbers and return an object with even and odds and destructring the output while calling funciton 

        function seprateEvenOdd(...arr){
                let even = arr.filter((element)=>{
                    return element%2===0 
                })
                
                let odd = arr.filter((element)=>{
                    return element%2!==0 
                })
                return {even,odd}
        }

        const result = seprateEvenOdd(1,2,3,4,5,8,9,10,11,12,13,14,15,16)
        console.log(result);

/* Q.4: Create a custom JS function that behave like React's useState.
        The Function Should:    
                * Store value (like State)
                * Return two things:the current value and a funciton to update it                 
        use array destructring to exact both the value and setter when calling your function  
*/

        function useState(intialValue){
                let value = intialValue;

                function setValue(val) {
                        value = val;
                }

                function getValue(){ 
                    return value;
                }

                return [getValue, setValue];
        }

        const [getcount,setCount] = useState(10)
        console.log(getcount());
        setCount(20);
        console.log(getcount());
        
