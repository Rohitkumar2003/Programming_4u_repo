// TODO : Callback funciton - it's a function 


// ? Eg-1 
function myFun(name, cb) {
    cb(name);
}

function higherOrderFunction(name) {
    console.log(`Hello ${name}`)
}

myFun('Jarvis', higherOrderFunction);


//? Eg-2
function calculate(a,b,cb) {
    cb(a,b);
};

function sum(a,b){
    console.log(a+b);
}

function sub(a,b) {
    console.log(a-b);
}

function mult(a,b) {
    console.log(a*b);
}

calculate(4,6,mult);

// ? Eg-3 sync 

        console.log(`1.Fetching Data....`);
        function fethData(processData) {
                setTimeout(()=> {
                    console.log('2.Data fetched Successfull...')
                    processData();
                },3000)
        }

        function processData() {
            console.log(`3.Processing with Data...`)
        }

        fethData(processData);

        console.log(`4.Some Other Tasks....`)

    // ? eg-4 

    function makeMaggie(magie,cb) {
        setTimeout(()=>{
            console.log(magie);
            if(cb) cb();
        },3000)
    }

    console.log(`Making Maggie`);

    makeMaggie('Pan me paani Garam karo', ()=>{
        makeMaggie('fir Maggie ko daalo', ()=>{
            makeMaggie('fir Masala daalo', ()=>[
                makeMaggie('2 min tak chalate raho', ()=>{
                    makeMaggie('Serve Karo');
                })
            ])
        })
    })

