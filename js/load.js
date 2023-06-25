// 클래스
const CHECK_CLASS = "check";

$(".header").load("./module/header.html", function(){
    // -----------------
    // snb 메뉴 열리게
    // -----------------
    // 메뉴 호버시 보이게
    $(".menu").mouseenter(snbOpen);
    $(".menu").keyup(snbOpen);

    // -----------------
    // header 메뉴를 떠나면 자동으로 닫히게
    // -----------------
    $(".menu").mouseleave(snbClose);

    function snbOpen(){
        $(".snb").stop().slideDown();
    }
    function snbClose(){
        $('.snbTitle').removeClass(CHECK_CLASS);
        $(".snb").stop().slideUp();
    }
    
    // -----------------
    // snb 제목을 클릭시 2뎁스가 보이게
    // -----------------

    $(".snbTitle").click(function(){
        // 다른 거 클릭하면 해당 요소말고 다른 요소는 다 클래스 제거
        if($(this).hasClass(CHECK_CLASS)){
            // $('.snbItem').hide();
            $('.snbTitle').removeClass(CHECK_CLASS);
        }else{
            $('.snbTitle').removeClass(CHECK_CLASS);
            $(this).addClass(CHECK_CLASS);
        }
    })

    // -----------------
    // 이미지 빨리 로드
    let images = new Image().src = "./images/header/logo.png";

});
$(".footer").load("./module/footer.html");

$("aside").load("./module/aside.html", function(){
    $('aside div').eq(-1).hide();
        // 탑버튼 스크롤 
        var sa = 100;
        $(window).on("mousewheel", function(){
            var scorll = $(window).scrollTop();
            if(scorll > sa){
                $('aside div').stop().fadeIn(200);
            } else{
                $('aside div').eq(-1).stop().fadeOut(200);

            }
        });


        $('.top').click(function(e){
            e.preventDefault();
            $('html,body').stop().animate({scrollTop:0},200, 'swing');
            $('aside div').eq(-1).stop().fadeOut(200);
        });

        // 챗봇
        $('.chbot').mouseenter(function(){
            $('.chbot_text').css({width:'220px'});
            $('.chbot_text p').css({opacity:1,fontSize:'16px'});
        });
        $('.chbot').mouseleave(function(){
            $('.chbot_text').css({width:'50px'});
            $('.chbot_text p').css({opacity:0,fontSize:'0px'});
        });
});


