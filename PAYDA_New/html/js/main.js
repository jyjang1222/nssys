$(function() {
  $('div[class*="tab-style"] li').click(function() {
    var idx = $(this).index() + 1;

    $(this).siblings().removeClass('on')
    $(this).addClass('on');

    $('.tab_cont').hide();
    $('.tab_cont:nth-child(' + idx + ')').show();

    //송금 페이지 최근송금탭 스타일 적용
    var url = $(location).attr('href');
    var chk = $(this).attr('class').includes('chk');
    var chk2 = url.includes('SendMoney');
    // console.log(chk);

    if(chk && chk2) {
      $('.header').addClass('shadow_btm');
      $('.tab-style').css('border-bottom', 'none');
    } else if(chk2) {
      $('.header').removeClass('shadow_btm');
      $('.tab-style').css('border-bottom', '1px solid #d0d0d0');
    }
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

    $('#modalBottom').addClass('on');
    $('#modalBottom .modal:nth-child(' + idx + ')').show();
    $('#modalBottom .modal').stop().animate({transform:'translateY(-100%)'}, 300);
    $('body').css('overflow-y: ', 'hidden');
  }); //선물&구매하기 모달창

  $('#modalBottom .modal_close').click(function() {
    $('#modalBottom').removeClass('on');
    $('#modalBottom .modal').css({'transform':'translateY(100%)'});
    $('#modalBottom .modal').hide();
    $('body').css('overflow-y: ', 'auto');
  }); //화면아래위치한 모달 닫기

  $(window).on('resize', function() {
    var chk = $('#modalBottom').attr('class') == 'on';

    if(chk) {
      $('.modal').css('transform', 'translateY(-100%)');
    }
  }); //모달창 아래 고정

  $('.coupon_history_wrap .btn_detail').click(function() {
    var log = $(this).parents('li').attr('class');
    var LogNum = log.slice(-1,);
    // console.log(LogNum);
    
    /* 
      LogType1 : 본인구매
      LogType2 : 선물구매
    */
    
    CouponLogType(LogNum);
  }); //쿠폰내역 상세보기

  function CouponLogType(n) {
    $('#modalBottom').addClass('on');
    $('#modalBottom .coupon_shop.log' + n).show();
    $('#modalBottom .coupon_shop').stop().animate({transform:'translateY(-100%)'}, 300);
  }
}); //ready