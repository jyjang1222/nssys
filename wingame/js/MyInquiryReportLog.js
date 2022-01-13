$(function() {
  $('.pager span').click(function() {
    $(this).siblings('span').removeClass('on');
    $(this).addClass('on');

    var a = $('.pager span:first-of-type').hasClass('on');
    var b = $('.pager span:last-of-type').hasClass('on');

    if(a == true) {
      $('.pager a[class*=Prev]').hide();
    } 
    else {
      $('.pager a[class*=Prev]').css('display', 'flex');
    }
    if(b == true) {
      $('.pager a[class*=Next]').hide();
    } 
    else {
      $('.pager a[class*=Next]').css('display', 'flex');
    }
  })
  $('.form_inner .input_area').click(function() {
    $(this).parent().find('input').removeAttr('checked');
    $(this).children('input').attr('checked', 'checked');
  })
}); //ready