const menu = document.querySelector('.hamburger-svg')
const close = document.querySelector('.close-svg')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav') //when clicked, it wil crete a class
    //we can now call the 'open-nav' class in the css to Transform-translateX(0%) to show the menu
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav') 
})