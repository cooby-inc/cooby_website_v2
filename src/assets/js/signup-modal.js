$('#signup_form').submit(function(e){
  e.preventDefault();
  //do some verification
  console.log(data)

  // $.post({
  //   url: "https://api.cooby.co/leads",
  //   data: $(this).serialize(),
  //   success: function(data)
  //   {
  //     console.log("success");
  //     $('#modalSignupHorizontal').modal('hide');
  //     // $('#scheduleModal').modal('show');
  //     $('#downloadAndScheduleModal').modal('show');
  //   }
  // });
});

$('#scheduleModalBtn').click(function(e) {
  $('#scheduleModal').modal('hide');

});


$('#downloadAndScheduleModalBtn').click(function(e) {
  $('#downloadAndScheduleModal').modal('hide');
});


$(document).ready(function() {

  if(window.location.href.indexOf('#signupModal') != -1) {
    $('#modalSignupHorizontal').modal('show');
  }

});


// (function(){
//   $('#modalSignupHorizontal').modal('show');
// })();
