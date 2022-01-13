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

  $('.pay_radio input[type="radio"]').click(function() {
    $('.pay_radio input[type="radio"]').removeAttr('checked');
    $(this).attr('checked', 'checked');

    var txt = $(this).next('label').text();

    $('.selected_pay').text(txt);

    if(txt == '신용카드') {
      $('.pay_info').show();
    } 
    else {$('.pay_info').hide();}
    
  }); //라디오 박스 선택시 체크 추가

  $('.charge_price input[type="radio"]').click(function() {
    $('.charge_price input[type="radio"]').removeAttr('checked');
    $(this).attr('checked', 'checked');
  }); //라디오 박스 선택시 체크 초기화

  $('.charge_price select').click(function() {
    $('.charge_price input[type="radio"]').removeAttr('checked');
    $(this).parent().prev().attr('checked', 'checked')
  }); //셀렉트 박스 선택시 체크 초기화

  $('.insert_price input').focus(function() {
    $('.charge_price input[type="radio"]').removeAttr('checked');
    $(this).parent().prev().attr('checked', 'checked')
  }); //금액 직접입력 선택시 체크박스 포커스

  $('.form_inner select[class*=charge_method]').change(function() {
    $('.pay_radio input[type="radio"]').removeAttr('checked');
  }); //셀렉트 박스 선택시 체크 초기화

  $('.gift_card').change(function() {
    var txt= $('.gift_card option:selected').text();
    var idx = $('.gift_card option:selected').index();
    console.log(idx)

    if(idx != 0) {
      $('.selected_pay').text(txt);
    }

    $('.pay_info').hide();
  }); //상품권 결제 선택

  $('.other_pay').change(function() {
    var txt= $('.other_pay option:selected').text();
    var idx = $('.other_pay option:selected').index();
    
    if(idx != 0) {
      $('.selected_pay').text(txt);
    }

    $('.pay_info').hide();
  }); //기타결제 옵션 선택

  $('.modal_wrap:nth-child(2) td').click(function() {
    $('.modal_wrap:nth-child(2) td').removeClass('txt_red');
    $(this).addClass('txt_red');
  }) //결제수단 선택

}); //ready