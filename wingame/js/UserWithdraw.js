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

  $('input[type=checkbox]').change(function() {
    var checked = $(this).prop('checked'); //checked 문자열 참조(true, false)
    console.log(checked);
    $(this).prop('checked', checked); //chkOn상태로

    $(this).attr('checked', 'checked'); //커스텀input 스타일 적용
    if(!checked) {$(this).removeAttr('checked')} //커스텀input 스타일 적용
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