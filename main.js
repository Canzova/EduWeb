// For navbar
window.addEventListener("scroll", () =>{
    // When we will scroll 0 px then the window-scroll class wil be toggled
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

// For faqs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
        // Changing the icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus')
        {
            icon.className = 'uil uil-minus';
        }
        else
        {
            icon.className = 'uil uil-plus';
        }
       
    })
})

// -------------------Navbar------------------------------

const menu = document.querySelector('.nav__menue');
const menuBtn = document.querySelector('#open-menue-button');
const closeBtn = document.querySelector('#close-menue-button');

menuBtn.addEventListener('click', () =>{
    menu.style.display = "block";
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
});

const closeNavbar = () =>{
    menu.style.display = "none";
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNavbar);
