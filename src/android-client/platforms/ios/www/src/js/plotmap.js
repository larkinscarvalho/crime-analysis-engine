function plotLocation(lat,lon)
{
  var locations = [
   ['Your Location',lat,lon],

   ];


   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 10,
     center: new google.maps.LatLng(lat, lon  ),
     mapTypeId: google.maps.MapTypeId.ROADMAP
   });
   var infowindow = new google.maps.InfoWindow();

   var marker, i;

   for (i = 0; i < locations.length; i++) {  
     marker = new google.maps.Marker({
       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
       map: map
     });
 
   }


}

function getCurrentlocation() 
{    
        navigator.geolocation.getCurrentPosition(onSuccessGetCurrentLocation, onErrorGetCurrentLocation);
}
function onSuccessGetCurrentLocation(position) 
{
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        reverseGeocode(lat, lon);
        
}
function onErrorGetCurrentLocation() 
{
    $( "#search_result" ).append('<font color=\"#FA5858\">Failed to fetch your current location</font>');
}