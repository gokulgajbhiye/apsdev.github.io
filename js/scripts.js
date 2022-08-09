// Global component : header
var jkhbKBld = "518FC2407AF7C7075C171275A5C463558701";
class globalHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="container">
                    <div class="menu-container">
                        <div class="grt-menu-row">
                            <div class="grt-menu-logo">
                                <a href="index.html"  class="grt-logo">
                                    <img alt="Ashoka Purestudy Logo" src="assets/images/ap-logo.svg">
                                    <span>Ashoka Purestudy Technologies</span>
                                </a>
                            </div>
                            <div class="grt-menu-right">
                                <nav>
                                    <button class="grt-mobile-button"><span class="line1"></span><span class="line2"></span><span class="line3"></span></button>
                                    <ul class="grt-menu">
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="products.html">Products</a></li>                             
                                        <li><a href="projects.html">Projects</a></li>                             
                                        <li><a href="contact-us.html">Contact Us</a></li>                             
                                        <li class="d-none"><a href="" >Careers</a></li>                             
                                        <li class="d-none"><a href="">Blogs</a></li>                             
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
class globalFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer mb-5">
        <div class="container">
            <div class="menu-container pt-5">
                <div class="footer-menu-row row">
                    <div class="footer-menu-logo text-center col-12 col-lg-3">
                        <a href="index.html" class="grt-logo vertically-middle"><img alt="Ashoka Purestudy Logo" src="assets/images/ap-logo.svg"></a>
                    </div>
                    <div class="footer-menu-right col-12 col-lg-9">
                        <div class="row">
                            <div class="col-12 col-lg-3">
                                <ul class="footer-menu mb-5">
                                    <li><!--<a href="">--><span>Sectors</span><!--</a>--></li>
                                    <ul class="footer-sub-menu">
                                        <li><!--<a href="">-->Education<!--</a>--></li>
                                        <li><!--<a href="">-->Healthcare<!--</a>--></li>
                                        <li><!--<a href="">-->Traffic & Transport Management<!--</a>--></li>
                                        <li><!--<a href="">-->Cyber Security<!--</a>--></li>
                                        <li><!--<a href="">-->Defence<!--</a>--></li>
                                        <li><!--<a href="">-->E-Governance<!--</a>--></li>
                                        <!--<li><a href="">Logistics</a></li>
                                        <li><a href="">Disaster Management</a></li>
                                        <li><a href="">Smart-ID</a></li>
                                        <li><a href="">E-Library</a></li>
                                        <li><a href="">Facial Recognition</a></li>
                                        <li><a href="">Driving Test Automation</a></li>
                                        <li><a href="">Smart City Projects</a></li>-->
                                    </ul>
                                </ul>

                            </div>
                            <div class="col-12 col-lg-3">
                                <ul class="footer-menu">
                                    <li><a href="products.html">Products</a></li>
                                    <ul class="footer-sub-menu mb-5">
                                        <li><a href="">RED</a></li>
                                        <li><a href="">REDCash</a></li>
                                        <!--<li><a href="">Red LMS</a></li>-->
                                        <li><a href="">Purestudy Forum</a></li>
                                    </ul>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li class="d-none"><a href="">Careers</a></li>
                                    <li class="d-none"><a href="">Location</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-lg-3">
                                <ul class="footer-menu">
                                    <li><!--<a href="">--><span>Insights (Blogs)</span><!--</a>--></li>
                                    <li><!--<a href="">--><span>Innovation</span><!--</a>--></li>
                                    <li><!--<a href="">--><span>News and Events</span><!--</a>--></li>
                                    <li><!--<a href="">--><span>Partner Ecosystem</span><!--</a>--></li>
                                    <li><!--<a href="">--><span>Privacy Policy</span><!--</a>--></li>
                                </ul>
                            </div>
                            <div class="col-12 col-lg-3"></div>
                        </div>
                    </div>
                </div>
                <div class="copyright-social-row flex-row flex-lg-row-reverse">
                    <div class="social-links">
                        <ul>
                            <li>
                                <a href=""><img alt="facebook" src="assets/images/fb.png"></a>
                            </li>
                            <li>
                                <a href=""><img alt="instagram" src="assets/images/instagram.png"></a>
                            </li>
                            <li>
                                <a href=""><img alt="twitter" src="assets/images/twitter.png"></a>
                            </li>
                            <li>
                                <a href=""><img alt="facebook" src="assets/images/pinterest.png"></a>
                            </li>
                            <li>
                                <a href=""><img alt="instagram" src="assets/images/youtube.png"></a>
                            </li>
                            <li>
                                <a href=""><img alt="twitter" src="assets/images/whatsapp.png"></a>
                            </li>
                        </ul>
                    </div>                    <div class="copyright-text">
                        <i class="d-block vertically-middle">Copyrights &copy; 2022 All rights Reserved by Ashoka Purestudy Technologies.</i>
                    </div>

                </div>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define('site-footer', globalFooter)



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function() {
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
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Global menu
(function($) {
    $.fn.grtmobile = function() {
        $('.grt-mobile-button').on('click', function() {
            $(this).toggleClass("grt-mobile-button-open");
            $("ul.grt-menu").toggleClass("open-grt-menu ");
            $("html, body").toggleClass("body-overflow");
        });
        $('li.grt-dropdown').on('click', function(e) {
            $(this).toggleClass("active-dropdown");
        });
    }

    setActiveLink();

    var inputs = document.querySelectorAll('.form-control[type="file"]');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function(e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });



    AOS.init();
})(jQuery);

