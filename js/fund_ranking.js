// 슬라이드
const rankColor = ["#B4558C", "#7655B3", "#6570C0", "#474747", "#4F4F4F", "#727272", "#959595", "#B9B9B9", "#cbcbcb", "#f6f6f6"];
const rankImg = document.querySelectorAll(".rank_img");
rankImg.forEach((item, index) => {
    const height = Number(item.firstElementChild.textContent);
    item.style.height = `${(height * 5) == 100 ? height : height * 5 }%`;
    item.firstElementChild.style.backgroundColor = rankColor[index];
    console.log(item.style.height);
})



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

function tab_menu(num){
    for(let i=0; i<tab.length; i++){
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



// 그래프 화살표
$('.forward_btn').on('click', function(){
    $('.slide').eq(-1).css({
        display:'flex','justify-content':'space-between'
    }).show();
    $('.slide_index').eq(-1).show();
    $('.slide_index').eq(0).hide();
    $('.slide').eq(0).hide();
    $('.back_btn').on('click',function(){
        $('.slide').eq(0).show();
        $('.slide').eq(-1).hide();
        $('.slide_index').eq(0).show();
        $('.slide_index').eq(-1).hide();
    });
});

// -----------
// modal
const tb2Detail = document.querySelector(".tb2Detail");
$(".td2_d2 a").on("click", (e)=>{
    e.preventDefault();
    document.body.style.overflowY = "hidden";
    tb2Detail.showModal();
});

$(".modalClose").on("click", (e)=>{
    document.body.style.overflowY = "auto";
    tb2Detail.close();
});

