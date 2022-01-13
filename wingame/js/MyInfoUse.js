$(function() {
  $('.tab_menu li').click(function() {
    $('.tab_menu li').removeClass('on');
    $(this).addClass('on');

    var idx = $(this).index() + 1;
    // console.log(idx);

    $('.tab_content').removeClass('on');
    $('.tab_content:nth-child(' + idx + ')').addClass('on');
  }); //탭메뉴 클릭
  
  $('.modal_open_btn').click(function() {
    $('#provideModal').css('display', 'block');
    $('body').addClass('modal_open');
  });

  $(window).click(function(event) {
    if($(event.target).is("#provideModal")) {
      $('#provideModal').css('display', 'none');
      $('body').removeClass('modal_open');
    };
  }); //모달창 배경클릭시 창 닫기

  $('.modal_wrap button').click(function() {
    $('#provideModal').hide();
    $('body').removeClass('modal_open');
  }); //모달창 닫기
}); //ready