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

  $('.method_set_btn').click(function() {
    var chargeMethod = $('.charge_method').text();
    var set = confirm('자주쓰는 결제수단을 [' + chargeMethod + ']으로 설정하시겠습니까?');

    if(set) alert('자주쓰는 결제수단이 [' + chargeMethod + ']으로 설정되었습니다.');
  }); //자주쓰는 결제수단 등록
}); //ready