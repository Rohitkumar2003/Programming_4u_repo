// question -1. Print all Even numbers from 0 to 100.
// for(let i=0; i<=100; i++) {
//     if(i%2 !== 0) {
//         console.log(i, 'Even Numbers')
//     }
// }let str = 'Typewritter';
// let vowelsCounter = 0;
// let consonentsCounter = 0;

// const { useState, use } = require("react");

//     for(let letter of str) {
//         if(letter == 'a'|| letter == 'e'|| letter == 'i'|| letter == 'o'||letter == 'u'||
//             letter == 'A'||letter == 'E'|| letter == 'I'|| letter == 'O'||letter == 'U'
//         ) {
//             vowelsCounter++;
//         }else {
//             consonentsCounter++;
//         }
//     }

//     console.log(`Vowels:`, vowelsCounter);
//     console.log('Consonents:', consonentsCounter)

// question -2 .Calculate how many vowels and consonents are given string using for of loop
// let str = 'Typewritter';
// let vowelsCounter = 0;
// let consonentsCounter = 0;

//     for(let letter of str) {
//         if(letter == 'a'|| letter == 'e'|| letter == 'i'|| letter == 'o'||letter == 'u'||
//             letter == 'A'||letter == 'E'|| letter == 'I'|| letter == 'O'||letter == 'U'
//         ) {
//             vowelsCounter++;
//         }else {
//             consonentsCounter++;
//         }
//     }

//     console.log(`Vowels:`, vowelsCounter);
//     console.log('Consonents:', consonentsCounter)

// question -3 calculate sum of first 'n' numbers

// let n = 5;
// let sum = 0;

// for(let i=0;i<=n;i++) {
//     sum+=i;
// }
// console.log(`Sum is `+sum);


// question - 4 . calculate the sum of numbers from m to n

// let n = 1;
// let m = 10

// let sum = 0;
// for(let i=n; i<=m; i++) {
//     sum+=i;
// }

// console.log('sum', sum) 

//  question-5. make a knock game 

// let randomNumber = Math.floor(Math.random()*100);
// console.log(randomNumber)

// let userGuess = null;

// while(userGuess!== randomNumber) {
//     userGuess = Number(prompt('User Guess Number'));
//         if(isNaN(userGuess)) {
//             alert('Invalid User')
//         }else if(userGuess<randomNumber) {
//             alert('Number is too low. choose another Number')
//         }
// }

// question-6.simple password checker attempts 

// let password = 'Rohit';
// let userPasssword = null;
// let attempts = 0;

// while(password!==userPasssword && attempts <3 ) {
//     userPasssword = prompt('Enter password');
//          attempts++; 
//     if(password===userPasssword && attempts ) {
//         alert('Password is Matched')
//     }else if(attempts >=3) {
//         alert('Your Attempts is completed !! ')
//     }
//     else {
//         alert('Password is not matched')
//     }
// }

// question -7. create a programe to find the factorial of n.

// let number = 5;
// let fact = 1;

// let index = 1;
// while(index<=number) {
//     fact*=index;
//     index++;
// }
// console.log(fact)

// quesion - 8  print the followin pattern. (build it for nth numbers)
// let n = 5;
// for(let i=1; i<=n; i++) {
//     let str = '  ';
//         for(let j=1; j<=i;j++ ) {
//             str+=j;
//         }
//         console.log(str)
// }

// quesion-9.

let playAgain = true;
while(playAgain === 'YES') {
    alert('You wake up the dark forest! ');
    
    let userChoice = prompt('Do you want to go Left ot Right');
    
    if(userChoice === 'Left') {
        alert('You see something shiny in mud!')
        userChoice = prompt('Do you pick it up?(YES or NO) ')
        if(userChoice === 'YES'){
            alert('It is a Magical stone! Teleported to safety, you win!')
        }else {
            alert('You are died !')
        }
    }else {
        alert('To find a cave')
        userChoice = prompt('Do you enter the cave? (YES or NO) ')
        if(userChoice=='YES') {
            alert('You barely escape !')
        }else {
            alert('You Today sleep night is Good')   
        }
    }
    userChoice = prompt('Do you want Play Again (YES or NO)');
    if(userChoice==='NO') {
        playAgain = 'NO';
        alert('Thanks for play!')
    }
}