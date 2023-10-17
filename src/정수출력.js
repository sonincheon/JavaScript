// n개의 정수를 입력 받아 n * n 출력

let a = Number(prompt("정수 : ",""))

for(let i=1;i<=(a*a);i++){
    document.write(`<span class=number>${i}<span>`)
    if(i%a == 0)
        document.write("<br>");
}