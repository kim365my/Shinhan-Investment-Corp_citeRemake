
var slideIndex = 0;
var i;
var list_parent = $("#stock_info");
var list = list_parent.children(".stock_list");
console.log(list);
var list_width = $("#stock_info li").width();
var list_margin = $("#stock_info li:last")
  .css("margin-left")
  .replace("px", "");
var result =
  (Number(list_margin) + Number(list_width)) * Number(list.length) + 30;

console.log(result);

// li 복사 함수
function copies() {
  list_parent.each(function () {
    var copy = $(this).html();
    // console.log(copy);
    // console.log(copy);
    list_parent.append(copy);
  });
}

//
function list_keyframe() {
  $.keyframe.define([
    {
      name: "automove",
      "0%": {
        'left': "0px",
      },
      "100%": {
        'left': "-" + result + "px",
      },
    },
  ]);
}
copies();
list_keyframe();
// list 일지정시 재생을 위한 list 변수 값 재할당 (each에서 추가된 li 추가)
var playBtn = $('#play_button');
var list = list_parent.children();
console.log(list);

function list_paused() {
  list.on({
    mouseenter: function () {
      list.css({ animationPlayState: "paused" });
    },
    mouseleave: function () {
      list.css({ animationPlayState: "paused" });
    },
  });
}
// list hover시 일시정지 함수
function list_hover_play() {
  list.on({
    mouseenter: function () {
      list.css({ animationPlayState: "paused" });
    },
    mouseleave: function () {
      list.css({ animationPlayState: "running" });
    },
  });
}
// 일시정지, 플레이 버튼 누르면 작동
playBtn.click(function () {
  if (playBtn.hasClass('paused')) {
    list.css({ animationPlayState: "paused" });
    playBtn.removeClass('paused');
    playBtn.addClass('play');
    list_paused();
  } else {
    list.css({ animationPlayState: "running" });
    playBtn.removeClass('play');
    playBtn.addClass('paused');
    list_hover_play();
  }
});
list_hover_play();