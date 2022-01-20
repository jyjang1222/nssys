$(function() {
  $('.pager span').click(function() {
    $(this).siblings('span').removeClass('on');
    $(this).addClass('on');

    var a = $('.pager span:first-of-type').hasClass('on');
    var b = $('.pager span:last-of-type').hasClass('on');

    if(a == true) $('.pager a[class*=Prev]').hide();
    else $('.pager a[class*=Prev]').css('display', 'flex');
    
    if(b == true) $('.pager a[class*=Next]').hide();
    else $('.pager a[class*=Next]').css('display', 'flex');
    
  }) //페이저 클릭

  $('#checkAll').change(function() {
    var checked = $(this).prop('checked'); //checked 문자열 참조(true, false)
    // console.log(checked)
    $('input[name=msg]').prop('checked', checked); //name값이 policy인 input boolean값에 따라 체크 변경
    // console.log($('input#privacyChk').prop('checked'));

    $(this).attr('checked', 'checked'); //커스텀input 스타일 적용
    $('input[name=msg]').attr('checked', 'checked');
    if(!checked) {
      $(this).removeAttr('checked');
      $('input[name=msg]').removeAttr('checked');
    } //커스텀input 스타일 적용
  }); //전체 메세지 체크박스 클릭

  $('input[name=msg]').change(function() {
    var checked = $(this).prop('checked'); // checked 문자열 참조(true, false)
    // console.log(checked);
    $(this).prop('checked', checked);

    $(this).attr('checked', 'checked'); //커스텀input 스타일 적용
    if(!checked) {$(this).removeAttr('checked')} //chkOn true면 chkOff 상태로
    // var a = $('#checkMsg2').prop('checked');
    // console.log(a);
  }); //단일 메세지 체크박스 클릭

  
  $('.write_msg_btn').click(function() { openSendMsgPopup() });
  $('.receive_msg tr td:nth-child(3) a').click(function() {
    openReceiveMsgPopup()
  })
  $('.send_msg tr td:nth-child(3) a').click(function() {
    openSentMsgPopup()
  })
  $('.save_msg tr td:nth-child(3) a').click(function() {
    openSaveMsgPopup()
  })

  function openSendMsgPopup() {
    var myWindow = window.open("SendMsgPopup.html", "_blank", "top=200, left=500, width=644, height=611")
  } // 메세지 쓰기

  function openReceiveMsgPopup() {
    var myWindow = window.open("ReceiveMsgPopup.html", "_blank", "top=200, left=500, width=644, height=641")
  } // 받은메시지 확인

  function openSentMsgPopup() {
    var myWindow = window.open("SentMsgPopup.html", "_blank", "top=200, left=500, width=644, height=641")
  } //보낸메시지
  
  function openSaveMsgPopup() {
    var myWindow = window.open("SaveMsgPopup.html", "_blank", "top=200, left=500, width=644, height=641")
  } //보관메시지
}); //ready