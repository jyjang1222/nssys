$(function() {
  $('.pager span').click(function() {
    $(this).siblings('span').removeClass('on');
    $(this).addClass('on');

    var a = $('.pager span:first-of-type').hasClass('on');
    var b = $('.pager span:last-of-type').hasClass('on');

    if(a == true) $('.pager a[class*=Prev]').hide();
    else $('.pager a[class*=Prev]').css('display', 'flex');

    if(b == true) $('.pager a[class*=Next]').hide();
    else $('.pager a[class*=Next]').css('display', 'flex');
  }); //하단 페이저 클릭

  $('input[name=day]').change(function() {
    var checked = $(this).prop('checked'); //checked 문자열 참조(true, false)
    $(this).prop('checked', checked);
    // console.log($("input#day20").prop("checked"));

    $('input[name=day]').removeAttr('checked');
    if(checked) {$(this).attr('checked', 'checked');} //커스텀input 스타일 적용
  }); //나이 라디오박스 체크
}); //ready