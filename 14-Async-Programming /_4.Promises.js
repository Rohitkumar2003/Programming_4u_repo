
// TODO - Promises 

const p1 = new Promise((res,rej) => {
        console.log('This is promises')
        res({name:'Rohit kumar'})
        // rej('Something went wrong')
})
    console.log(p1);
        p1.then((data)=>{ 
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })


const p2 = new Promise((res,rej) =>{
        setTimeout(()=>{
            res({name:'John Doe'})
        },3000)
})

p2.then((data) =>{
        console.log(data)
}).catch((err)=>{
    console.log(`Facing err`, err)
})


function fethData() {
    return new Promise((res,rej)=>{
            setTimeout(() => {
                    res({message:`Hey Your Promises Successfull.`})
                    rej({messag:`Hey Your Promises Failed`});
            }, 5000);
        })
    }
const response = fethData()

response.then((data) => {
        console.log(`Data Succcessfull fethed`,data)
}).catch((err) => {
        console.log(`Error`,err)
});

