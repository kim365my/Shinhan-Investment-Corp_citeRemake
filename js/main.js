var alert = $(`<div class="alert">죄송합니다. 해당페이지는 준비중입니다.</div>`);
alert.appendTo("#wrap");

$("a[href='#']").on("click", function(e){
    e.preventDefault();
    $(".alert").stop().fadeIn(700)
    setTimeout(() => {
        $(".alert").fadeOut(700);
    }, 300);
})