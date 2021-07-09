$(function() {
  if (window.location.pathname !== '/login-canny.html' && window.location.pathname !== '/login-canny') {
    return
  }

  switchToLogInForm(true)

  $('#canny-login-form #canny-signup-switch').on('click', function() {
    switchToLogInForm(false)
  })
  $('#canny-signup-form #canny-login-switch').on('click', function() {
    switchToLogInForm(true)
  })

  var apiURL = 'https://api-staging.cooby.co'
  var loginForm = $('#canny-login-form')
  loginForm.on('submit', function(e) {
    e.preventDefault()
    setLoading(true, loginForm)

    var data = generateUserData(loginForm)
    var isLegalPassword = checkPassword(data, false)
    if (!isLegalPassword) { 
      setLoading(false, loginForm)
      return
    }

    $.ajax({
      type: 'POST',
      url: apiURL + '/login',
      contentType: 'application/json',
      crossDomain: true,
      data: JSON.stringify(data),
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Cooby-App-Platform', 'Canny')
      },
      success: function(res) {
        console.log('success')
        setLoading(false, loginForm)
        showModalWithMsg(true, 'redirecting to Canny...')
      },
      error: function(res) {
        console.log('failed')
        setLoading(false, loginForm)
        showModalWithMsg(false, res.responseJSON.error_message)
      }
    })
  })
  var signupForm = $('#canny-signup-form')
  signupForm.on('submit', function(e) {
    e.preventDefault()
    setLoading(true, signupForm)

    var data = generateUserData(signupForm)
    var isLegalPassword = checkPassword(data, true)
    if (!isLegalPassword) {
      setLoading(false, signupForm)
      return
    }

    // create user api
    // $.ajax({
    //   type: 'PUT',
    //   url: 
    // })
  })


  // functions
  function checkPassword(data, hasConfirmPassword) {
    if (data.password.length < 8 || (hasConfirmPassword && data.confirmPassword.length < 8)) {
      showModalWithMsg(false, 'Password should be minimum 8 characters')
      return false
    }
    if (hasConfirmPassword && (data.password !== data.confirmPassword)) {
      showModalWithMsg(false, 'Passwords do not match')
      return false
    }
    return true
  }

  function generateUserData(form) {
    var result = {}
    form.serializeArray().forEach(function(input) {
      result[input.name] = input.value
    })
    return result
  }

  function setLoading(bool, target) {
    if (bool) {
      target.find('.canny-cta-button').prop('disabled', true)
      target.find('.canny-cta-button span').show()
      target.find('.canny-cta-button p').hide()
    } else {
      target.find('.canny-cta-button').prop('disabled', false)
      target.find('.canny-cta-button span').hide()
      target.find('.canny-cta-button p').show()
    }
  }

  function switchToLogInForm(isLogIn) {
    if (isLogIn) {
      $('#canny-login-form').show()
      $('#canny-signup-form').hide()
    } else {
      $('#canny-login-form').hide()
      $('#canny-signup-form').show()
    }
  }

  function showModalWithMsg(isSuccess, msg) {
    if (isSuccess) {
      $('#popupModal button').hide()
      $('#popupModal .btn').hide()
    } else {
      $('#popupModal button').show()
      $('#popupModal .btn').show()
    }
    $('#popupModal').modal('show')
    $('#popupModal #modalExampleTitle').text(isSuccess ? 'Success' : 'Error')
    $('#popupModal #popupMsg').text(msg)
  }
  
  // function getQueryParameterByName(name) {
  //   var pairStrings = window.location.search.slice(1).split('&');
  //   var pairs = pairStrings.map(function(pair) {
  //     return pair.split('=');
  //   });
  //   return pairs.reduce(function(value, pair) {
  //     if (value) return value;
  //     return pair[0] === name ? decodeURIComponent(pair[1]) : null;
  //   }, null);
  // }
  function getRedirectURL(ssoToken) {
    // var redirectURL = getQueryParameterByName('redirect')
    var redirectURL = 'https://cooby.co/login-canny.html'
    // var companyID = getQueryParameterByName('companyID')
    var companyID = '60e6bb7514f82a74118c91da'
    if (redirectURL.indexOf('https://') !== 0 || !companyID) {
      return null;
    }
    return 'https://canny.io/api/redirects/sso?companyID=' + companyID + '&ssoToken=' + ssoToken + '&redirect=' + redirectURL;
  }
})

// var redirectURL = getRedirectURL(ssoToken);
// if (redirectURL) {
//   window.location.assign(redirectURL);
// }