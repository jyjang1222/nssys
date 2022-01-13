$(function() {
  $('.certi').click(function() {
    $(this).toggleClass('on');

    var chk = $(this).find('input').attr('checked') == 'checked'; //chkOff : false chkOn: true
    // console.log(chk)
    $(this).find('input').attr('checked','checked'); //chkOn상태로

    if(chk) {$(this).find('input').removeAttr('checked')} //chkOn true면 chkOff 상태로
  });

  $('.certi_btn').click(function() {
    var certi = ['phone'];
    var idx = $('.certi.on').index();
   
    switch (certi[idx]) {
      case 'phone': alert('폰인증모듈 오픈')//인증모듈
        break;
      default:alert('인증수단을 선택하세요.');
    }
  })
}); //ready