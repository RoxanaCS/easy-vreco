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
      }