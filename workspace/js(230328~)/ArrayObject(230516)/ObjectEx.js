//1-1
let rapClass = { //객체:rapClass
    sc : {birth:950808, age:29},
    ww : {birth:960717, age:28},
}
let vocalClass = {
    sk : {birth:980116, age:26},
    dk : {birth:970218, age:27},
}
let danceClass = {
    dn : {birth:990211, age:25},
    hs : {birth:960615, age:28},
}

//1-2
console.log("원우의 생년월일 : ", rapClass.ww.birth); //.은 연결고리
//1-3
console.log("도겸의 나이 : ", vocalClass.dk.age);




//2-1
let vernonBirth=window.prompt('버논의 생년월일을 입력하세요 ex.230101');
let vernonAge=window.prompt('버논의 나이를 입력하세요 ex.20');
console.log(typeof vernonAge); //number타입
vernonAge = parseInt(vernonAge); //string타입 -> number타입
console.log(typeof vernonAge); //string타입

//rapClass.vn = {birth: vernonBirth, age:vernonAge};
rapClass.vn = {};
rapClass.vn['birth']=vernonBirth;
rapClass.vn['age']=vernonAge;
/*다른방법
rapClass.vn = {birth: '990218', age: 26}; //rapClass.vn.age의 type은 number
*/

//2-2
console.log("버논의 생년월일과 나이 : ", rapClass.vn.birth + ', ' + rapClass.vn.age);
