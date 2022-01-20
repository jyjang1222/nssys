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
    var txt = $(this).next('label').text();

    $('.selected_pay').text(txt);

    if(txt == '신용카드') {
      $('.pay_info').show();
    } 
    else {$('.pay_info').hide();}
    
  }); //충전수단 선택시

  $('input[name=chargeMethod]').change(function() {
    $('select#giftCard option').prop('selected', false);
    $('select#otherPay option').prop('selected', false);
  });

  $('.gift_card').change(function() {
    var txt= $('.gift_card option:selected').text();
    var idx = $('.gift_card option:selected').index();
    
    $('input[name=chargeMethod]').prop('checked',false); //충전수단 라디오버튼체크 초기화
    $('select#otherPay option').prop('selected', false); //기타결제 방법 옵션 초기화

    if(idx != 0) {
      $('.selected_pay').text(txt);
    }

    $('.pay_info').hide();
  }); //상품권 결제 선택

  $('.other_pay').change(function() {
    var txt= $('.other_pay option:selected').text();
    var idx = $('.other_pay option:selected').index();
    
    $('input[name=chargeMethod]').prop('checked',false); //충전수단 라디오버튼체크 초기화
    $('select#giftCard option').prop('selected', false); //상품권 선택 옵션 초기화

    if(idx != 0) {
      $('.selected_pay').text(txt);
    }

    $('.pay_info').hide();
  }); //기타결제 옵션 선택

  $('select#priceSelect').change(function() {
    $(this).parents('.charge_price').children('input[type=radio]').prop('checked', true);
    $('input#insertPrice').val(''); //직접입력 값 초기화
    // console.log($('input#rdPriceSelect').prop('checked'));
    console.log($('select#priceSelect option:selected').val());

    var price = $('select#priceSelect option:selected').val();

    $('.selected_price').text(price);
  }); //충전금액 셀렉트박스

  $('input#insertPrice').focus(function() {
    $('select#priceSelect option').prop('selected', false); //충전금액 셀렉트박스 초기화
    $(this).parents('.charge_price').children('input[type=radio]').prop('checked', true);
    // console.log($('input#rdPriceSelect').prop('checked'));
  }); //충전금액 직접입력

  $('input#insertPrice').change(function() {
    var price = $('input#insertPrice').val();

    $('.selected_price').text(price);
  });

  $('.modal_wrap:nth-child(2) td').click(function() {
    $('.modal_wrap:nth-child(2) td').removeClass('txt_red');
    $(this).addClass('txt_red');
  }) //결제수단 선택

}); //ready