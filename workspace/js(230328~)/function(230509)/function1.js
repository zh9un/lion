//변수할당해서 함수 호출하기
let name='정지현';
function hi(){
    console.log(`안녕 내이름은 ${name}이야`);
}

hi(); //함수호출

/* 다른 방법
function hi(name){
    console.log(`내이름은 ${name}이야`)
    //return name;
}

const name = hi('지현');
*/


function add(x, y){
    result = x+y;
    console.log(result);
}

let a=1;
let b=2;

add(a,b); //인자 a,b



//Q5.
function year(age) {
    result=2023 -(age-1); //2024-age
    console.log(`쌤의 출생연도는${result}다`);
}

let age=40;
year(age);


//Q6 
function max(num1,num2){
    if(num1>num2){
        console.log(num1);
    }
    else{
        console.log(num2);
    }
}

let num1=3;
let num2=5;
max(num1,num2);


//Q7
function solution(num1, num2){
    result = num1/num2;
    console.log(parseInt(result)); //parseInt(): 실수 -> 정수
}

let c=1;
let d=2;

solution(c,d); 


//Q8.
function sum(n){
    let count=0; //n이하의 양수를 모두 더한 값을 대합할 변수
    for(i=1; i<=5; i+=1){
        count += i;
    }
    console.log(count);
}

let n=5;
sum(n);

//Q9.
function sum2(n2){
    let count1=0;
        for(i=2; i<=5; i+=2){
          count1 += i;
        }
    console.log(count1);
}

let n2=5;
sum2(n2);

//Q10.
function gugudan(){
    for(let i=5; i<=7; i+=1){
          for(j=1; j<=9; j+=1){
            console.log(`${i}*${j}=${i*j}`);
          }
          console.log('--------------');
        }
    }

gugudan();

