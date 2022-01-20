$(function() {
  $('input[name=age]').change(function() {
    var checked = $(this).prop('checked'); //checked 문자열 참조(true, false)
    $(this).prop('checked', checked);
    // console.log($("input#showAge").prop("checked"));

    
    $('input[name=age]').removeAttr('checked');
    if(checked) {$(this).attr('checked', 'checked');} //커스텀input 스타일 적용
  }); //나이 라디오박스 체크

  $('input[name=gender]').change(function() {
    var checked = $(this).prop('checked'); //checked 문자열 참조(true, false)
    $(this).prop('checked', checked);
    // console.log($("input#showGender").prop("checked"));

    
    $('input[name=gender]').removeAttr('checked');
    if(checked) {$(this).attr('checked', 'checked');} //커스텀input 스타일 적용
  }); //나이 라디오박스 체크


  $('input[type=checkbox]').change(function() {
    var checked = $(this).prop('checked'); //checked 문자열 참조(true, false);
    console.log(checked)
    $(this).prop('checked', checked); //boolean값에따라 input 체크상태 변경

    $(this).attr('checked','checked'); //커스텀input 스타일 적용
    if(!checked) {$(this).removeAttr('checked')} 
  }); //수신동의 체크박스

  $('.certi_btn').click(function() {
    openPopCerti();
  });
  $('.phone_certi_btn').click(function() {
    var smsAgreeChk = $('#chkSmsAgree').prop('checked');

    if(smsAgreeChk) { 
      openPopCerti();
    }
    else { 
      alert('SMS 수신 동의를 먼저 선택하세요.')
    }
  });

  $('.email_certi_btn').click(function() {
    var mailAgreeChk = $('#chkMailAgree').prop('checked');

    if(mailAgreeChk) { 
      openEmailPop();
    }
    else { 
      alert('메일 수신 동의를 먼저 선택하세요.')
    }  
  });

  function openEmailPop() {
    var myWindow = window.open("JoinEmailCertPopup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=800,height=424");
  }

  function openPopCerti() {
    var myWindow = window.open("CertiPopup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=600,height=520");
  };
}); //ready