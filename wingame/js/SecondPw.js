$(function() {
  $('.second_pw_btn').click(function() {
    openPopCerti();
  })

  function openPopCerti() {
    var myWindow = window.open("CertiPopup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=700,width=600,height=520");
  };
}); //ready