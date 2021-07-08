$('#signup_form').submit(function(e){
  e.preventDefault();
  var inputData = {}
  $('#signup_form :input').each(function(input) {
    inputData[this.name] = $(this).val().trim()
  })
  var outputData = new FormData()
  outputData.append('name', inputData.firstName + ' ' + inputData.lastName)
  outputData.append('company', inputData.company)
  outputData.append('email', inputData.email)
  outputData.append('title', inputData.title)
  outputData.append('motivation', inputData.motivation)
  outputData.append('phone', inputData.countryCode + ' ' + inputData.phone)

  //do some verification
  $.post({
    url: "https://api.cooby.co/leads",
    data: outputData,
    processData: false,
    contentType: false,
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
