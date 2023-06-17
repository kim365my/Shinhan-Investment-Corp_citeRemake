// --------------------------------
// 미구현기능 클릭시 안내문
// --------------------------------
$(`<div class="alert">죄송합니다. 해당페이지는 준비중입니다.</div>`).appendTo("body");
$("a[href='#']").not(".eventNone").on("click", function(e){
    e.preventDefault();
    $(".alert").stop().fadeIn(700)
    setTimeout(() => {
        $(".alert").stop().fadeOut(700);
    }, 1000);
})
