const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");

const onScroll = () => {
    const scroll = document.documentElement.scrollTop;
    const mediaQuery = window.matchMedia("(max-width: 992px)");

    mediaQuery.addListener(myFunction);
    myFunction(mediaQuery);

    if (scroll > 40) {
        desktopMenu.classList.add("animated", "fadeInDown", "navbar-fixed", "nav-desktop");
    } else {
        desktopMenu.classList.remove("animated", "fadeInDown", "navbar-fixed", "nav-desktop");
    }

    function myFunction(mediaQueryOn) {
        if (scroll > 40) {
            mobileMenu.classList.add("animated", "fadeInDown", "navbar-fixed", "nav-mobile", "bg-shadow");
        } else {
            mobileMenu.classList.remove("animated", "fadeInDown", "navbar-fixed", "nav-mobile", "bg-shadow");
        }
    }
};

window.addEventListener("scroll", onScroll);