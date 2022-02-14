$(function() {
  $('#modal_charge .btn_agree').click(function() {
    $('#modal_charge').hide();
  }); //충전 모달

  $('.send_money_wrap .tab_menu li').click(function() {
    var idx = $(this).index() + 1;
    console.log(idx);

    $(this).siblings().removeClass('on')
    $(this).addClass('on');

    $('.send_money_wrap .tab_content').hide();
    $('.send_money_wrap .tab_content:nth-child(' + idx + ')').show();
  }); //송금 탭메뉴

  $('.date_select label').click(function() {})
}) //ready