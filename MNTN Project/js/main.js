const navBtn = document.querySelector(".nav-button");
const mobileNav = document.querySelector(".mobile-nav");

navBtn.addEventListener("click", function(e){
    e.stopPropagation();
    
    mobileNav.classList.toggle("mobile-nav-active");
    navBtn.classList.toggle("nav-button-close");
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_mobileNav = target == mobileNav || mobileNav.contains(target);
    let its_navBtn = target == navBtn;
    let menu_is_active = mobileNav.classList.contains('mobile-nav-active');
    
    if (!its_mobileNav && !its_navBtn && menu_is_active) {
      mobileNav.classList.toggle("mobile-nav-active");
        navBtn.classList.toggle("nav-button-close");
    }
  })