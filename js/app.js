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
	// do your thing!
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