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

// (function(){
//   $('#modalSignupHorizontal').modal('show');
// })();
