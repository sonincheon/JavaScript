// 3개의 햄버거와 2개의 음료의 가격을 입력 받아 제일 싼 세트 메뉴의 가격 구하기(50원)
//css구현

// let menu=[Number(prompt("버거값 1:")),Number(prompt("버거값 2:")),Number(prompt("버거값 3:")),Number(prompt("음료값 1:")),Number(prompt("음료값 2:"))];
// let minb = menu[0];
// let mind = menu[3];

// for(let i = 0;i>menu.length;i++){
//     if(i<3 && minb>menu[i]) minb=menu[i]
//     if( i>2 &&mind >menu[i]) mind=menu[i]
// }

// let sum = mind+minb-50;

// document.getElementById("value").innerText =sum+"원";

function getPrice(){
    let menu =[];
    for(let i = 0; i<5; i++){
        menu[i]=Number(document.getElementById("menu"+(i+1)).value);
    }
    let minb = menu[0];
    let mind = menu[3];

    for(let i = 0;i>menu.length;i++){
        if(i<3 && minb>menu[i]) minb=menu[i]
        if( i>2 &&mind >menu[i]) mind=menu[i]
    }

    let sum = mind+minb-50;
    document.getElementById("value").innerText=(sum)+"원";
}
