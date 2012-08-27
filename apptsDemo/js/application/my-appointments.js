console.log("This is from my-appointments.js");

utils.getAppointments(); // Utils is located on apps.js

var showmore = false;
$('.desc').live("click", function(event) {
//console.log("This is old call");
    event.preventDefault(); // Stops jQuery mobile from reloading the index page.
    event.stopImmediatePropagation();

    if (this.showmore) {
        $(this).animate({
            height: '20px'
        });
    } else {
        $(this).animate({
            height: '100%'
        });
    }
    this.showmore = !this.showmore;
});
$('.fulldesc').live("click",function(event) {
console.log("This is my local call");
    event.preventDefault(); // Stops jQuery mobile from reloading the index page.
    event.stopImmediatePropagation();

  globalVar = $(this).index();
console.log(globalVar);
$.mobile.changePage( "../appdetails.html");
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