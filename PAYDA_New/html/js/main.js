$(function() {
  $('#modal_charge .btn_agree').click(function() {
    $('#modal_charge').hide();
  }); //충전 모달

  $('.send_tab_menu li').click(function() {
    var idx = $(this).index() + 1;
    console.log(idx);

    $(this).siblings().removeClass('on')
    $(this).addClass('on');

    $('.send_money_wrap .tab_content').hide();
    $('.send_money_wrap .tab_content:nth-child(' + idx + ')').show();
  }); //송금 탭메뉴

  $('.history_wrap .history_type li').click(function() {
    $(this).siblings().removeClass('on');
    $(this).addClass('on');
  }); //내역 거래유형탭 선택

  $('.btn_modal_close').click(function() {
    $('#modal').hide();
    $('#modal .modal_wrap').hide();
  }); //계좌생성 약관동의 모달창 닫기

  $('.agree_list a').click(function() {
    var idx = $(this).parents('li').index() + 1;
    // console.log(idx);
    $('#modal').show();
    $('#modal .modal_wrap:nth-child(' + idx + ')').show();
  })
}) //ready