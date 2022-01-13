$(function() {
  $('.check_box input').click(function() {
    var chk = $(this).attr('checked') == 'checked'; //chkOff : false chkOn: true
    // console.log(chk)
    $(this).attr('checked','checked'); //chkOn상태로

    if(chk) {$(this).removeAttr('checked')} //chkOn true면 chkOff 상태로
  });

  $('.email_btn').click(function() {
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

}); //ready