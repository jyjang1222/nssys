$(function() {
  jQuery.datetimepicker.setLocale('ko');

  jQuery('#datetimepicker').datetimepicker({
  i18n:{
    de:{
    months:[
      'Januar','Februar','März','April',
      'Mai','Juni','Juli','August',
      'September','Oktober','November','Dezember',
    ],
    dayOfWeek:[
      "So.", "Mo", "Di", "Mi", 
      "Do", "Fr", "Sa.",
    ]
    }
  },
  timepicker:false,
  format:'Y.m.d'
  }); //달력

  $('.content:nth-child(3) table input').click(function() {
    var chk = $(this).attr('checked') == 'checked'; //chkOff : false chkOn: true
    // console.log(chk)
    $(this).attr('checked','checked'); //chkOn상태로

    if(chk) {$(this).removeAttr('checked')} //chkOn true면 chkOff 상태로
  });

  $('.btns button').click(function() {
    var idx = $(this).parents('.content').index() + 2;

    // console.log(idx);
    $('.tab_menu li').removeClass('on');
    $('.tab_menu li:nth-child(' + idx + ')').addClass('on');
    $(this).parents('.content').hide();
    $(this).parents('.content').next('.content').show();
  });
}); //ready