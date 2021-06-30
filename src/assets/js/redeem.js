$('#redemption_form').on('submit', function(e) {
  e.preventDefault()
  
  setActivateAccountLoading(true)

  var inputs = $('#redemption_form :input')
  var data = {}
  inputs.each(function() {
    data[this.name] = $(this).val().trim()
  })
  
  // check redeem code
  if (data['redemption_code'].length === 0) {
    showErrorModalWithMsg('Redemption code should not be empty')
    setActivateAccountLoading(false)
    return
  }
  // check password
  if (data.password.length < 8 || data.confirmPassword.length < 8) {
    showErrorModalWithMsg('Password should be minimum 8 characters')
    setActivateAccountLoading(false)
    return
  }
  if (data.password !== data.confirmPassword) {
    showErrorModalWithMsg('Passwords do not match')
    setActivateAccountLoading(false)
    return
  }

  // sign up user
  // production: 'https://cooby-taroko.herokuapp.com'
  // staging: 'https://api-staging.cooby.co'
  var apiURL = 'https://api-staging.cooby.co'

  $.ajax({
    type: 'POST',
    url: apiURL + '/users',
    contentType: 'application/json',
    crossDomain: true,
    data: JSON.stringify(data),
    success: function(res) {
      var authToken = 'Bearer ' + res.token
      $.ajax({
        type: 'PUT',
        url: apiURL + '/info',
        crossDomain: true,
        contentType: 'application/json',
        data: JSON.stringify({
          lang: 'en',
          name: data.name,
          company: data.company,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', authToken)
        },
        success: function(res) {
          setActivateAccountLoading(false)
          window.location = window.location.protocol + '/redeem-success.html?email=' + data.email
        },
        error: function(res) {
          setActivateAccountLoading(false)
          showErrorModalWithMsg(res)
        }
      })
    },
    error: function(res) {
      console.log(res)
      setActivateAccountLoading(false)
      showErrorModalWithMsg(res.responseJSON.error_message)
    }
  })

})

function showErrorModalWithMsg(msg) {
  $('#errorModal').modal('show')
  $('#errorModal #errorMsg').text(msg)
}

function setActivateAccountLoading(bool) {
  if (bool) {
    $('#redemption_form #redeem_button').prop('disabled', true)
    $('#redemption_form #redeem_button span').show()
    $('#redemption_form #redeem_button p').hide()
  } else {
    $('#redemption_form #redeem_button').prop('disabled', false)
    $('#redemption_form #redeem_button span').hide()
    $('#redemption_form #redeem_button p').show()
  }
}