$(function() {
  $('.input_area_wrap .input_area').click(function() {
    $(this).parent().find('input').removeAttr('checked');
    $(this).children('input').attr('checked', 'checked');
  });

  $('.check_area input').click(function() {
    var chk = $(this).attr('checked') == 'checked'; //chkOff : false chkOn: true
    // console.log(chk)
    $(this).attr('checked','checked'); //chkOn상태로

    if(chk) {$(this).removeAttr('checked')} //chkOn true면 chkOff 상태로
  });

  $('.certi_btn').click(function() {
    openPopCerti();
  });
  $('.phone_certi_btn').click(function() {
    var smsAgreeChk = $('#chkSmsAgree').attr('checked') == 'checked';

    if(smsAgreeChk) { 
      openPopCerti();
    }
    else { 
      alert('SMS 수신 동의를 먼저 선택하세요.')
    }
  });

  $('.email_certi_btn').click(function() {
    var mailAgreeChk = $('#chkMailAgree').attr('checked') == 'checked';

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