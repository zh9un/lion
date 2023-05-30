
let plots = [10,20,30,40,50];
for(let i = 0; i<5; i++){ 
    let size = plots[i];
	let stars = "";
    while(size>0){
		stars += "*";
        size--;
        }
	console.log(stars);
}

for(let i = 1; i <= 4; i+=3){
    for(let j=2; j<=8; j+=3) {
        console.log(i, j);
    }
}


//let email = window.prompt("이메일 주소를 입력하세요");
//let result = email.slice(0, email.indexOf("@"));
//console.log(result);


let array = [1,2,3,4,5];
for(let i = 0; i<array.length; i++){ 
    let num = array[i];
    console.log(num);
    }


let sum = 0;
for(let i = 0; i <= 100; i++){
     if(i%7==0){
        sum += i;
     }
}
console.log(sum);





/* let com = Math.floor(Math.random() * 9) + 1;
let count = 0;

while (true) {
    let c = window.prompt("컴퓨터가 생각하고 있는 숫자를 맞춰보세요");
    count ++;
    c = Number(c);
    if (c < com) {
        console.log("UP");
    } else if (c > com) {
       console.log("DOWN");
    } else if (c==com){
        console.log("정답! 입력 횟수 : " + count);
        break;
    }
}
*/

let students = [
    {name: "짱구", grd:4.5, per:99},
    {name: "짱아", grd:3.5, per:65},
    {name: "흰둥이", grd:2.5, per:40},
]

for (let i = 0; i < students.length; i++) {
    let student = students[i];
  
    if (student.grd >= 3.0 && student.per >= 90) {
      console.log(student.name);
    }
  }





  const products = [
    { name: "아이폰", price: 3000 },
    { name: "아이패드", price: 4000 },
    { name: "에어팟", price: 1000 },
    { name: "에어맥스", price: 2000 },
    { name: "맥북", price: 5000 }
  ];
  
  let highPriced = products[0];
  
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > highPriced.price) {
      highPriced = products[i];
    }
  }

  console.log(highPriced.name)





  let games = {
    "5월 12일" : { team: "키움", score: 1, doosanScore: 4 },
    "5월 13일" : {team: "삼성", score: 2, doosanScore: 3 },
    "5월 14일" : { team: "롯데", score: 3, doosanScore: 2 },
    "5월 16일" : { team: "LG", score: 4, doosanScore: 1 }
  };

  let date = window.prompt("날짜를 입력하세요. (5/12~5/16)", '5월 12일');
  if (date=='5월 15일'){
    alert('경기가 없는 날입니다.');
    location.reload();
  }
  
  else {
    let game = games[date]; //입력된 날짜에 해당하는 경기 정보를 가져옴
    let team = game.team;
    let score = game.score;
    let doosanScore = game.doosanScore;
    if (score > doosanScore){
        console.log(`${date} 두산은 ${doosanScore} : ${score}(으)로 ${team}한테 졌다.`);
    }
    else {
        console.log(`${date} 두산은 ${doosanScore} : ${score}(으)로 ${team}한테 이겼다.`);
    }
  }