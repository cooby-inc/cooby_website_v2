$('#signup_form').submit(function(e){
  e.preventDefault();
  var inputData = {}
  $('#signup_form :input').each(function(input) {
    inputData[this.name] = $(this).val().trim()
  })
  var outputData = {
    name: inputData.firstName + ' ' + inputData.lastName,
    company: inputData.company,
    email: inputData.email,
    title: inputData.title,
    motivation: inputData.motivation,
    phone: inputData.countryCode + ' ' + inputData.phone
  }

  //do some verification
  $.post({
    url: "https://api.cooby.co/leads",
    data: JSON.stringify(outputData),
    success: function(data)
    {
      console.log("success");
      $('#modalSignupHorizontal').modal('hide');
      $('#scheduleModal').modal('show');
      // $('#downloadAndScheduleModal').modal('show');
    }
  });
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

  $.getJSON(window.location.origin + '/country-codes.json', function(json) {
    var container = $('#country-code-selector')
    for(var i=0; i<json.length-1; i++) {
      var option = $('<option>', {value: json[i].dial_code}).text(json[i].name + ' ' + json[i].dial_code)
      container.append(option)
    }
  })

});


// (function(){
//   $('#modalSignupHorizontal').modal('show');
// })();
