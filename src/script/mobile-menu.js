const mediaQuery = window.matchMedia("(max-width: 992px)");

mediaQuery.addListener(myFunction);
myFunction(mediaQuery);

function myFunction(mediaQueryOn) {
    if (mediaQueryOn.matches) { // If media query matches
        console.log('ok');
        const navbar = $('.navbar-menu');
        navbar.hide();
        $('#toggle').click(function () {
            navbar.parent().toggleClass('bg-navbar');
            navbar.toggle(
                function () {
                    navbar.show();
                }, function () {
                    navbar.hide();
                });
        });
    } else {
        console.log('siap');
        const navbar = $('.navbar-menu');
        navbar.show();
    }

}
