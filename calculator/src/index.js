// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body"),
  numButton = body.querySelectorAll(".numButton"),
  calButton = body.querySelectorAll(".calculateButton"),
  resultText = body.querySelector(".reault"),
  resetButton = body.querySelector(".resetButton"),
  expression = body.querySelector(".expression");

//reault가 비어 있으면 할당
//비지 않으면 num에 할당
let num,
  result = 0,
  num2 = 0,
  lastPutNum = false,
  isreset = true,
  savedOP = null;

//초기화 함수
//c를 누를 경우 할당
function reset(event) {
  lastPutNum = false;
  isreset = true;
  num = 0;
  num2 = 0;
  result = 0;
  savedOP = null;
  resultText.innerText = 0;
}

//계산하는 함수
//=을 누르거나 다른 연산자 클릭시 호출
function calculate() {
  let expressionString = String(` ${num} ${savedOP} ${num2} = ${result}`),
    expressiong;
  result += 0;
  if (isreset !== true) {
    expressiong = String(` ${result} ${savedOP} ${num}`);
    expressionString = String(` ${result} ${savedOP} ${num} = `);
  } else {
    result = 0;
    isreset = false;
    expressiong = String(` ${num2} ${savedOP} ${num}`);
    expressionString = String(` ${num2} ${savedOP} ${num} = `);
  }
  result = eval(expressiong);
  expressionString += result;
  expression.innerText = expressionString;
  resultText.innerText = result;
  num2 = num;

  
}


//연산자 할당
function setOpertor(event) {
  op = event.target.innerHTML;
  lastPutNum = false;
  if (savedOP !== null || op === "=") {
    calculate();
    
    if(op === "="){
      savedOP = null;
    }
    else{
      savedOP = op;
    }
    return;
  }
  savedOP = op;
  if (isreset === true) {
    num2 = num;
  }
  console.log(`num ${num} num2 ${num2} result${result} savedOP ${savedOP}`);
}

//구분하는 함수
//버튼이 숫자 버튼인지 함수 버튼인지 구분
function setinputButton(event) {
  inputnum = Number(event.target.innerHTML);
  if (lastPutNum === false) {
    num = inputnum;
    lastPutNum = true;
  } else {
    num = num * 10 + inputnum;
  }
  resultText.innerText = num;
  console.log(`num ${num} num2 ${num2} result${result} savedOP ${savedOP}`);
}

function init() {
  numButton.forEach(function (value) {
    value.addEventListener("click", setinputButton);
  });
  calButton.forEach(function (value) {
    value.addEventListener("click", setOpertor);
  });
  resetButton.addEventListener("click", reset);
}

init();
