$(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });


$(document).ready(function() {

  var validName = false;
  var validEmail = false;
  var validText = false;

  $("form").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var text = $("#text").val();

    if(name == "") {
      $("#name").parent().removeClass("formSucces").addClass("formError");
      validName = false;
    } else {
      $("#name").parent().removeClass("formError").addClass("formSucces");
      validName = true;
    }

    if(email == "") {
      $("#email").removeClass("formSucces").addClass("formError");
      validEmail = false;
    } else {
      $("#email").removeClass("formError").addClass("formSucces");
      validEmail = true;
    }

    if(text == "") {
      $("#text").removeClass("formSucces").addClass("formError");
      validText = false;
    } else {
      $("#text").removeClass("formError").addClass("formSucces");
      validText = true;
    }

    if(validName == true && validEmail == true && validText == true) {
        $("form#formInside").unbind('submit').submit();
    }
  });
});