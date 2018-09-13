$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 30) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });
});
