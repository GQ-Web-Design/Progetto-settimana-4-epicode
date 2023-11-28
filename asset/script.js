let navbar = document.querySelector('.containerMenu');
let button = document.querySelector('nav ul li:nth-child(5) a');

document.addEventListener('scroll', () => {
    if(window.scrollY > 350){
        navbar.classList.add('scrolled');
        button.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
        button.classList.remove('scrolled');
    }
})