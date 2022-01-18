  $(document).ready(function () {
    $('.js-tab').on('click', 'a', function (e) {
      var $this = $(this);
      var $tabNav = $this.closest('.js-tab');
      var thisHref = $(this).attr('href');
      var $thisContents = thisHref !== '#' ? $(thisHref) : undefined;

      $tabNav.find('a').each(function () {
        var href = $(this).attr('href');
        if (href !== '#') $($(this).attr('href')).hide();
      });
      if ($thisContents) $thisContents.show();

      $this.closest('.tab').addClass('selected').siblings().removeClass('selected');

      e.preventDefault();
    });
  });

  /*   $(document).ready(function () {
      $('#bt-1').focus();
    });
   */
  $(document).ready(function () {
    $("#bt-1").focus(function () {
      $("#bt-1").css({
        "color": "aliceblue"
      });
    });
    $("#bt-1").focus(function () {
      $("#bt-2").css({
        "color": "#666"
      });
    });
    $("#bt-1").focus(function () {
      $("#bt-3").css({
        "color": "#666"
      });
    });
    $("#bt-2").focus(function () {
      $("#bt-2").css({
        "color": "aliceblue"
      });
    })
    $("#bt-2").focus(function () {
      $("#bt-1").css({
        "color": "#666"
      });
    });
    $("#bt-2").focus(function () {
      $("#bt-3").css({
        "color": "#666"
      });
    });
    $("#bt-3").focus(function () {
      $("#bt-3").css({
        "color": "aliceblue"
      });
    });
    $("#bt-3").focus(function () {
      $("#bt-1").css({
        "color": "#666"
      });
    });
    $("#bt-3").focus(function () {
      $("#bt-2").css({
        "color": "#666"
      });
    });
  });