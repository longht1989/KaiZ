/* ====================================
   Onload functions
   ==================================== */
$(".site-header .diagonal .btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#product1").offset().top
    }, 500);
});
$(".site-footer .diagonal .btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#product1").offset().top
    }, 1500);
});
