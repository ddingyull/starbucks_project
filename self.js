//search
const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});
//핸들러, attributehtml속성
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


//badge
const badgeEl = document.querySelector('header .badges');

//lodash cdn -> throttle를 사용하면 함수 사용횟수를 줄일 수 있음 
//._throttle(함수, 시간)
//gsap cdn -> 
window.addEventListener('scroll', _.throttle(function (){
  console.log('scroll');
  if(window.scrollY) {
    //배지 숨기기
    //badgeEl.style.display ="none";
    //gsap.to(요소, 지속시간, {옵션}) ->숨겨지더라도 속성과 위치는 그대로 유지되고 있는 상태임 때문에 display": none
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    })
  } else {
    //배지 보이기
    // badgeEl.style.display ="block";
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    })
  }
}, 300));

//visual(왜 안되는거지?)
const fadeELs = document.querySelector('.visual .inner .fade-in');

fadeELs.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //.7초씩 딜레이되어 실행
    opacity: 1
  });
});
