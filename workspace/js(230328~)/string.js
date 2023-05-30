let userName = "Jung jihyun";

//length
console.log(userName.length); //11, 띄어쓰기(공백)도 포함됨

//charAt()
//string:문자열, char:문자
console.log(userName.charAt(0)); //J
console.log(userName.charAt(3)); //g
console.log(userName.charAt(4)); //(공백)

//indexOf
console.log(userName.indexOf("e"));
console.log(userName.indexOf("u"));
console.log(userName.indexOf(" "));
console.log(userName.lastIndexOf("e"));
console.log(userName.lastIndexOf("u"));

//toUppercase() & toLowerCase()
console.log(userName.toUpperCase()); //전부 대문자로 출력 (JUNG JIHYUN)
console.log(userName.toLowerCase()); //전부 소문자로 출력 (jung jihyun)


//slice()
let fullName = "eunseo kim";
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "));
//0~공백전까지
console.log(firstName);

lastNam = fullName.slice(fullName.indexOf(" ")+1);
//K(=공백+1)부터 끝(,뒤가 생략됨)까지
console.log(lastName);
