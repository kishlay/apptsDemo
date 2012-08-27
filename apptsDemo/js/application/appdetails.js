console.log("This is from appdetails.js");

utils.getAppointmentDetails(); // Utils is located on apps.js
var signup = false;
$('#reg').live("click",function(event) {
console.log("This is sign up or cancel call");
    event.preventDefault(); // Stops jQuery mobile from reloading the index page.
    event.stopImmediatePropagation();
   if(!signup)
  { $(this).html("Cancel");
   $('#comment').css("color","green");
   $('#comment').html("Registration Successful !!!!");
         }
   else
   {$(this).html("Sign up");
$('#comment').css("color","red");
   $('#comment').html("Registration Cancelled  !!!!");
    } 
   signup = !signup;
});

// Get more appointments when reaching the end of the page.
$(window).bind('scrollstart', function() {
    if (utils.isAtBottom()) {
        if (utils.lazyLoading === false) {
            // Add a loading spinner first so that the user knows we are working on it.
            $('#appointmentList').append('<li class="loading"><div id="canvasLoader"></div></li>');
            utils.loadingSpinner();
            $('#appointmentList').listview('refresh');
            $.mobile.silentScroll($.mobile.activePage.height());
            utils.lazyLoading = true;
            utils.getAppointments(); // TODO: Pass the next page argument i.e. getAppointments(nextPage);
        }
    }
});