//Array
//인덱스 : 고유번호, 0번부터 시작
let babelion=['A', 'B', 'C', 'D'];
console.log(babelion);

//push : 배열 끝(뒤)에 요소 추가
//pop : 배열 끝(뒤)에 요소 제거, 배열의 끝에 있는 요소만 삭제 가능
babelion.push('홍길동');
console.log(babelion);

babelion.pop('홍길동');
console.log(babelion);

//unshift : 배열 앞에 요소 추가
//shift : 배열 앞에 요소 제거, 앞 제외 특정 요소 삭제 불가능
babelion.unshift('홍길동');
console.log(babelion);

babelion.shift();
console.log(babelion);

//slice(n,m): n부터 (m-1)까지 반환
let Ateam = babelion.slice(0,2);
console.log(Ateam); //A,B

let Bteam = babelion.slice(2,5);
let Bteam2 = babelion.slice(2);
console.log(Bteam);
console.log(Bteam2);


//예제
let A = [33, 33, 54, 98];
console.log(A);






//Object
//키와 값 형태로 이루어짐
//중괄호 사용
let A1 = {kor:33, eng:33, mat:54, sci:98};
console.log(A1);

//접근방법: 대괄호 사용 ex. student["korea"]
//점 연산자에는 띄어쓰기한 key 호출 불가능
