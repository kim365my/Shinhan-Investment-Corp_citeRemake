// 변수선언
var chartSlider = document.querySelector(".chartSlider");
// const widthChart = $(".chartSlider").width();
// setInterval(function(){
//     for (let i = 0; i < chartSlider.length; i++) {
//         chartSlider[i].animate({
//                 transform: [
//                   'translateX(-50px)',
//                   'translateX(-100px)',
//                   'translateX(-1500px)',
//                   'translateX(-200px)',
//                   'translateX(-250px)',
//                 ]},
//               {
//                 duration: 3000, // 밀리초 지정
//                 fill: 'forwards', // 종료 시 속성을 지님
//                 easing: 'ease-in-out' // 가속도 종류
//               } 
//         );
//     }
// },1000);
console.log(chartSlider.getAnimations()[0]);
// 차트 복제
const cloneChartSlider = chartSlider.cloneNode(true);




// 미구현기능 클릭시 안내문
$("a[href='#']").on("click", function(e){
    e.preventDefault();
    $(".alert").stop().fadeIn(700)
    setTimeout(() => {
        $(".alert").stop().fadeOut(700);
    }, 500);
})
// -----------------------
// 슬라이드
// -----------------------
// 메인 슬라이드
$("#slider_banner_main").bxSlider({
    // 슬라이드간의 마진
    slideMargin:1,
    // 오토슬라이드
    auto: true,
    autoControls: true,
    // stopAutoOnClick: true,
    pager: true,
    // 오토슬라이드 start/pause버튼 합치기
    autoControlsCombine:true,
    // 텍스트 없게
    startText:" ",
    stopText:" "
});
// 이벤트 슬라이드
$("#slider_banner_area").bxSlider({
    // 슬라이드간의 마진
    slideMargin:1,
    // 오토슬라이드
    auto: true,
    autoControls: true,
    // stopAutoOnClick: true,
    // 페이지 번호타입을 [1/3]형식으로
    pagerType:"short",
    // 오토슬라이드 start/pause버튼 합치기
    autoControlsCombine:true,
    // 텍스트 없게
    nextText:" ",
    prevText:" ",
    startText:" ",
    stopText:" "
});


// $("#slider_banner_chart").bxSlider({
//     // 페이지 숫자 끄기
//     pager:false,
//     // 이전/다음 버튼 끄기
//     controls:false,
//     // 오토슬라이드
//     auto: true,
//     autoControls: true,
//     stopAutoOnClick: true,
//     // 마우스호버시 슬라이더 정지
//     autoHover:true,
//     // 오토슬라이드 start/pause버튼 합치기
//     autoControlsCombine:true,
//     // 텍스트 없게
//     startText:" ",
//     stopText:" ",
//     minSlides:3,
//     maxSlides:4,

//     shrinkItems:true,

//     // 슬라이드 폭
//     slideWidth:0
// })


