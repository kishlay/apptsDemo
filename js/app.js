// If you want to prevent dragging, uncomment this section
/*
function preventBehavior(e) 
{ 
  e.preventDefault(); 
};
document.addEventListener("touchmove", preventBehavior, false);
*/

/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
for more details -jm */
/*
function handleOpenURL(url)
{
	// TODO: do something with the url passed in.
}
*/
$(document).ready(function(){ 
//$('#getdata-button').live('click', function(){
//alert("Clicked"); 
$.ajax({

            type: "GET",

            url: "http://api.informulate.com/api/appointments"

        }).done(function(data) { 
  //alert("JDATA");
            $.each(data, function(i, val) {		
               	$('#appointmentList').append('<li>' +
					'<img src="http://www.newwinechurch.com/wp-content/uploads/2011/06/Sunrise.jpg' + '" height="40px" width="60px"/>' +
					'<h4>' + val.name + ' ' + '</h4>' +
					'<p>' + val.date.date + '</p>' +
					'<div style="height:20px;overflow:hidden" class="desc"> '+val.Description+'</div></li>');
 			if (i==9)
			return false;
                    
            });
			
                  //location.reload();
        });

 //});
var showmore = false;
$('.desc').live("click",function() {
//alert("Hi");

    if (this.showmore) {
        $(this).animate({height:'20px'}); 
    }
    else {
        $(this).animate({height:'100%'});
    }
    this.showmore = !this.showmore;
});


}); 


function onBodyLoad()
{		
	document.addEventListener("deviceready", onDeviceReady, false);
}

/* When this function is called, Cordova has been initialized and is ready to roll */
/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
for more details -jm */
function onDeviceReady()
{
	
	navigator.notification.alert("Cordova is working");
}

Navigation = {
  Initialise: function () {
    $(":jqmData(role='page')").on("pageshow", function (event) {
      $("#navigation").load('includes/navigation.html');

      /* Sidebar Control */
      $(".controls a").click(function() {
        $(".page").toggleClass("open");
        $(".controls").toggleClass("active");
      });
    });
  }
};