var url = $(location).attr('href'); //url가져옴
console.log(url);

switch(true) {
  case url.includes("index"):
    $('#fnb li:nth-child(1)').addClass('on');
    break;
  case url.includes("CoinWallet"):
    $('#fnb li:nth-child(2)').addClass('on');
    break;
  default:
    console.log('default');
};