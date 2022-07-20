//<sub-meun > search>
const searchEl = document.querySelector(".search");
const searchInput = searchEl.querySelector("input");

//input을 누르면 focus되도록 만들어주기(icon때문에 눌릴 수 있는 범위가 좁아서 따로 적용해줌)
searchEl.addEventListener("click", function() {
  searchInput.focus();
});
//input을 누르면 placeholder를 통합검색 추가하기
searchInput.addEventListener("focus", function(){
  searchInput.setAttribute("placeholder", "통합검색");
});
//input을 blur(focus안하면) 통합검색 글 안보이게 하기
searchInput.addEventListener("blur", function(){
  searchInput.setAttribute("placeholder", "");
});

//<SWIPER>
//NOTICE > SWIPER
//swiper livrary를 사용해서 swiper 구현(https://swiperjs.com/get-started)
//여러개 사용하기 위해서 swiper를 함수로 선언해서 사용

const swiperNotice = new Swiper(".notice .notice_line .swiper", {
  direction :"vertical",
  loop : true,
  autoplay: true,
});

//SWIPER PROMOTION
const swiperPromotion = new Swiper(".promotion .swiper", {
  // direction :"horizontal", : 기본값
  slidesPerView : 3,  //한 페이지에 몇장씩 보여주게 할 것인가
  spaceBetween : 10,  //아이템간 거리
  centeredSlides : true,  //슬라이드 센터 여부
  loop: true,  //루프 여부
  autoplay : {  //자동 재생, 변경 시장 설정
    delay: 1000,
    disableOnInteraction : false,   //클릭해서 왔다갔다하는 액션을 꺼주는 의미
  },
  pagination : {
    el: ".promotion .swiper-pagination", //paginationd을 할 엘리먼트 클래스 설정
    clickable : true, //클릭 가능 여부 설정
  },
  navigation:{
    prevEl:".promotion .swiper-button-prev", //이전 버전 클래스 설정
    nextEl:".promotion .swiper-button-next", //이후 버전 클래스 설정
  }
})

//SWIPER PROMOTION AUTOPLAY CONTROL
function controlAutoplay() {
  if(swiperPromotion.autoplay.running /*=== true*/) {
    swiperPromotion.autoplay.stop();
  } else {
    swiperPromotion.autoplay.run();
  }
}

//SWIPER PROMOTION TOGGLE
const promotionEl = document.querySelector(".promotion")
const promotionToggleBtn= document.querySelector(".toggle-promotion")

promotionToggleBtn.addEventListener("click", function(){
  if(promotionEl.classList.contains("hide")) {
    promotionEl.classList.remove("hide");
  } else{
    promotionEl.classList.add("hide");
  }

  if(promotionToggleBtn.style.transform === "rotate(180deg)") {
    promotionToggleBtn.style.transform = "rotate(0deg)"
  } else{
    promotionToggleBtn.style.transform = "rotate(180deg)"
  }
});

//<SCROLL ANIMATION>
// let scrollYpos; //전역변수 선언해주기
// window.addEventListener("scroll", function(){
//   scrollYpos = window.scrollY;
//   console.log(scrollYpos);
// })  --> peru scroll80정도?

if(scrollYpos > 80) {
  const peruAnimate = document.
}

