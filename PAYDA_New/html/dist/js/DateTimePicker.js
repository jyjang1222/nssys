$(function() {
  jQuery.datetimepicker.setLocale('ko');

  jQuery('#datetimepicker1, #datetimepicker2').datetimepicker({
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
  // format:'Y.m.d H:i'
  format:'Y.m.d'
  }); //달력
}); //ready