

// Fething API 
async function  showData() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    console.log(await response.json());
}


showData();
