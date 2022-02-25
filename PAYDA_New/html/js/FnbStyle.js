var url = $(location).attr('href'); //url가져옴
// console.log(url);

switch(true) {
  case url.includes("SimplePay"):
    $('#fnb li:nth-child(1)').addClass('on');
    break;
    case url.includes("charge"):
    $('#fnb li:nth-child(1)').addClass('on');
    break;
    case url.includes("SendMoney"):
    $('#fnb li:nth-child(1)').addClass('on');
    break;
    case url.includes("ReceiveQrcode"):
    $('#fnb li:nth-child(1)').addClass('on');
    break;
    case url.includes("SimplePayHistory"):
    $('#fnb li:nth-child(1)').addClass('on');
    break;
  case url.includes("CoinWallet"):
    $('#fnb li:nth-child(2)').addClass('on');
    break;
};