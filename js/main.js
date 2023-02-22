'use strict'; // 엄격모드on

// clock - 한국의 현재 날짜와 시간
const date = new Date();
const today = new Intl.DateTimeFormat('en',{dateStyle:"full",timeStyle:"short"}).format(date);
const dateContent = document.getElementById('date');

dateContent.innerText = `${today}`;

// top nav - languge메뉴 이벤트
const langWrap = document.querySelector('.lang_wrap');
const langList = document.querySelector('.lang');

langWrap.addEventListener('click',()=>{
    langWrap.classList.toggle('active');
});
