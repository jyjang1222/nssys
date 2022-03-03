$(function() {
  $('div[class*="tab-style"] li').click(function() {
    var idx = $(this).index() + 1;

    $(this).siblings().removeClass('on')
    $(this).addClass('on');

    $('.tab_cont').hide();
    $('.tab_cont:nth-child(' + idx + ')').show();
  }); //탭메뉴

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

  $('.coin_send_wrap .tab_menu li').click(function() {
    var idx = $(this).index() + 1;

    $(this).siblings().removeClass('on');
    $(this).addClass('on');

    $('.coin_send_wrap .table_wrap:nth-child(' + idx + ')').siblings().hide();
    $('.coin_send_wrap .table_wrap:nth-child(' + idx + ')').show();
  }); //코인보내기 탭메뉴

  $('.coin_list li').click(function() {
    $('#modalPop').show();
    $('#modalPop .modal_wrap').show();
  }); //코인 생성중 모달창

  $('.product_detail .btns a').click(function() {
    var idx = $(this).index() + 1;

    $('#modalBottom').show();
    $('#modalBottom .modal:nth-child(' + idx + ')').show();
    $('#modalBottom .modal').stop().animate({transform:'translateY(-100%)'}, 300);
  }); //선물&구매하기 모달창

  $('#modalBottom .modal_close').click(function() {
    $('#modalBottom').hide();
    $('#modalBottom .modal').css({'transform':'translateY(100%)'});
    $('#modalBottom .modal').hide();
  }); //화면아래위치한 모달 닫기
}); //ready