function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

$( "#form" ).submit(function( event ) {
  event.preventDefault();

  function checkValidField(id) {
    var element = $(id);
    if (element.val() < 1) {
      element.parent().addClass("error");
      return false;
    } else {
      if (element.attr('name') === 'email') {
        if (!validateEmail(element.val())) {
          $(element).parent().addClass('invalid');
          return  false
        } else {
          $(element).parent().removeClass('invalid')
        }

      }
      return element.val();
    }
  }

  var name = checkValidField("#name");
  var phone = checkValidField("#phone");
  var email = checkValidField("#email");
  var comments = checkValidField("#comments");

  if (name
    && phone
    && email
    && comments
  ) {
    $("body").addClass('success')
  } else {
    $("body").addClass('error')
  }
});

$(".contacts__field").on('propertychange input', function (e) {
  var valueChanged = false;

  if (e.type=='propertychange') {
    valueChanged = e.originalEvent.propertyName == 'value';
  } else {
    valueChanged = true;
  }

  if (valueChanged) {
    $(e.target).parent().removeClass('error')
    $(e.target).parent().removeClass('invalid')
  }
});

$( "#error" ).click(function() {
  $("body").parent().removeClass('error')
});

function clearFields() {
  $("#email").val('');
  $("#name").val('');
  $("#phone").val('');
  $("#comments").val('');
}

$( "#success" ).click(function() {
  $("body").removeClass('success');
  clearFields()
});

$( "#error" ).click(function() {
  $("body").removeClass('error');
  clearFields()
});

$( ".popup" ).click(function(e) {
  if (e.target.className === 'popup') {
    clearFields()
    $('body').removeClass('success');
    $('body').removeClass('error');
  }
});
