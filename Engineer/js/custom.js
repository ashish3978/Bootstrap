 
  $(".factory-1").mouseenter(function(){
    $(".img-1").css({"scale": "1.2" , "filter": "brightness(30%)"});
  });
  $(".factory-1").mouseleave(function(){
    $(".img-1").css({"scale": "1", "filter": "brightness(100%)"});
  });


  $(".factory-2").mouseenter(function(){
    $(".img-2").css({"scale": "1.2" , "filter": "brightness(30%)"});
  });
  $(".factory-2").mouseleave(function(){
    $(".img-2").css({"scale": "1", "filter": "brightness(100%)"});
  });


  $(".factory-3").mouseenter(function(){
    $(".img-3").css({"scale": "1.2" , "filter": "brightness(30%)"});
  });
  $(".factory-3").mouseleave(function(){
    $(".img-3").css({"scale": "1", "filter": "brightness(100%)"});
  });


  $(".factory-4").mouseenter(function(){
    $(".img-4").css({"scale": "1.2" , "filter": "brightness(30%)"});
  });
  $(".factory-4").mouseleave(function(){
    $(".img-4").css({"scale": "1", "filter": "brightness(100%)"});
  });


  $(".factory-5").mouseenter(function(){
    $(".img-5").css({"scale": "1.2" , "filter": "brightness(30%)"});
  });
  $(".factory-5").mouseleave(function(){
    $(".img-5").css({"scale": "1", "filter": "brightness(100%)"});
  });


  $(".factory-6").mouseenter(function(){
    $(".img-6").css({"scale": "1.2" , "filter": "brightness(30%)"});
  });
  $(".factory-6").mouseleave(function(){
    $(".img-6").css({"scale": "1", "filter": "brightness(100%)"});
  });


$(document).ready(function () {
    $('.factory-1').mouseenter(function () {
        $('.con-1').css('top','400px');
    })
    $('.factory-1').mouseleave(function () {
        $('.con-1').css('top','500px');
    })
});

$(document).ready(function () {
    $('.factory-2').mouseenter(function () {
        $('.con-2').css('top','400px');
    })
    $('.factory-2').mouseleave(function () {
        $('.con-2').css('top','500px');
    })
});

$(document).ready(function () {
    $('.factory-3').mouseenter(function () {
        $('.con-3').css('top','400px');
    })
    $('.factory-3').mouseleave(function () {
        $('.con-3').css('top','500px');
    })
});
$(document).ready(function () {
    $('.factory-4').mouseenter(function () {
        $('.con-4').css('top','400px');
    })
    $('.factory-4').mouseleave(function () {
        $('.con-4').css('top','500px');
    })
});
$(document).ready(function () {
    $('.factory-5').mouseenter(function () {
        $('.con-5').css('top','400px');
    })
    $('.factory-5').mouseleave(function () {
        $('.con-5').css('top','500px');
    })
});

$(document).ready(function () {
    $('.factory-6').mouseenter(function () {
        $('.con-6').css('top','400px');
    })
    $('.factory-6').mouseleave(function () {
        $('.con-6').css('top','500px');
    })
});

$(window).scroll(function(){
  if($(this).scrollTop() > 1){
      $('.top-btn').show();
  }else{
      $('.top-btn').hide();
  }
})
function getontop(){
  document.documentElement.scrollTop = 0;
}


$(".blog-1").mouseenter(function(){
  $(".blog-img-1").css({"scale": "1.03"});
});
$(".blog-1").mouseleave(function(){
  $(".blog-img-1").css({"scale": "1"});
});


$(".blog-2").mouseenter(function(){
  $(".blog-img-2").css({"scale": "1.03"});
});
$(".blog-2").mouseleave(function(){
  $(".blog-img-2").css({"scale": "1"});
});

$(".blog-3").mouseenter(function(){
  $(".blog-img-3").css({"scale": "1.03"});
});
$(".blog-3").mouseleave(function(){
  $(".blog-img-3").css({"scale": "1"});
});