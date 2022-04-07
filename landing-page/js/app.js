// start page at the top
document.body.scrollTop = 0;


// Define Global Variables
let mySection = document.querySelectorAll('section');
let navList = document.querySelector("#navbar__list")
let secNum = 1;

//end global Variables

// build the nav
mySection.forEach (section => {
  let listee = document.createElement('li');
  let listLink = document.createElement('a');
  listee.classList.add("menu__link");
  listLink.setAttribute("data-link", "section" + secNum);
  listLink.classList.add("menu__item");
  listLink.innerHTML = "section " + secNum;
  navList.append(listee);
  listee.append(listLink);
  secNum++;
});

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', function(){
  mySection.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    section.classList.remove('active');
    if(pageYOffset >= (sectionTop - sectionHeight/3) && pageYOffset < (sectionHeight + sectionTop - sectionHeight/3))
    {
      section.classList.add('active');
    }
  });
})

// scroll to top button
const myButton = document.querySelector('#topBtn');
document.addEventListener('scroll', function(){
    myButton.style.display = "block";
    if (document.body.scrollTop == 0)
    {
      myButton.style.display = "none";
    }
})
myButton.addEventListener('click', function(){
  document.body.scrollTop = 0;
})

//scroll to sections using nav
let navItems = document.querySelectorAll('.menu__item');
 navItems.forEach((item) => {
  item.addEventListener('click', function(){
    let current = item.getAttribute('data-link');
    let cus = document.getElementById(current);
    cus.scrollIntoView({block: 'start', behavior:'smooth'});
  })
});
