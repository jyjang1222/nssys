$(function(){
    var faqTabmenu = $('.faq_tab li a'); //FAQ탭메뉴 요소 가져옴

    $('.faq_tab li a').click(function() {
      $('.faq_tab li a').not(this).removeClass('on');
      $(this).addClass('on'); //FAQ탭메뉴 요소 클릭시 클래스명on 추가
      $('.search_total').show();
      $('.pager').css('display','flex');
      $('.no_data').hide();
      $('.no_data').nextAll().show();

      var faq_idx = $(this).parent().index() + 1; //FAQ메뉴 인덱스 가져옴

      if(faqTabmenu.hasClass('on') == true) {
        $('.search_info h3').hide();
        $('.board_tab_menu').hide();
        $('.board_tab_menu:nth-child(' + faq_idx + ')').show();

        //게시판탭메뉴 디폴트로 초기화
        $('.board_tab_depth1 li a').css('border', '1px solid #DDD')
        $('.board_tab_depth1 li:first-child a').css('border', '1px solid #FFC600')
        $('.board_tab_depth2 ul').hide();
        $('.board_tab_depth2 ul:first-child').css('display','flex');

        $('.board_tab_depth2 li a').css({'color':'#000', 'text-decoration': 'none'})
        $('.board_tab_depth2 li:first-child() a').css({'color':'#FFC600', 'text-decoration': 'underline'});
      } //FAQ탭메뉴 요소에 클래스명에 on이 있을시 이벤트
    }) //FAQ탭메뉴 클릭시 이벤트

    $('.board_tab_depth1 li a').click(function() {
      var board_depth1_idx = $(this).parent().index() + 1;
      // console.log(depth1_idx);
      $('.board_tab_depth1 li a').not(this).css('border', '1px solid #ddd');
      $(this).css('border', '1px solid #FFC600')
      $('.board_tab_depth2 ul').hide();
      $('.board_tab_depth2 ul:nth-child(' + board_depth1_idx + ')').css('display','flex');

      //1뎁스 클릭시 2뎁스 디폴트로 초기화
      $('.board_tab_depth2 li a').css({'color':'#000', 'text-decoration': 'none'})
      $('.board_tab_depth2 li:first-child() a').css({'color':'#FFC600', 'text-decoration': 'underline'});
    }) //게시판탭메뉴 1뎁스 클릭시 이벤트

    $('.board_tab_depth2 li a').click(function() {
      $('.board_tab_depth2 li a').css({'color':'#000', 'text-decoration': 'none'})
      $(this).css({'color':'#FFC600', 'text-decoration': 'underline'});
    }) //게시판 탭메뉴 2뎁스 클릭시 이벤트

    $('.search_board li').click(function() {
      $('.search_board li').not(this).find('p').hide();
      $('.search_board li').not(this).removeClass('on');
      $(this).children('p').toggle();
      $(this).toggleClass('on');
    }) //게시판글 클릭 아코디언 이벤트

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

      $('.search_btn').click(function() {
        var searchName = $('.search input').val();
        // console.log(n);

        $('.faq_tab li a').removeClass('on');
        $('.board_tab_menu').hide();
        $('.no_data').show();
        $('.no_data').nextAll().hide();
        $('.search_info h3').hide();
        $('.search_result').show();
        $('.search_total').show();

        $('.search_name').text("\'"+ searchName + "\'")
      }); //검색버튼 클릭
}) //ready
