/* 
JS로 라디오 버튼 체크 해제
참고 - https://keichee.tistory.com/452
*/
function remove(){
    let saleType = document.getElementsByTagName('input');
    for(let i=0; i<saleType.length; i++){
        if(saleType[i].getAttribute('type') == 'radio'){
            saleType[i].checked = false;
        }
    }
}