$(function() {  
  var modal = $('#myModal');
  var btn = $('#myBtn');
  var close = $('.close');

  $(btn).click(function() {
    modal.show();
  })
  $(close).click(function() {
    modal.hide();
  })
  $(window).click(function(event) {
    // var target = event.target;
    // console.log(target);
      if(event.target == modal.get(0)) {
        modal.hide();
      }
    }
  )
}); //ready
