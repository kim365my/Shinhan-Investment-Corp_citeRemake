// table 페이지 넘어가기
// 페이지 num 버튼 효과
var pg = $('.pg').find('a')
$(pg).click(function(){ 
    if($(this).parent().hasClass('dt_num_bg')){
        $(this).closest('.page_num').siblings('.tb').removeClass('tb_dp'); 
    }else{
        $(this).parent().addClass('bt_num_bg');
        $(this).parent().siblings().removeClass('bt_num_bg');
    }
})

// 테이블 페이지 넘어가기
var tab = $('.page_num').find('.pg');
var table = $('.table').find('section div');

var i;
function tab_menu(num){
    for(i=0; i<tab.length; i++){
        if(num == i) {
            tab.eq(i).addClass('active');
            table.eq(i).show();
            tab.eq(i).addClass('active');
            $('.table0'+i).show();
        }else {
            tab.eq(i).removeClass('active');
            table.eq(i).hide();
            tab.eq(i).removeClass('active');
            $('.table0'+i).hide();
        }
    }
}


// 체크시 placeholder 변경 123번만 가능
$('#check').click(function(){
    if($(this).is(':checked')){
        $('#text').attr('placeholder',"피델리티_A-e(채권-재)");
    }else{
        $('#text').attr('placeholder',"펀드를 선택하세요");
    }
});
$('#check2').click(function(){
    if($(this).is(':checked')){
        $('#text2').attr('placeholder',"피델리티_C-e(채권-재)");
    }else{
        $('#text2').attr('placeholder',"펀드를 선택하세요");
    }
});
$('#check3').click(function(){
    if($(this).is(':checked')){
        $('#text3').attr('placeholder',"브레인코스닥_AE(주식혼합)");
    }else{
        $('#text3').attr('placeholder',"펀드를 선택하세요");
    }
});



// a 링크 기본기능 제거
$('a [href="#"]').on('click',function(e){
    console.log(e);
    e.preventDefault();
});

$('.eventNone').on('click',function(e){
    console.log(e);
    e.preventDefault();
});



// 그래프 화살표
$('.forward_btn').on('click', function(){
    $('.graph .slide>li').eq(-1).css({display:'flex','justify-content':'space-between'}).show();
    $('.graph .slide>li').eq(0).hide();
    $('.back_btn').on('click',function(){
        $('.graph .slide>li').eq(0).show();
        $('.graph .slide>li').eq(-1).hide();
    });
});

$(function(){
    $(`<div class="alert">죄송합니다. 해당페이지는 준비중입니다.</div>`).appendTo("#wrap");
    $("button").not(".eventNone").on("click", function(e){
        e.preventDefault();
        $(".alert").stop().fadeIn(700)
        setTimeout(() => {
            $(".alert").stop().fadeOut(700);
        }, 1000);
    })
})

