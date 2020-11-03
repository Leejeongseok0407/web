
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const nowTime = new Date();

  const month = nowTime.getMonth()+1;
  const day = nowTime.getDate();
  const minutes = nowTime.getMinutes();
  const hours = nowTime.getHours();
  const seconds = nowTime.getSeconds();
  const dayOfWeek = nowTime.getDay();



  clockTitle.innerText =
  `${hours < 10 ? `0${hours}` : hours}: ${
    minutes < 10 ? `0${minutes}` : minutes}: ${
    seconds < 10 ? `0${seconds}` : seconds}`;
  
}

function init() {
  getTime();
  setInterval(getTime,1000);
}

init();
