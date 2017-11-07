
var loc = [];
// console.log(loc)
for (var i = 0; i < loc.length; i++) {
}
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: { lat: 37.7749, lng: -122.431297 }
  });
  var geocoder = new google.maps.Geocoder();
  var infowindow = new google.maps.InfoWindow;
  document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault()
    geocodeAddress(geocoder, map, infowindow);
    // console.log(geocoder)
    // console.log(infowindow)
    // console.log(map)
  });
  var newAutocomplete = new google.maps.places.Autocomplete(document.getElementById('address'), { types: ['geocode'] });
  // autocomplete.setComponentRestrictions({ 'country': ['us'] });
  newAutocomplete.addListener('place_changed', () => {
    // self.zone.run(() => {
    // this._address = autocomplete.getPlace();
    // console.log(newAutocomplete);
    // });
  });
}
function geocodeAddress(geocoder, resultsMap, infowindow) {
  var address = document.getElementById('address').value;
  geocoder.geocode({ 'address': address }, function (results, status) {
    // var latlng = [(results[0].geometry.bounds.f.f),(results[0].geometry.bounds.b.b)]
    // console.log(latlng);

    if (status === 'OK') {
      var marks = (results[0].formatted_address)
      console.log(marks)
      loc.push(marks);
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        animation: google.maps.Animation.DROP,
        position: results[0].geometry.location
      });
      infowindow.setContent(results[0].formatted_address);
      infowindow.open(map, marker);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}