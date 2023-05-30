let num=prompt('당신의 핸드폰 용량을 입력하세요. ex. 64, 128, 256, 512','64');
num = parseInt(num); //숫자로 변환

console.log('귀하의 핸드폰 용량은 ' + num +'GB');

while (num>=0){
    let rnum = Math.random() * 29; 
    let rnum2 = 1 + Math.floor(rnum); //1~30
    num = num - rnum2;

    let result = new Array('사진 저장', '동영상 저장', '어플 설치'); 

    
    if (num >=20){
        console.log(randomItem(result) + '(' + rnum2 + 'GB)(으)로 인한 핸드폰의 남은 용량은 ' + num + 'GB');
    }

    else if(20>num && num>=0){
        console.log(randomItem(result) + '(' + rnum2 + 'GB)(으)로 인한 핸드폰의 남은 용량은 ' + num + 'GB');
        console.log('저장 공간 업그레이드가 필요합니다.');
    }

    else {
        console.log(randomItem(result) + '(' + rnum2 + 'GB) 실패, 저장 공간이 부족합니다.');
    }
        

    function randomItem(a) {
        return a[Math.floor(Math.random()*a.length)]
    }
}

