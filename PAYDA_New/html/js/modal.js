$('#modalBottom .modal_close').click(function() {
  $('#modalBottom').hide();
  $('#modalBottom .history').css({'transform':'translateY(100%)'});
  $('#modalBottom .history').hide();
}); //화면아래위치한 모달 닫기

$('.trade_log_wrap li').click(function() {
  var idx = $(this).index() + 1;
  // console.log(idx);
  $('#modalBottom').show();
  $('#modalBottom .history:nth-child(' + idx + ')').show();
  $('#modalBottom .history').stop().animate({transform:'translateY(-100%)'}, 300);
}); //내역 상세보기 모달창 오픈