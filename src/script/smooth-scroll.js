const navbar = document.querySelector("nav");

const onScroll = () => {
    const scroll = document.documentElement.scrollTop;
    const mediaQuery = window.matchMedia("(max-width: 992px)");

    mediaQuery.addListener(myFunction);
    myFunction(mediaQuery);

    if (scroll > 40) {
        navbar.classList.add("animated", "fadeInDown", "navbar-fixed", "nav-desktop");
    } else {
        navbar.classList.remove("animated", "fadeInDown", "navbar-fixed", "nav-desktop");
    }

    function myFunction(mediaQueryOn) {
        if (scroll > 40) {
            navbar.classList.add("animated", "fadeInDown", "navbar-fixed", "nav-desktop", "bg-shadow");
        } else {
            navbar.classList.remove("animated", "fadeInDown", "navbar-fixed", "nav-desktop", "bg-shadow");
        }
    }
};

window.addEventListener("scroll", onScroll);