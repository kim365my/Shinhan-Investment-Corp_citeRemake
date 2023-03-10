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
// lnb 메뉴 : 자주가는 메뉴/처음이세요
// -----------------------
$(".lnb_btn label").click(function () {
    let num = Math.floor($(this).index() /3);
    
    $(".lnb").removeClass("cheack");
    $(".lnb").eq(num).addClass("cheack");
});

// -----------------------
// 주식 차트 슬라이드
// -----------------------
// 클래스명
const CLASS_START = "bx-start";
const CLASS_STOP = "bx-stop";

let chartChild = $(".chartSlider_wrap").children().eq(0).clone();
// JS에서는 prepend로 해서 문제가 없었는데 JQ에서 요소가 겹치는 문제가 발생해서 수정
chartChild.appendTo(".chartSlider_wrap");
$("#chart_btn").click(function(){
    $("#chart_btn").toggleClass(CLASS_START);
    $("#chart_btn").toggleClass(CLASS_STOP);
})


// JS로 구현
// // 변수선언
// const titlemoveBoxWrap = document.querySelector(".chartSlider_wrap");
// const titleStopBtn = document.querySelector("#chart_btn");


// //클론 Movebox 마지막 div 복붙
// let firstChild = titlemoveBoxWrap.firstElementChild;
// let cloneLast = firstChild.cloneNode(true);
// titlemoveBoxWrap.prepend(cloneLast);

// // 버튼 클릭시 클래스명 변경해서 css에서 멈추고 재생하고를 반복
// titleStopBtn.addEventListener("click", function(){
//     titleStopBtn.classList.toggle(CLASS_START);
//     titleStopBtn.classList.toggle(CLASS_STOP);
// })

// -----------------------
// 메인 주식차트 표 수치에 따라서 색이 변하게 만들기 
// -----------------------

// 마이너스라면 class down이 적용되도록 <- 색깔은 css에서 조절
// 1) nth-child(3) 위치에 존재, 해당 텍스트를 불러오기
// 2) 숫자로 강제 형변환
// +) 해당 updownChart의 인덱스 번호를 받아서 해당 li에 클래스를 추가해야함 어떻게 구현하지?
// 3) 만약 0보다 작다면 해당 태그에 class명 추가

let updownChart = document.querySelectorAll("#content3 .table td:nth-child(3) span");
//18개

const cartText = new Array;

// 텍스트 컨텐츠 뽑아오기
for (let i = 0; i < updownChart.length; i++) {
    // push하기 전에 중간에 형변환하면 되네
    cartText.push(Number(updownChart[i].textContent));    
}
console.log(cartText);

// 만약 0보다 작다면 해당 태그에 class명 추가
// i를 인덱스 번호로 활용하면 됨
for (let i = 0; i < cartText.length; i++) {
    let num = cartText[i];
    if (!(num > 0)) {
        console.log("거짓" + i);
        updownChart[i].classList.add("down");
    } 
}