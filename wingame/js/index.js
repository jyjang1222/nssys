$(function() {
    $('.pcgamelist-container .pcgamelist-tabmenu').on('click', function (e) {
      var $t = $(e.target);
      $t.parent().children('li').removeClass('on');
      $t.addClass('on');

      var shows = 0;
      var category = $t.data("category");
      $('.pcgamelist-container .pcgamelist li').hide();

      if (category == 'all') {
          shows = $('.pcgamelist-container .pcgamelist li').not('.placeholder').show().length;
      } else {
          shows = $('.pcgamelist-container .pcgamelist').find('.' + category).show().length;
      }

      var count = shows % 4;
      if (count > 0) {
          $('.pcgamelist-container .pcgamelist .placeholder:lt(' + (4 - count) + ')').show();
      }
    });   

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    }); //swiper

    $('.find_id_btn').click(function() {
      openFindIdPop();
    });
    $('.find_pw_btn').click(function() {
      openFindPwPop();
    });
    $('.cash_charge_btn').click(function() {
      openCashChargePop();
    });

    function openFindIdPop() {
      var myWindow = window.open("CertiPopup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=600,height=550");
    }
    function openFindPwPop() {
      var myWindow = window.open("FindPwPopup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=600,height=312");
    }
    function openCashChargePop() {
      var myWindow = window.open("CashChargePopup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=500,height=640")
    }
}); //ready