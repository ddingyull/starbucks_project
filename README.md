#       22년 7월 시즌 스타벅스 홈페이지 클론코딩 프로젝트
<img width="1000" alt="스크린샷 2022-08-30 오후 2 31 27" src="https://user-images.githubusercontent.com/105038512/188191419-0f06a976-b382-44d5-b6f9-9aace19ca9b9.png">

<br/>

⏱ 개발 기간 : 2022년 7월 (3주)

🖥 플랫폼 : Web (Frontend Page)

👩🏻‍💻 개발 인원 : 1명 (개인 프로젝트)

🔗 page link : [StarbucksPage Clone](https://www.notion.so/StarbucksPage-clone-Project-6f3189d9385e419ab4c454452344a1cf)

<br/>

## 개발 환경

언어 : HTML, CSS, JAVASCRIPT

라이브러리 : Swiper, Gsap, Reset css

<br/>

# 사용자 페이지 주요 기능 6가지<br/>
### 1. **링크 미리보기 기본 내용 설정**<br/>

- page를 공유 시 스타벅스에 대한 기본 정보가 사용자에게 보여질 수 있도록 구현하였습니다.
- 카카오톡, 트위터에서 공유했을 때 card가 보여지며, 대표 이미지, 정보가 등록되어 있습니다.
- Opengraph, Twittercard를 추가하여 해당하는 사이트에 공유했을 경우 미리보기 정보를 확인할 수 있습니다. 
<img width="394" alt="스크린샷 2022-08-30 오후 3 48 47" src="https://user-images.githubusercontent.com/105038512/188191673-7a897e99-fff7-4c37-a069-046363028ee3.png">


### 2. **검색창 클릭 시 강조**<br/>

- javascript를 이용하여 강조되어 검색할 수 있습니다. (클릭 시 사이즈 조절, outline과 focus 강조)<br/>

https://user-images.githubusercontent.com/105038512/188190794-d325fb85-7f2e-430f-8987-79b5ef0fcecf.mov

### 3. **페이지 로드 시 주요 상품 강조**<br/>

- javascript를 이용하여 강조되어 검색할 수 있습니다. (load 시 이미지 딜레이하여 나타나도록 강조)
- css의 transition으로 재현한 후 javascript로 수정하여 완성하였습니다.


https://user-images.githubusercontent.com/105038512/188190849-6fb6e24e-1edd-4305-ab30-27f83b433ea9.mov

### 4. **일정 시간에 따라 공지사항 보여주는 기능(Swiper 라이브러리를 활용)**<br/>

고객에게 알려야할 일정 시간에 따라 ‘공지사항’을 순차적으로 노출할 수 있습니다.

https://user-images.githubusercontent.com/105038512/188190902-b7f901f3-aec1-4902-8dc1-a2ce8d52a102.mov

### 5. **클릭 시 다양한 프로모션을 애니메이션으로 보여주는 기능(Swiper 라이브러리를 활용)**<br/>

- toggle기능을 이용하여 클릭 시 원하는 화면이 보여집니다.
- swiper라이브러리를 추가한 후 클래스를 활용하여 여러개 정보가 가로로 회전하여 보여질 수 있도록 구현하였습니다.
- 게시물의 양쪽 버튼을 누를 경우 다음 게시물이 보여지고, 아래 원을 누를 경우 해당 게시물로 바로 이동하도록 구현하였습니다.


https://user-images.githubusercontent.com/105038512/188191843-83e1148d-ca8a-49cf-a32d-0dc29061e4cf.mov


### 6. **Scroll시 정보들이 움직이며 보여질 수 있도록 구성**<br/>

- 요소들이 안보이다가 scroll시 보여질 수 있도록 구성하였습니다.


https://user-images.githubusercontent.com/105038512/188192242-11c1e641-ce1e-4436-bdf9-b6288fc6530e.mov


