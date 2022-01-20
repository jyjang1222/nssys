$(function() {

  $('input[type=radio]').change(function() {
    var checked = $(this).prop('checked'); //checked 문자열 참조(true, false);
    // console.log($('input#selectMsg').prop('checked'));
    $(this).prop('checked', checked); //boolean값에따라 input 체크상태 변경


    $('input[type=radio]').removeAttr('checked')
    if(checked) {$(this).attr('checked','checked');} //커스텀input 스타일 적용

    var idx = $(this).parent('.input_area').index();
    if(idx != 1) {
      $('input[type=checkbox]').removeAttr('checked');
      $('input[type=checkbox]').prop('checked', false);
    } //'모두받기'나 '모두받지않기' 선택시 선택한 메세지 체크 제거

    // console.log($('input#selectMsg').prop('checked'));
    // console.log($('input#gostopMsg').prop('checked'));
  }); //라디오 체크박스 클릭

  $('input[type=checkbox]').change(function() {
    var checked = $(this).prop('checked'); // checked 문자열 참조(true, false)
    // console.log(checked);
    $(this).prop('checked', checked);

    $(this).attr('checked', 'checked'); //커스텀input 스타일 적용
    if(!checked) {$(this).removeAttr('checked')} //chkOn true면 chkOff 상태로

    // 선택된메시지 클릭시 나머지 스타일 제거
    $('input[type=radio]').removeAttr('checked','checked');
    $('input#selectMsg').attr('checked','checked');
    ////
    $('input[type=radio]').prop('checked', false);
    $('input#selectMsg').prop('checked', checked);

    // console.log($('input#selectMsg').prop('checked'));
  }); //선택된 메시지만 받기 2뎁스 체크박스 리스트 클릭

}); //ready