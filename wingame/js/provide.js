$(function() {
  $('.check_all input').click(function() {
    var chk = $(this).attr('checked') == 'checked'; //chkOff : false chkOn: true
    // console.log(chk)
    $(this).attr('checked','checked'); //chkOn상태로
    $('.input_area input').attr('checked', 'checked'); //다른 input 모두 chkOn상태로

    //chkOn true면 실행
    if(chk) {
      $(this).removeAttr('checked');
      $('.input_area input').removeAttr('checked');
    } //모든input chkOn이면 chkOff상태로
  });

  $('.check_box input').click(function() {
    var chk = $(this).attr('checked') == 'checked'; //chkOff : false chkOn: true
    // console.log(chk)
    $(this).attr('checked','checked'); //chkOn상태로

    if(chk) {$(this).removeAttr('checked')} //chkOn true면 chkOff 상태로
  });

  $('.agree_btn').click(function() {
    var chk1 = $('.input_area .check_box:first-child input').attr('checked') == 'checked';
    var chk2 = $('.input_area .check_box:nth-child(2) input').attr('checked') == 'checked';

    if(chk1 && chk2) {
      openPopCerti()
    }
    else {
      alert('필수 약관 동의 체크가 필요합니다.');
    }
  })

  function openPopCerti() {
    var myWindow = window.open("JoinCertiPopup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=600,height=438");
  }
}); //ready