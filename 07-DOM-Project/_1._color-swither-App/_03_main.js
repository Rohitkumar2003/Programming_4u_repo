const randomBtn = document.querySelector('.randomBtn');
const colorInput = document.querySelector('#colorInput');
const applyBtn = document.querySelector('.applyBtn');
const cuurentColorValue = document.querySelector('.currentColorValue')
const container = document.querySelector('.container')

const colorArray = ['red', 'blue','gray','purple','pink','orange','teal','yellow','green','skyblue','wheat', 'aquamarine', 'brown','stealblue','springgreen','choclate','crimson','cyan','sandybrown','rosybrown']

const generateRandomColor = ()=> {
    const randomNumber = Math.floor(Math.random()*colorArray.length);
    return colorArray[randomNumber];
}   
const changeColor = (color)=>{
    container.style.backgroundColor = color; 
    cuurentColorValue.innerText = color;
}

const handleRandomBtnClick = ()=> {
  const color = generateRandomColor();
    changeColor(color);
}

const handleApplyBtnClick = ()=> {
   const color = colorInput.value;
   changeColor(color);
}
randomBtn.addEventListener('click',handleRandomBtnClick)
applyBtn.addEventListener('click',handleApplyBtnClick)



