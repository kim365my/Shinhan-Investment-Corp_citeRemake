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
    stopText:" ",
    // 오류픽스 : 이미지 클릭이 이동 되도록
    touchEnabled : (navigator.maxTouchPoints > 0)
});
// 이벤트 슬라이드
$("#slider_banner_area").bxSlider({
    // 슬라이드간의 마진
    // slideMargin:1,
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
    stopText:" ",
    touchEnabled : (navigator.maxTouchPoints > 0)
});


// -----------------------
// 주식 차트 슬라이드
// -----------------------

// 변수선언
const titlemoveBoxWrap = document.querySelector(".chartSlider_wrap");
const titleStopBtn = document.querySelector("#chart_btn");
// 클래스명
const CLASS_START = "bx-start";
const CLASS_STOP = "bx-stop";


//클론 Movebox 마지막 div 복붙
let lastChild = titlemoveBoxWrap.lastElementChild;
let cloneLast = lastChild.cloneNode(true);
titlemoveBoxWrap.prepend(cloneLast);

// 버튼 클릭시 클래스명 변경
titleStopBtn.addEventListener("click", function(){
    titleStopBtn.classList.toggle(CLASS_START);
    titleStopBtn.classList.toggle(CLASS_STOP);

    console.log(titleStopBtn.classList.toString == CLASS_START);
})