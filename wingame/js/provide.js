$(function() {
  $('#chkAll').change(function() {
    var checked = $(this).prop('checked'); //checked 문자열 참조(true, false)
    // console.log(checked)
    $('input[name=policy]').prop('checked', checked); //name값이 policy인 input boolean값에 따라 체크 변경
    // console.log($('input#privacyChk').prop('checked'));

    $(this).attr('checked', 'checked'); //커스텀input 스타일 적용
    $('input[name=policy]').attr('checked', 'checked');
    if(!checked) {
      $(this).removeAttr('checked');
      $('.input_area input').removeAttr('checked');
    } //커스텀input 스타일 적용
    // var a = $('#privacyChk').prop('checked');
    // console.log(a);
  });

  $('input[name=policy]').change(function() {
    var checked = $(this).prop('checked'); // checked 문자열 참조(true, false)
    // console.log(checked);
    $(this).prop('checked', checked);

    $(this).attr('checked', 'checked'); //커스텀input 스타일 적용
    if(!checked) {$(this).removeAttr('checked')} //chkOn true면 chkOff 상태로
  });

  $('.agree_btn').click(function() {
    var chk1 = $('input#policyChk').prop('checked');
    var chk2 = $('input#privacyChk').prop('checked');

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