var url = $(location).attr('pathname'); //url가져옴
var res = url.slice(6, -5); //html문서이름 으로 자르기
// console.log(res);

switch(res) {
  case "index":
    $('#fnb li:nth-child(1)').addClass('on');
    break;
  case "CoinWallet":
    $('#fnb li:nth-child(2)').addClass('on');
    break;
};