
    function getData() {
        return new Promise((res,rej) => {
            setTimeout(()=>{
                res({message:'Hello Rohit'})
            }, 3000)
        })
    }

        async function fethData() {
            const response = await getData();
                console.log(response)
        }

    fethData();