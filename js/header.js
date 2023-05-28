$(function(){
    // -----------------
    // snb 메뉴 열리게
    // -----------------
    // 메뉴 호버시 보이게
    $(".menu").mouseenter(snbOpen);
    $(".menu").keyup(snbOpen);

    // 메뉴 클릭시 상호작용
    $(".menu").click(snbClose);

    // -----------------
    // snb 메뉴를 떠나면 자동으로 닫히게
    // -----------------
    $(".snb").mouseleave(snbClose);
    function snbOpen(){
        $(this).next().stop().slideDown(100);
    }
    function snbClose(){
        $('.snbTitle').removeClass(CHECK_CLASS);
        $(".snb").stop().slideUp(100);
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
})