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

  $('.check_all').click(function() {
    var chk = $(this).attr('checked') == 'checked';

    $(this).attr('checked', 'checked');
    $('table input').attr('checked', 'checekd');

    if(chk) {
      $(this).removeAttr('checked');
      $('table input').removeAttr('checked', 'checekd');
    }
  }); //모두체크 체크버튼 클릭

  
  $('table tbody input').click(function() {
    var chk = $(this).attr('checked') == 'checked';

    $(this).attr('checked', 'checked');

    if(chk) { $(this).removeAttr('checked'); }
  }); //메세지 체크박스 버튼 클릭

  
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