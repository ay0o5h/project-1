$(document).ready(function(){
    //navbar
    $(".navbarr li").on('click',function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})