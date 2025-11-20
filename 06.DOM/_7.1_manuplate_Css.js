
const navbar = document.querySelector('navbar')
const btn = document.querySelector('button')


let theme = 'light';
btn.addEventListener('click', function() {
    if(theme === 'light') {
        document.querySelector('body').style.cssText = 'background-color:black; color:white; '
        theme = 'dark';
    }else {
        document.querySelector('body').style.cssText = 'background-color:white; color:black;';
        theme = 'light';
    }
})