$(function() {
  $('.config>.input_area').click(function() {
    $('.config>.input_area').children('input').removeAttr('checked');
    $(this).children('input').attr('checked', 'checked');
    $(this).siblings().removeClass('on');
    $(this).addClass('on');

    if($(this).index() != 1) {
      $('.selected_msg input').removeAttr('checked');
    } //모두받기나 모두받지않기 선택시 선택된 메세지만 받기의 체크 모두 제거
  });

  $('.selected_msg input').click(function() {
    var chk = $(this).attr('checked') == 'checked'; //선택전엔 false 클릭후엔 true
    // console.log(chk)
    $(this).attr('checked','checked'); //선택한 메세지에 체크

    if(chk) {
      $(this).removeAttr('checked')
    } //선택되어있으면 체크 제거
  });
}); //ready