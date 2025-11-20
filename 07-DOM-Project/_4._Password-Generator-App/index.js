const InputSlider = document.querySelector('[data-lenght-slider]')
const lenghtDisplay = document.querySelector('[data-lenght-number]')
const paaswordDisplay = document.querySelector('[data-password-Display]')
const copyButton = document.querySelector('[data-copy]')
const coppyMessage = document.querySelector('[data-copy-message]')
const upperCaseCheck = document.querySelector('#upperCase')
const lowerCaseCheck = document.querySelector('#lowerCase')
const NumbersCheck = document.querySelector('#numbers')
const symbolsCheck = document.querySelector('#symbols')
const indicator = document.querySelector('[data-indicator]')
const generateButton = document.querySelector('.generate-button')
const allCheck = document.querySelectorAll('input[type=checkbox]')

// ?  Default Values 
const symbols = '~`@#$%^&*()_-+={[}]|:;"<,>.?/'
let password = '';
let passwordLenght = 10;
let checkCount = 1;
// set circle color in Gray with some shadow 

handleSlider()

function handleSlider() {
  InputSlider.value = passwordLenght;
  lenghtDisplay.innerText = passwordLenght;zr
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    // TODO : Shadow 
}

function getRandomInteger(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
}

function generateRandomNumber() {
    return getRandomInteger(0,9);
}

function generateLowerCase() {
     String.fromCharCode(getRandomInteger(97,123));
}

function generateUpperCase() {
     String.fromCharCode(getRandomInteger(65,91));
}

function generateSymbols() {
    const randomNumber = getRandomInteger(0,symbols.length);
          return symbols.charAt(randomNumber);
}

function handleCheckBoxChnage() {

}

function calculateStrenght(){
    let hasUpper = false;
    let hasLower = false;
    let hasNums = false;
    let hasSym = false;

    if(upperCaseCheck.checked){ 
        hasUpper=true
    }if(lowerCaseCheck.checked) {
        hasLower=true;
    }if(NumbersCheck.checked) {
        hasNums=true;
    }if(symbolsCheck.checked){
        hasSym=true;
    }
    
    if(hasUpper && hasLower && ( hasUpper || hasSym ) && password >= 8) {
        setIndicator('#0f0')
    }else if((hasLower && hasUpper) && (hasNums || hasSym) && password >=6 ) {
        setIndicator('#ff0')
    }else {
        setIndicator('#f00')
    }
}

allCheck.forEach((checkbox)=>{
        checkbox.addEventListener('change',handleCheckBoxChnage)
})


async function copyContent() {
    try {
        await navigator.clipboard.writeText(paaswordDisplay.value);
                coppyMessage.innerText = "Copied";
    } catch (error) {
            coppyMessage.innerText = "Failed";
    }
    coppyMessage.classList.add('active');
    setTimeout( () => {
        coppyMessage.classList.remove('remove');
    },2000)
}       1``
InputSlider.addEventListener('input', (e)=>{
    passwordLenght = e.target.value;
    handleSlider();
})
