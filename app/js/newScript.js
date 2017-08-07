/* eslint-disable */
// window.onload = function(){
//     alert("123456")
// }
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 1) {
        $('.sticky-header').addClass("sticky");
    }
    else {
        $('.sticky-header').removeClass("sticky");
    }
});

$(function () {
    $(".element").typed({
        strings: ["a blockchain for smart contracts", "based on Ethereum", "for everyone"],
        typeSpeed: 100,
        loop: true
    });
});