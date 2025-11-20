

const div_Element = document.querySelector('div')

// div.setAttribute('class', 'class1')
// node.style.cssText = 'How are You'

// div.style.backgroundColor = 'green'
// div.style.borderRadius = '20px'
// div.style.height = '50px'
// div.style.textAlign = 'center'
// div.style.fontSize = '30px'

// div.style.cssText = 'background-color:green; height:40px; text-align:center; font-size:30px; padding-20px; margin-10px; '


div_Element.classList.add('addNewClass')
div_Element.classList.add('addNewClass2')
div_Element.classList.add('blueBg')
// div.style.backgroundColor = 'green';
// div.style.cssText = 'background-color:red;'
// div_Element.classList.remove('addNewClass')
div_Element.classList.remove('addNewClass')
div_Element.classList.toggle('blueBg')
div_Element.classList.entries('AddNewClassList')
div_Element.addEventListener
let isAvailbleClassses = div_Element.classList.contains('addNewClass2')
console.log('is Presnet :', isAvailbleClassses)