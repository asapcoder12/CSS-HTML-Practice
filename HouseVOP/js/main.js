(function () {
    const navbar = document.querySelector('.navbar');

    window.onscroll = ()=>{
        if (window.pageYOffset > 10) {
            navbar.classList.add('navbar_active');
        }
        else
        {
            navbar.classList.remove('navbar_active');
        }
    };
})();


(function () {
    const mobileWrap = document.querySelector('.mobile-wrap');
    const navbarToggler = document.querySelector('.navbar__toggler');
    const navbarMenuItems = document.querySelector('.navbar__menu').querySelectorAll('li');

    navbarToggler.addEventListener('click', function(){
        this.classList.toggle('navbar__toggler_active');
        mobileWrap.classList.toggle('mobile-wrap_show');
    });

    navbarMenuItems.forEach(element => {
        element.addEventListener('click', function() {
            navbarToggler.classList.remove('navbar__toggler_active');
            mobileWrap.classList.remove('mobile-wrap_show');
        });
    });

})();