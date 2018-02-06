$(document).ready(function() {
  Materialize.updateTextFields();
});

function initMap() {
  var uluru = {lat: -25.363,
    lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
  document.getElementById('search').addEventListener('click', buscar);
  function buscar() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setZoom(15);
        map.setCenter(pos);
        var miUbicacion = new google.maps.Marker({
          position: pos,
          map: map,
          icon: 'https://image.flaticon.com/icons/png/128/145/145315.png'
        });
      }, function(error) {
        alert('Tenemos un problema en encontrar tu ubicación');
      });
      activateSearch();
    }
  }
}
// función para autocompletar
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}

function activateSearch() {
  var startInput = document.getElementById('startInput');
  var destinationInput = document.getElementById('destinationInput');
  new google.maps.places.Autocomplete(startInput);
  new google.maps.places.Autocomplete(destinationInput);
}
