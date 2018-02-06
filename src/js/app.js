$(document).ready(function() {
  Materialize.updateTextFields();
});

function initMap() {
  var test = {lat: -12, lng: -77};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: test
  });
  var marker = new google.maps.Marker({
    position: test,
    map: map
  });
  activateSearch()
}

function activateSearch() {
  var startInput = document.getElementById('startInput');
  var destinationInput = document.getElementById('destinationInput');

  new google.maps.places.Autocomplete(startInput);
  new google.maps.places.Autocomplete(destinationInput);
}