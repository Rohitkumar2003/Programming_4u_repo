
// const firstButton = document.querySelector('.firstBtn');
// const input = document.querySelector('input')


// input.addEventListener('click', ()=> {
//     console.log(value)
// })


// firstButton.onclick = function () {
//     console.log('I am propert method  ')
// }

// firstButton.ondbclick = ()=> {
//     console.log('i am clicked in Double click evennt')
// }

// const result = (e)=> {
//     console.log('result here',e)
// }

// firstButton.addEventListener('click', result);
// firstButton.removeEventListener('click', result);



const nameInput = document.querySelector('.nameInput');
const emailInput = document.querySelector('.emailInput')
const form = document.querySelector('form')
const submitButton = document.querySelector('button')
const body = document.querySelector('body');



form.addEventListener('submit', (event)=>{
    event.preventDefault();

    body.innerHTML = `<h3> hey ${nameInput.value} </h3> 
                      <h3>Your Email id has ${emailInput.value} </h3> `

    body.style.cssText = 'hieght:20px; color:green; margin-top:2rem; padding:2rem; background-color:gray; border-radius:10px;'

})