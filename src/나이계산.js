const currentYear = 2023;   //상수
let birthYear;
let age;

birthYear = prompt("태어난 연도를 입력 하세요(YYYY): ",""); // 뒤에는 디폴트값넣어줌
age = currentYear - Number(birthYear);
document.write(currentYear + "년 현재<br>" )
document.write(birthYear +"년에 태어난사람의 나이는" + age + "살 입니다.");

