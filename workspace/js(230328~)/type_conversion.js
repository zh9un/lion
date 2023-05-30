let age = window.prompt("How old are you?");
console.log(typeof age); //결과: string
age += 1; //age = age + 1;
console.log("Happy birthday! You are", age, "years old");
//console.log(`Happy birthday! You are ${age} years old`);

age = Number(age);
//let은 재선언 불가하므로 age만 작성
//타입이 string에서 number로 변환됨
console.log(typeof age); //결과: number

age += 1; 
console.log(`Happy birthday! You are ${age} years old`);