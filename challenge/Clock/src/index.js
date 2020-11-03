
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const Week = new Array("일", "월","화","수","목","금","토");

function getTime() {
  const nowTime = new Date();

  const month = nowTime.getMonth()+1;
  const day = nowTime.getDate();
  const minutes = nowTime.getMinutes();
  const hours = nowTime.getHours();
  const seconds = nowTime.getSeconds();
  const dayOfWeek = nowTime.getDay();



  clockTitle.innerText =
  `${month}월 ${day < 10 ? `0${day}` : day}일 ${Week[dayOfWeek]}요일
    \n ${
    hours < 10 ? `0${hours}` : hours}시 ${
    minutes < 10 ? `0${minutes}` : minutes}분 ${
    seconds < 10 ? `0${seconds}` : seconds}초`;
  
}

function init() {
  getTime();
  setInterval(getTime,1000);
}

init();
