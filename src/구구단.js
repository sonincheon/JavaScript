let dan;
let num;
let rst=[];


for(let e = 1; e<10;e++){
    for(let a = 1; a<10;a++){
        dan=e;
        num=a;
        rst=Number(e*a);
        document.getElementById(dan+"dan").innertext(dan+"x"+num +"="+rst+"<br>");
    }
}