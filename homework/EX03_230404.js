//1. if문을 사용해 코드 작성
/*
짜장면이 true일 경우: 오늘 식단은 짜장면입니다.
짜장면이 false일 경우: 오늘 식단은 짜장면이 아닙니다.
*/
let jajangmyeon = true;

if(jajangmyeon /* ==true */) {
    console.log("오늘 식단은 짜장면입니다.");
}
//if(!jajangmyeon) => jajangmyeon = false

else {
    console.log("오늘 식단은 짜장면이 아닙니다.");
}



//2.for문 사용
/*
1 2
1 4
1 6
3 2
3 4
3 6
*/
for(let i = 1; i <= 3; i+=2){
    for(let j=2; j<=6; j+=2) {
        console.log(i, j);
    }
}



/*
3.다음 if문과 똑같이 출력되는 switch문 코드 작성
let weather='sunny';
if(weather=='windy'){
    console.log('오늘은 바람이 많이 분다');
}
else if(weather=='rainy'){
    console.log('오늘은 비가 온다.');
}
else if(weather=='sunny'){
    console.log('오늘은 날씨가 좋다');
}
else{
    console.log('오늘의 날씨는 어떤가요?');
}
*/
let weather = 'windy';

switch(weather){
    case 'windy':
        console.log('오늘은 바람이 많이 분다.');
        break;
    case 'rainy':
        console.log('오늘은 비가 온다');
        break;
    case 'sunny':
        console.log('오늘은 날씨가 좋다.');
        break;
    default:
        console.log('오늘의 날씨는 어떤가요?');        
}


/*
4. A라는 가게는 아래의 물건을 판다. window.prompt()를 이용하여
prompt창에 가게에서 파는 물건을 입력할 경우 물건의 가격이,
팔지 않는 물건을 입력할 경우에는 팔지 않는다는 문구가 출력되도록 코드 작성
cola: 2000원
beer: 4000원
milk: 3000원
coffee: 1000원
예시: 콜라는 2000원입니다. / (입력한 물건)은 팔지 않습니다.

let A = window.prompt('사고 싶은 물건을 입력하세요 (cola는 2000원, beer은 4000원, milk는 3000원, coffee는 1000원)');
switch(A){
    case 'cola':
        console.log(A,'는 2000원입니다.'); 
        break;
    case 'beer':
        console.log(A,'는 4000원입니다.');
        break;    
    case 'milk':
        console.log(A,'는 3000원입니다.');
        break;
    case 'coffee':
        console.log(A,'는 1000원입니다.');
        break;
    default:
        console.log(A, '는 팔지 않습니다.');        
}
*/

let A = window.prompt('사고 싶은 물건을 입력하세요 (cola는 2000원, beer은 4000원, milk는 3000원, coffee는 1000원)');
switch(A){
    case 'cola':
        price=2000;
    case 'beer':
        price=4000;
    case 'milk':
        price=3000;
    case 'coffee':
        price=1000;
    console.log(`${A}는 ${price}원입니다`);
    break;
    default:
        console.log(`${A}는 팔지 않습니다.`);        
}

//위에 코드가 약간 잘못됨....추후에 알려쥬ㅜ신대.....
