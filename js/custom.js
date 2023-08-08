// CLASSLIST : 더보기 버튼 눌렀을때 5개씩 나타나기
$(window).on('load', function() {
  load('#js-load', '6');

  $("#js-btn-wrap").on("click", function() {
    load('#js-load', '3', '#js-btn-wrap');
  });
});

function load(id, cnt, btn) {
  let class_list = id + " .js-load:not(.active)";
  let class_length = $(class_list).length;
  let class_total_cnt;

  if (cnt < class_length) {
    class_total_cnt = cnt;
  } else {
    class_total_cnt = class_length;
    $(btn).hide();
  }
  $(class_list + ":lt(" + class_total_cnt + ")").addClass("active");
}

// GOTOTOP 스크롤 살짝 내렸을때 나오게 하기
const gototopEl = document.querySelector('.gototop');

window.addEventListener('scroll', function(){
  let scrollY = this.scrollY;

  if(scrollY > 2){
    gototopEl.classList.add('active');
  } else {
    gototopEl.classList.remove('active');
  }

  // gnb 스크롤 위치에 왔을때 글자색 변하게하기
  let introPo = document.getElementById("intro-a").offsetTop;
  let reviewPo = document.getElementById("review-a").offsetTop;
  let classPo = document.getElementById("class-a").offsetTop;
  let faqPo = document.getElementById("faq-a").offsetTop;

  let introG = document.querySelector(".gnb-sticky li:nth-child(1)");
  let reviewG = document.querySelector(".gnb-sticky li:nth-child(2)");
  let classG = document.querySelector(".gnb-sticky li:nth-child(3)");
  let faqG = document.querySelector(".gnb-sticky li:nth-child(4)");
  
  if(scrollY > introPo - 200 && scrollY < reviewPo - 200){
    introG.classList.add('active');
  } else {
    introG.classList.remove('active');
  }
  
  if(scrollY > reviewPo - 200 && scrollY < classPo - 100){
    reviewG.classList.add('active');
  } else {
    reviewG.classList.remove('active');
  }

  if(scrollY > classPo - 100 && scrollY < faqPo - 200){
    classG.classList.add('active');
  } else {
    classG.classList.remove('active');
  }

  if(scrollY > faqPo - 200){
    faqG.classList.add('active');
  } else {
    faqG.classList.remove('active');
  }

});


$(function(){

  // SLICK JS : CLASS-SLIDER
  $('.class-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ACCORDION MENU
  $(".question").click(function() {
    $(this).next(".answer").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    $(this).next(".answer").siblings(".answer").slideUp(300); // 1개씩 펼치기
  });
  
});



