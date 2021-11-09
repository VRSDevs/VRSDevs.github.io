/*!
 * Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
// 

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
            offset: 74,
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
// cambiar idioma
let langs = ['sp', 'eng'];
let lang = 'sp';
setLangStyles(lang);

function setStyles(styles) {
    var elementId = '__lang_styles';
    var element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }

    let style = document.createElement('style');
    style.id = elementId;
    style.type = 'text/css';

    if (style.styleSheet) {
        style.styleSheet.cssText = styles;
    } else {
        style.appendChild(document.createTextNode(styles));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

function setLang(lang) {
    setLangStyles(lang);
    ChangeColor(lang);
    console.log("Done");
}

function ChangeColor(lang) {
    if (lang === 'sp') {
        document.getElementById('sp').style.color = "#305978";
        document.getElementById('eng').style.color = "#282428";
    } else {
        document.getElementById('sp').style.color = "#282428";
        document.getElementById('eng').style.color = "#305978";
    }
}

function setLangStyles(lang) {
    let styles = langs
        .filter(function(l) {
            return l != lang;
        })
        .map(function(l) {
            return ':lang(' + l + ') { display: none; }';
        })
        .join(' ');

    setStyles(styles);
}

window.onload = function() {
    ChangeColor("sp");
}