function sendEmail(btn) {
    if (validatePage(btn)) {
        Email.send({
            //SecureToken: "59396926-ee27-4575-8635-a8cf3f97e07e",
            Host: "smtp.elasticemail.com",
            Username: "admin@apt.com",
            Password: "518FC2407AF7C7075C171275A5C463558701",
            To: 'jai4u.p@gmail.com',
            From: "contactUs@apt.com",
            Subject: "This is the subject",
            Body: $('#txtName').val() + " " + $('#txtMessage').val() + " " + $('#txtContactNo').val() + " " + $('#txtEmail').val() + "And this is the body"
        }).then(function(message) {});
        $("#contactUsMessage").fadeIn();
        setTimeout(function() {
            $("#contactUsMessage").fadeOut();
        }, 5000);
        return true;
    } else {
        return false;
    }
}

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validatePage(btn) {
    var dataGroup = $(btn).attr('data-group');
    var inputs = $('.form-control[data-validations]');
    var valid = true;

    inputs.each(function() {
        var input = this,
            span = $(input).parent().parent().children('span')[0],
            spanVal = span.innerHTML;
        if (dataGroup == $(input).attr('data-group')) {
            if ($(input).attr("data-validations").indexOf('req') > -1) {
                if ($.trim($(input).val()) == "") {
                    $(span).css('color', 'red');
                    if (span.innerHTML.indexOf("*") == -1)
                        span.innerHTML = spanVal + "*";
                    valid = false;
                } else {
                    $(span).css('color', '');
                    span.innerHTML = spanVal = spanVal.replace("*", "");
                }
            }

            if ($(input).attr("data-validations").indexOf('email') > -1) {
                if ($.trim($(input).val()) != "")
                    if (!validateEmail($(input).val())) {
                        $(span).css('color', 'red');
                        if (span.innerHTML.indexOf("*") == -1)
                            span.innerHTML = spanVal + "*";
                        if ($('.emailValidator')[0] == undefined)
                            $(input).parent().append('<span class="emailValidator" style="color:red;font-size: 10px;position: absolute;right: 0;bottom: 5px;">Please enter valid email address.</span>');
                        valid = false;
                    } else {
                        $(span).css('color', '');
                        span.innerHTML = spanVal = spanVal.replace("*", "");
                        $('.emailValidator').remove();
                    }
            }
        }
    });
    return valid;
}

function setActiveLink() {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    $('.grt-menu a').each(element => {
        var hrefPage = $($('.grt-menu a')[element]).attr('href').split("/").pop();
        if (page == hrefPage) {
            $($('.grt-menu a')[element]).parent().addClass('active');
        }
    });

}

// Initialize and check for mobile
$.fn.grtmobile();


// Add fixed class on scroll after 60px
$(window).scroll(function(e) {
    if ($(this).scrollTop() > 60) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
});

// Prevent a href clicks on dropdown category item
$('li.grt-dropdown > a').on('click', function(e) {
    e.preventDefault();
});