$('#signup_form').submit(function(e){
  e.preventDefault();
  //do some verification
  $.post({
    url: "https://api.cooby.co/leads",
    data: $(this).serialize(),
    success: function(data)
    {
      console.log("success");
      $('#modalSignupHorizontal').modal('hide');
      $('#scheduleModal').modal('show');
    }
  });
});

$('#scheduleModalBtn').click(function(e) {
  $('#scheduleModal').modal('hide');
});

$(document).ready(function() {

  if(window.location.href.indexOf('#signupModal') != -1) {
    $('#modalSignupHorizontal').modal('show');
  }

});


// (function(){
//   $('#modalSignupHorizontal').modal('show');
// })();
