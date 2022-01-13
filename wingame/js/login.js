$(function() {
  $('.find_id').click(function() {
    openFindIdPopup();
  });
  $('.find_pw').click(function() {
    openFindPwPopup();
  });

  function openFindIdPopup() {
    var myWindow = window.open("CertiPopup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=600,height=518")
  }
  function openFindPwPopup() {
    var myWindow = window.open("FindPwPopup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=600,height=312")
  }
});