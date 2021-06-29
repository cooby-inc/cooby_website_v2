$('#redemption_form').on('submit', function(e) {
  e.preventDefault()
  
  var inputs = $('#redemption_form :input')
  var data = {}
  inputs.each(function() {
    data[this.name] = $(this).val().trim()
  })
  console.log(data)

  // check password
  if (data.password.length < 8 || data.confirmPassword.length < 8) {
    showErrorModalWithMsg('Password should be minimum 8 characters')
    return
  }
  if (data.password !== data.confirmPassword) {
    showErrorModalWithMsg('Passwords do not match')
    return
  }
  
})

function showErrorModalWithMsg(msg) {
  $('#errorModal').modal('show')
  $('#errorModal #errorMsg').text(msg)
}