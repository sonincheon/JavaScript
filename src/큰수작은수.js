
let a;
let b;
let c;

a = Number(prompt("정수 첫번쨰자리수 : ",""));
b = Number(prompt("정수 두번쨰자리수 : ",""));
c = Number(prompt("정수 세번쨰자리수 : ",""));

document.write("큰수 :"+Big(a,b,c)+"작은수 :"+Small(a,b,c));

function Big(a,b,c){
    if(a>b, a>c){
        return a;
    }else if(b>a,b>c){
        return b;
    }else if(c>a,c>b){
        return c;
    };
};

function Small(a,b,c){
    if(a<b,a<c){
        return a;
    }else if(b<a,b<c){
        return b;
    }else if(c<a,c<b){
        return c;
    };
};
