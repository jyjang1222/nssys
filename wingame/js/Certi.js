$(function() {
  $('input[name=certi]').change(function() {
    $('.content label').removeClass('on');
    $(this).parents('label').addClass('on'); //커스텀input 스타일 적용

    $(this).parents('.certi').siblings('label').children('input[name=certi]').prop('checked', false); //선택한 수단외의 다른수단 checkbox false
    $(this).prop('checked', checked); //선택한 수단 

    var checked = $('#phoneCerti').prop('checked'); //checked 문자열 참조(true, false)
    // console.log(checked);
    if(!checked) {$(this).parents('label').removeClass('on');}
  }); //인증수단 선택

  $('.certi_btn').click(function() {
    var certi = ['phone'];
    var idx = $('.certi.on').index();
   
    switch (certi[idx]) {
      case 'phone': alert('폰인증모듈 오픈')//인증모듈
        break;
      default:alert('인증수단을 선택하세요.');
    }
  }); //선택한 인증모듈 오픈
}); //ready