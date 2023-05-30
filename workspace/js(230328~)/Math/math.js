//Math.ceil()
//주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 정수를 반환
//Math.ceil(4); 4
//Math.ceil(0.95); 1
//Math.ceil(7.004); 8
//Math.ceil(-0.95); 0

//Math.min()
//주어진 숫자들 중 가장 작은 값을 반환
let x1 = 10, y = -20;
let z = Math.min(x1,y);
console.log(z); //-20

//Matn.max()
//입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환
//Math.max(-10,-20); //-10

//Math.round()
//입력값을 반올림한 수와 가장 가까운 정수 값을 반환
//Math.round(20.49) //20
//Math.round(20.5) //21
//Math.round(-20.5) //-20
//Math.round(-20.51) //-21

//Math.floor()
//주어진 숫자나 같거나 작은 정수 중에서 가장 큰 수를 반환
//Math.floor(45.05); //45
//Math.floor(45.95); //45
//Math.floor(-45.05); //-46
//Math.floor(-45.95); //-46

//Math.random()
//0이상 1미만의 구간에서 근사적으로 균일한 부동소숫점 의사 난수를 반환
//Math.random()*6 //0<= x < 6
//Math.floor(Math.random()*6) //0<= 정수 x < 6
let x;

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1; //1 <= 정수x <7

    document.getElementById("xlabel").innerHTML = "x: " + x;
}


//더하기,빼기,초기화 버튼을 누르면 해당 기능을 수행하는 프로그램
let count=0;

document.getElementById("increaseBtn").onclick = function(){
    count += 1; 

    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1; 

    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count = 0; 

    document.getElementById("countLabel").innerHTML = count;
}
