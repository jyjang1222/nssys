$(function() {
  $('.coin_wrap .coin').click(function() {
    var w = $(window).width();

    //다른 코인메뉴 off
    $(this).parent().siblings().find('.coin_link').removeClass('on');
    $(this).parent().siblings().find('.chevron').removeClass('on');

    //모바일 에서는 메뉴오픈시 코인이미지가 사라짐
    if(w < 768) {
      $(this).parent().siblings().find('img').show();
      $(this).children('img').toggle();
    } else {
      $(this).parent().siblings().find('img').show();
    }
    
    $(this).parent().find('.coin_link').toggleClass('on');
    $(this).parent().find('.chevron').toggleClass('on');
  }); //코인메뉴 열기

  $('#modalBottom .btn_agree').click(function() {
    $('#modalBottom').hide();
  }); //충전 모달

  $('.send_tab_menu li').click(function() {
    var idx = $(this).index() + 1;

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
    $('#modalPop').hide();
    $('#modalPop .modal_wrap').hide();
  }); //계좌생성 약관동의 모달창 닫기

  $('.agree_list a').click(function() {
    var idx = $(this).parents('li').index() + 1;
    // console.log(idx);
    $('#modalPop').show();
    $('#modalPop .modal_wrap:nth-child(' + idx + ')').show();
  }) //약관 모달

  $('.coin_send_wrap .tab_menu li').click(function() {
    var idx = $(this).index() + 1;

    $(this).siblings().removeClass('on');
    $(this).addClass('on');

    $('.coin_send_wrap .table_wrap:nth-child(' + idx + ')').siblings().hide();
    $('.coin_send_wrap .table_wrap:nth-child(' + idx + ')').show();
  });
}) //ready