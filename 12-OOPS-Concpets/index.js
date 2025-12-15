
// TODO: 1. object literals -> Singleton Object

/*
    const student =  {
        studentName:'Rohit kumar', 
        age: 23, 
        class:'XII', 
        schoolName:'Green Land Convent Sen. Sec. School',

        myPerfomance: function() {
            console.log(`Hey ${this.studentName} your Score is Overall Good `)
        }
    }
    
    */
// TODO: 2. Factory Function 
    /*
    const student =(studentName,age, myclass, schoolName ) => {
        return {
            studentName,age, myclass, schoolName,
            myPerfomance: function() {
                console.log(`Hey ${this.studentName} your Score is Overall Good `)
                }  
            }
        }

        const student1 = student('Devansh Aggarwal',23,'XII', 'GLCS');
        const student2 = student('Devesh Rana', 23, 'XII','GLCS')

        console.log(`Student 1`, student1)
        console.log(`Student 2`, student2)

            student1.myPerfomance();
*/

// TODO: 3. Constructor Function 
   /* const student = (name,age,passion) => {
            this.name=name;
            this.age=age;
            this.passion=passion;
            return this;
    }

    const response = new student('Rohit',23,'coding');
    const response2 = new student('vishal',23,'Running')

    console.log(response)
    console.log(response2) */

// TODO: 4. Class-Syntax (ES-6) 

        class Student {
                // name = 'Rohit';
                // age = 23;
                // passion = 'coding'
                
                myFunction(){ 
                    console.log(`Hey ${this.name}`)
                }
                
                constructor(name,age,passion) {
                    this.name=name;
                    this.age=age;
                    this.passion=passion;
                    console.log(`constructor Function Call`);
                }

        } 
const stduent_1 = new Student('Dheeraj',19,'cooking')
const stduent_2 = new Student('Neeraj',23,'laundibaazi')

console.log(stduent_1)
console.log(stduent_2)
