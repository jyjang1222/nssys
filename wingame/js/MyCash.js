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

  $('.select_area li').click(function() {
    // var checked = $(this).prop('checked');

    $('input[name=date]').prop('checked', false);
    $(this).parents('.select_area').siblings('input[name=date]').prop('checked', true);
    // var a = $(this).parents('.select_area').siblings('input[name=date]').prop('checked');
    // var b = $('input#month').prop('checked');
    // var c = $('input#today').prop('checked');
    // var d = $('input#weekend').prop('checked');
    // console.log('날짜선택 체크:'+a);
    // console.log('1개월 선택:'+b)
    // console.log('오늘 선택:'+c)
    // console.log('1주일 선택:'+d)
  });

  // $('input[name=date]').change(function() {
  //   var checked = $(this).prop('checked');
  //   // console.log(checked);
  //   var a = $('input#selectDate').prop('checked');
  //   console.log(a);
  // });

  function openCashChargePop() {
    var myWindow = window.open("CashChargePopup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=500,height=640")
  }
}); //ready