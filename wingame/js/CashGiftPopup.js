$(function() {
  $('a[class*="modal"]').click(function() {
    var a = $(this).attr('class'); //클릭한 요소 클래스명 저장
    var idx = a.slice(5, 6); //모달 인덱스 저장
    console.log(idx);

    $('.modals .modal_wrap:nth-child(' + idx + ')').show();
  }); //모달창

  $('.modal_box .close_btn').click(function() {
    $(this).parents('.modal_wrap').hide();
  }); //모달창 닫기

  $('.modal_box .cash_btn').click(function() {
    $(this).parents('.modal_wrap').hide();
  }); //모달창 닫기

  $('.modal_wrap:nth-child(2) td').click(function() {
    $('.modal_wrap:nth-child(2) td').removeClass('txt_red');
    $(this).addClass('txt_red');
  }) //결제수단 선택

  $('.pop1').hover(function() {
    $('.pop_wrap:nth-child(1)').show();
  },function() {
    $('.pop_wrap:nth-child(1)').hide();
  }); //팝업 호버

  $('.pop2').hover(function() {
    $('.pop_wrap:nth-child(2)').show();
  },function() {
    $('.pop_wrap:nth-child(2)').hide();
  }); //팝업 호버
}); //ready