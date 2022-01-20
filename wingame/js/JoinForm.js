$(function() {
  $('.check_box input').change(function() {
    var checked = $(this).prop('checked'); // checked 문자열 참조(true, false)
    // console.log(checked);
    
    $(this).attr('checked','checked'); //커스텀input 스타일 적용
    if(!checked) {$(this).removeAttr('checked')} //chkOn true면 chkOff 상태로
  });

  $('.email_btn').click(function() {
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

}); //ready