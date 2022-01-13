$(function() {
  $('.prev_policy .prev_policy_btn').click(function() {
    $(this).toggleClass('on');
    $('.policy_date_list').toggle();
  }); //지난정책 버튼 클릭

  $('.policy_date_list li').click(function() {
    $(this).siblings().removeClass('selected_date');
    $(this).addClass('selected_date');

    var date = $(this).text();

    $('.current_date').text(date);
  }); //지난정책 날짜 리스트 클릭

  $('.pop1_btn').click(function() {
    openCashPop();
  });
  $('.pop2_btn').click(function() {
    openCashPop2();
  });

  function openCashPop() {
    var myWindow = window.open("CashPop1.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=600,height=620");
  }
  function openCashPop2() {
    var myWindow = window.open("CashPop2.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=600,height=620");
  }
}); //ready