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
  });

  $('.select_area').click(function() {
    $(this).children('ul').toggle();
    $(this).children('a').toggleClass('on');
  }); //날짜 박스 클릭

  $('.select_area li').click(function() {
    var date = $(this).text();

    $(this).siblings('li').css('background','none');
    $(this).css('background-color', '#e5e5e5');
    $(this).parent('ul').prev('a').children('.selected').text(date);
    $(this).parent('ul').prev('a').css('color', '#000');
  }); //날짜 옵션 클릭

  $('form table tr:nth-child(1) td>div').click(function() {
    $('form table tr:nth-child(1) td>div').children('input').removeAttr('checked');
    $(this).children('input').attr('checked', 'checked');
  }); //조회기간 체크박스 클릭

  $('form table tr:nth-child(2) td>div').click(function() {
    $('form table tr:nth-child(2) td>div').children('input').removeAttr('checked');
    $(this).children('input').attr('checked', 'checked');
  }); //조회기간 체크박스 클릭

  $('.cash_charge_btn').click(function() {
    openCashChargePop();
  });

  function openCashChargePop() {
    var myWindow = window.open("CashChargePopup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=500,height=640")
  }
}); //ready