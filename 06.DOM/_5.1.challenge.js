// ? 1. create a paragraph with text Hey How Are You and add background color ,padding, border,borderRadius to JS

// const body = document.querySelector('body');
// let p = document.createElement('p')
//     p.innerText = "Hey How Are You"
//     p.style.backgroundColor = "green"
//     p.style.color = "blue "
//     p.style.padding = "20px"
//     p.style.border = "2px"
//     p.style.textAlign = "center"
//     p.style.borderRadius = "10px"
//     body.append(p);


// ? 2. Insert a button with the text "Click me" as the first element inside the paragraph created in 1-question.
    // let p = document.querySelector('p');
    // let button = document.createElement('button');
    // button.innerText = "click Me";
    // p.prepend(button);

// ? 3. create a <div> tag in html and give it a class & some styling. Now create a new class in css and try to append the class to the <div> element 

    // let div = document.querySelector('.box')
    // div.setAttribute('class', `${div.getAttribute('class')} box2`);
    // console.log(div.getAttribute('class'))
   
// ? 4. create a function that takes node and newTagName and replace the node from the new node with changed tag name in the DOM.

const div = document.querySelector('.box')
    

function changedTagName(oldNode, newTagName) {
    if(oldNode instanceof Element) {

        let p = document.createElement(newTagName);
        p.innerHTML = oldNode.innerHTML; 

        for(let attri of oldNode.attributes) {
           p.setAttribute(attri.name,attri.value)
        }
        oldNode.replaceWith(p)
    }else {
     console.log("Invalid Node")
    }
}

changedTagName(div,'p')
