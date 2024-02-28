Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });



const myNav = document.querySelector(".home-nav");

    window.onscroll = function () {
  if (window.scrollY > window.innerHeight) {
      myNav.setAttribute('data-bs-theme', 'light');
      myNav.classList.add("scrolled");
      

      document.querySelector("#logo").src = "assets/White Logo.png"
  } else {
      myNav.classList.remove("scrolled");
      myNav.setAttribute('data-bs-theme', 'dark');
      document.querySelector("#logo").src = "assets/Logo.png"
  }
};

let oldScrollValue = 0;


window.addEventListener('scroll', function(e){

    // Get the new Value
    newScrollValue = window.pageYOffset;

    //Subtract the two and conclude
    if(oldScrollValue - newScrollValue < 0){
        myNav.style.top = "-100rem";
    } else if(oldScrollValue - newScrollValue > 0){
        myNav.style.top = "0";

    }

    // Update the old value
    oldScrollValue = newScrollValue;
});


const otherPageNav = document.querySelector(".other-page-navbar");
otherPageNav.classList.add("scrolled");


let oldValue = 0;
//Listening on the event

const navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function(e){

    // Get the new Value
    newValue = window.pageYOffset;

    //Subtract the two and conclude
    if(oldValue - newValue < 0){
        navbar.style.top = "-100rem";
    } else if(oldValue - newValue > 0){
        navbar.style.top = "0";

    }

    // Update the old value
    oldValue = newValue;
});



