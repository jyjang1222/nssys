$(function() {
  $('.content_wrap:first-of-type .select_area').click(function() {
    $(this).children('.opt_list').toggle();
    $(this).children('.select_box').toggleClass('on');
    
  }); //문의내용 셀렉트 박스 클릭시 이벤트

  $('.content_wrap:first-of-type .opt_list li a').click(function() {
    var opt_txt;
    
    opt_txt = $(this).text();
    //console.log(opt_txt);

    $(this).parents('.opt_list').prev('.select_box').children('.selected_opt').text(opt_txt);
    $(this).parent('li').siblings().children('a').css('background-color', '#FFF');
    $(this).css('background-color', '#E5E5E5');
  }); //문의내용 셀렉트 박스 옵션 클릭시 이벤트


  $('.content_wrap:nth-of-type(2) .select_area').click(function() {
    $(this).children('.opt_list').toggle();
    $(this).children('.select_box').toggleClass('on');
    
  }); //문의내용 셀렉트 박스 클릭시 이벤트

  $('.content_wrap:nth-of-type(2) .opt_list li a').click(function() {
    var opt_txt;
    
    opt_txt = $(this).text();
    console.log(opt_txt);

    $('.content_wrap:nth-of-type(2) .input_area:nth-of-type(2) input').val(opt_txt);
    $(this).parents('.opt_list').prev('.select_box').children('.selected_opt').text(opt_txt);
    $(this).parent('li').siblings().children('a').css('background-color', '#FFF');
    $(this).css('background-color', '#E5E5E5');
  }); //문의내용 셀렉트 박스 옵션 클릭시 이벤트

  $("#input_file").on('change',function(){
    var fileName = $("#input_file").val();
    $(".upload_name").val(fileName);
  }); //파일업로드

  $('input[type=checkbox]').change(function() {
    var checked = $(this).prop('checked'); //checked 문자열 참조(true, false)
    // console.log(checked);
    $(this).prop('checked', checked); //체크박스에 boolean값 넣음
    var idx = $(this).parents('.content_wrap').index();

    $(this).attr('checked', 'checked'); //커스텀input 스타일 적용
    if(!checked) {$(this).removeAttr('checked')}
    if(idx == 1) {$('.info_agree_cont').toggle();}
  }); //개인정보 수집동의


  $('.emailPop_btn').click(function() {
    var emailAgreeChk = $('#chkEmailAgree').prop('checked');

    if(emailAgreeChk) { openEmailPop(); }
    else { alert('이메일 답변 동의를 먼저 선택하세요.') }
  }); //이메일수정

  $('.phonePop_btn').click(function() {
    var smsAgreeChk = $('#chkSmsAgree').prop('checked');

    if(smsAgreeChk) { openPhonePop(); }
    else { alert('SMS 수신 동의를 먼저 선택하세요.') }
  }); //폰인증하기

  function openEmailPop() {
    var myWindow = window.open("InquiryEmailCertPopup.html", "_blank", "toolbar=yes, scrollbars=no, resizable=no, top=200, left=500, width=800, height=424");
  }
  function openPhonePop() {
    var myWindow = window.open("InquiryPhoneCertPopup.html", "_blank", "toolbar=yes, scrollbars=no, resizable=no, top=200, left=500, width=800, height=552");
  }
}) //ready