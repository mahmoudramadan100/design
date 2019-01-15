$(document).ready(function(){

    $('#light').lightSlider({
        gallery: true,
        item: 1,
        loop:true,
        slideMargin: 0,
        thumbItem: 9
    });


  //   Serach box
  $(".open-boxing-search").click(function(){
    $(".search-page").css({
        display: "block",
        transition: "all 0.9s"
    });
    $("body").css({
        overflow: "hidden",
    });
});
$(".fa-times").click(function(){
    $(".search-page").css({
        display: "none",
        transition: "all 0.9s"
    });
    $("body").css({
        overflow: "auto",
    });
});

$(".clos").click(function(){
    $(".show").fadeOut();
});
$(".navbar-toggler-icon").click(function(){
    $(".show").fadeIn();
});





    $(".slide").fadeImages({
        time: 3000, // animation delay
        fade: 1000, // animation speed
        dots: true, // dots navigation
        arrows: false, // display next / prev navigation
        complete:function(){} // callback function
      });

      $('#testmonial').lightSlider({
        item:1,
        loop:false,
        rtl:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
    $('#blog').lightSlider({
        item:3,
        loop:false,
        rtl:true,
        slideMove:1,
        slideMargin:20 ,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:2000,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  

    $('#brand').lightSlider({
        item:6,
        loop:false,
        rtl:true,
        slideMove:1,
        slideMargin:20 ,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:2000,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:10,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });

    $('#proudct').lightSlider({
        item:3,
        loop:false,
        rtl:true,
        slideMove:2,
        controls: false,
        slideMargin:20 ,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:1000,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
    $('#proudct-2').lightSlider({
        item:3,
        loop:false,
        rtl:true,
        slideMove:2,
        controls: false,
        slideMargin:20 ,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:1000,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
    $('#team').lightSlider({
        item:3,
        loop:false,
        rtl:true,
        slideMove:2,
        slideMargin:20 ,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:2000,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });

   


    $('.skitter-large').skitter({
        interval: 400000,
        theme: "round",
        dots: true,
        with_animations:['fade'],
        auto_play: true,
        animation: 'circles',
        // label_animation	: "bottom"
        navigation: true
    });


  
  });