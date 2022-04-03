// Global component : header
class globalHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header>
                <div class="container">
                    <div class="menu-container">
                        <div class="grt-menu-row">
                            <div class="grt-menu-logo">
                                <a href="/index.html"  class="grt-logo"><img alt="Ashoka Purestudy Logo" src="assets/images/ap-logo.svg"></a>
                            </div>
                            <div class="grt-menu-right">
                                <nav>
                                    <button class="grt-mobile-button"><span class="line1"></span><span class="line2"></span><span class="line3"></span></button>
                                    <ul class="grt-menu">
                                        <li class="active"><a href="">Home</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">Portfolio</a></li>
                                        <li><a href="">Blog</a></li>
                                        <!-- <li class="grt-dropdown"><a>dropdown</a>
                                            <ul class="grt-dropdown-list">
                                                <li><a href="">Menu 1</a></li>
                                                <li><a href="">Menu 2</a></li>
                                                <li><a href="">Menu 3</a></li>
                                            </ul>
                                        </li> -->
                                        <li><a href="">contact</a></li>                             
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        `
    }
}

customElements.define('site-header', globalHeader)

// Global component : footer
class globalFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer class="footer text-center">
                
            </footer>
        `
    }
}

customElements.define('site-footer', globalFooter)



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Global menu
(function( $ ){
    $.fn.grtmobile = function () {
        $('.grt-mobile-button').on('click', function(){
            $(this).toggleClass("grt-mobile-button-open");
            $("ul.grt-menu").toggleClass("open-grt-menu ");
            $("html, body").toggleClass("body-overflow");
        });
        $('li.grt-dropdown').on('click', function(e){
            $(this).toggleClass("active-dropdown");
        });
    }
})( jQuery );

// Initialize and check for mobile
$.fn.grtmobile();


// Add fixed class on scroll after 60px
$(window).scroll(function(e){
   if ($(this).scrollTop() > 60){
       $('header').addClass('scrolled');
   } else {
       $('header').removeClass('scrolled');
   }
});

// Prevent a href clicks on dropdown category item
$('li.grt-dropdown > a').on('click', function(e){
    e.preventDefault();
});