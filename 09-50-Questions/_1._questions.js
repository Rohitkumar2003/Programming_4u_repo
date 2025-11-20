const capitalizeFirstLetter = (str) => {
   const resultArr = str.split(' ').map(word=> {
    return word.charAt(0).toUpperCase()+word.slice(1);
   })
   resultArr.join(' ');
};

const letter = 'my name is rohit';

const ans = capitalizeFirstLetter(letter);
console.log(ans);  
