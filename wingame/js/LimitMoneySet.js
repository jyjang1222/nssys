$(function() {
  var limitMoney = $('.set_limit').text(); //현재 손실한도 저장 변수
  var money = limitMoney.substring(0,2); //뒤에 0,000빼고 추출후 저장

  $('.pointer p').click(function() {
    var point = $(this).index() * 25;
    limitMoney = $(this).text();
    money = limitMoney.substring(0,2);

    $('.guage').css('width', point+'%');
    $(this).nextAll().removeClass('on');
    $(this).prevAll().addClass('on');
    $(this).addClass('on');

    $('.set_limit').text(money+'0,000');
  }); //포인터 클릭

  $('.limit_change_btn').click(function() {
    var a = confirm('변경 하시겠습니까?');
    
    if(a) {
      $('.current_limit').text(money+'0,000');
      alert('한도를 변경했습니다.');
    }
  }); //한도변경 버튼 클릭

  $('.limitSet_btn').click(function() {
    openPopCerti();
  })

  function openPopCerti() {
    var myWindow = window.open("CertiPopup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=600,height=520");
  }; //본인인증
}); //ready