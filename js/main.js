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


// visual image slide controll btn(prev/next)
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const visualContainer = document.querySelector('.visual_container');
const visualContent = document.querySelectorAll('.visual');
const visualContents = visualContent.length;
const visualContainertWidth = visualContainer.offsetWidth;
const visualContentWidth = visualContainertWidth/visualContents;
let count = 0;
let visualContentDate = document.querySelectorAll('.visual').dataset;
//prev btn
function prevCount(){
    console.log('prev')
    count--;
    console.log(count);
    visualContainer.style.transform = `translateX(-${count * visualContentWidth}px)`;
    console.log(visualContentDate);
    
}
//next btn
function nextCount(){
    console.log('next')
    count++;
    console.log(count);
    visualContainer.style.transform = `translateX(-${count*visualContentWidth}px)`;
    console.log(visualContentDate);
}

prevBtn.addEventListener('click',prevCount);
nextBtn.addEventListener('click',nextCount);
