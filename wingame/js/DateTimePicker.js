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
  timepicker:true,
  format:'Y.m.d H:i'
  }); //달력
}); //ready