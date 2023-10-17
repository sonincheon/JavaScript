// 시간 정보(시간과 분)을 입력 받아 45분 일찎 설정 하는 문제
// 시간 출력 구문을 템플릿 문자열을 사용해서 출력하기 `${}`

let hour = Number(prompt("시간 : ",""));
let min = Number(prompt("분 : ",""));

let a= (hour*60)+min-45;
let b;
if(a < 45){
    b =a+(24*60);
};
let Bhour = parseInt(b/60);
let BMin = b%60;

document.write(`알람시간은 ${Bhour}시 ${BMin}분 입니다.`);
