$(document).ready(function() {
  Materialize.updateTextFields();
});

function initMap() {
  activateSearch();
  var uluru = {lat: -33,
    lng: -71};
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
        //  icon: 'http://gcba.github.io/iconos/Iconografia_PNG/bici.png'
        });
      }, function(error) {
        alert('Tenemos un problema en encontrar tu ubicación');
      });
    }
  }
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer({map: map});
  // directionsDisplay.setMap(map);
  document.getElementById('trazar-ruta').addEventListener('click', trazarRuta);
  var trazarRuta = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
}

// función para autocompletar
function activateSearch() {
  var startInput = document.getElementById('startInput');
  var destinationInput = document.getElementById('destinationInput');
  new google.maps.places.Autocomplete(startInput);
  new google.maps.places.Autocomplete(destinationInput);
}

// función para trazar ruta
var calculateAndDisplayRoute = function(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('startInput').value,
    destination: document.getElementById('destinationInput').value,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      windorw.alert('No encontramos una ruta');
    }
  });
};
