/*global $, WOW*/
$(document).ready(function () {
    
    'use strict';
    
    $(window).on('scroll', function () {
        
        if ($(this).scrollTop() === 0) {
            
            $('.navbar').css({
                background: "transparent",
                padding: "30px 10px",
                boxShadow: "0 0 0 transparent"
            });
            $('.navbar-light .navbar-nav .nav-link').css({color: "#fff"});
            $('.navbar-light .navbar-brand img').height(75);
            $('.navbar-light .navbar-toggler-icon i').css("color", "#fff");
        } else {
            $('.navbar').css({
                background: "#fff",
                padding: "10px 10px",
                boxShadow: "10px 0 10px #ccc"
            });
            $('.navbar-light .navbar-nav .nav-link').css({color: "#000"});
            $('.navbar-light .navbar-brand img').height(50);
            $('.navbar-light .navbar-nav .active>.nav-link').css({color: "#31aff5"});
            $('.navbar-light .navbar-toggler-icon i').css("color", "#000");
        }
    });
    
    
    // Add Active Class links
    $('.navbar-nav .nav-link').on('click', function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    // Smoth Scroll to sec
    $('.navbar-nav .nav-link').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).data('value')).offset().top - 60
        }, 1500);
    });
    
    // Start Wow.js
    new WOW().init();
    
    // View More button
    $('.view-b').on('click', function () {
        $('.view-m').show();
        $(this).hide();
        $('.view-l').show();
    });
    
    $('.view-l').on('click', function () {
        $('.view-m').hide();
        $(this).hide();
        $('.view-b').show();
    });
    
    
    // Trigger Slick
    $('.ex-boxs').slick({
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });
    
    // Pop Up
    function popUp() {
        $('.pop-up').delay(5000).fadeIn();
    }
    popUp();
    
    $('.close-btn').on('click', function () {
        $('.pop-up').fadeOut();
    });
    
    
    
    $('.web').on('click', function () {
        $('.websites').fadeIn(function () {
            $('.hosting').fadeOut();
            $('.byow').fadeOut();
        });
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    $('.host').on('click', function () {
        $('.hosting').fadeIn(function () {
            $('.websites').fadeOut();
            $('.byow').fadeOut();
        });
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    $('.byo').on('click', function () {
        $('.byow').fadeIn(function () {
            $('.websites').fadeOut();
            $('.hosting').fadeOut();
        });
        $(this).addClass('active').siblings().removeClass('active');
    });
    
});