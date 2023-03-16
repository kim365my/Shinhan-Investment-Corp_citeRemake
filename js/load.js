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
    // XX snb 포지션을 업도미얼로 잡아서 헤더가 아니면 안됨 XX <- 된다!
    // 메뉴를 호버해서 열리는 이벤트와 닫히는 이벤트를 같은 영역 안에서 사용해야 함. 
    // 구조를 수정해야 하니까, .snb를 메뉴 안에 넣으면 메뉴 위에 호버하고 있는 시점에서는 사라지지 않음.
    // 영역간의 블록을 잘 살펴야함
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
    // 클래스
    const CHECK_CLASS = "check";

    $(".snbTitle").click(function(){
        // 다른 거 클릭하면 해당 요소말고 다른 요소는 다 클래스 제거
        if($(this).hasClass(CHECK_CLASS)){
            // $('.snbItem').hide();
            $('.snbTitle').removeClass(CHECK_CLASS);
        }else{
            $('.snbTitle').removeClass(CHECK_CLASS);
            $(this).addClass(CHECK_CLASS);
        }
    
        /*$(".snbTitle").removeClass(CHECK_CLASS);
        $(this).toggleClass(CHECK_CLASS); */
        
        // 클래스 토글
        // console.log($(this).hasClass(CHECK_CLASS));
    })
});
$(".footer").load("./module/footer.html");

$("aside").load("./module/aside.html", function(){
    $('aside div').eq(-1).hide();
        // 탑버튼 스크롤 
        var sa = 100;
        $(window).scroll(function(){
            var num = $(window).scrollTop();
            // console.log(num);
            if(num > sa){
                $('aside div').stop().fadeIn();
            }else{
                $('aside div').eq(-1).stop().fadeOut();
            };
        });

        $('.top').click(function(e){
            e.preventDefault();
            $('html,body').stop().animate({scrollTop:0},200, 'swing');
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


