$('#modalBottom .modal_close').click(function() {
  $('#modalBottom').hide();
  $('#modalBottom .simple_pay').css({'transform':'translateY(100%)'});
  $('#modalBottom .simple_pay').hide();
}); //화면아래위치한 모달 닫기

$('.simple_pay_log li').click(function() {
  var log = $(this).attr('class');
  var LogNum = log.slice(3,);
  // console.log(LogNum);
  
  /* 
    LogType1 : 송금
    LogType2 : 충전
    LogType3 : 입금
    LogType4 : 계좌송금(수수료1000원)
    LogType5 : 충전입금대기
    LogType6 : 구매 성공
    LogType7 : 구매 취소
    LogType8 : 구매 실패
  */
  
  LogType(LogNum);
}); //상세내역 유형별로 모달 오픈

function LogType(n) {
  $('#modalBottom').show();
  $('#modalBottom .simple_pay.log' + n).show();
  $('#modalBottom .simple_pay').stop().animate({transform:'translateY(-100%)'}, 300);
}