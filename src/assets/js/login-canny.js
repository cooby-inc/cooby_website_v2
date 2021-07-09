
$(function() {
  switchToLogInForm(true)
})

$('#canny-login-form').on('submit', function(e) {
  e.preventDefault()
  console.log('submit')
})

$('#canny-signup-form').on('submit', function(e) {
  e.preventDefault()
  console.log('submit')
})

$('#canny-login-form #canny-signup-switch').on('click', function() {
  switchToLogInForm(false)
})

$('#canny-signup-form #canny-login-switch').on('click', function() {
  switchToLogInForm(true)
})

function switchToLogInForm(isLogIn) {
  if (isLogIn) {
    $('#canny-login-form').show()
    $('#canny-signup-form').hide()
  } else {
    $('#canny-login-form').hide()
    $('#canny-signup-form').show()
  }
}
