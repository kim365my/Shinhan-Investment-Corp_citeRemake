 // 탑버튼 스크롤 
var sa = 100;
$(window).scroll(function(){
    var num = $(window).scrollTop();
    console.log(num);
    if(num > sa){
        $('aside div').stop().fadeIn();
    }else{
        $('aside div').stop().fadeOut();
    };
});

$('.top').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({scrollTop:0},300, 'swing');
});

 // 챗봇
$('.chbot img').mouseenter(function(){
    $('.chbot_text').css({width:'220px'});
    $('.chbot_text p').css({opacity:1,fontSize:'16px'});
});
$('.chbot').mouseleave(function(){
    $('.chbot_text').css({width:'50px'});
    $('.chbot_text p').css({opacity:0,fontSize:'0px'});
});
