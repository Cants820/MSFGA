$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newEvent = {
    name: $("#event-name").val().trim(),
    location: $("#event-location").val().trim(),
    date: $("#event-date").val().trim(),
    description: $("#event-description").val().trim()
  };

  // Send the POST request.
  $.ajax("/event/create", { //DOUBLE CHECK ROUTE LISTED
    type: "POST",
    data: newEvent
  }).then(
    function() {
      console.log("created new Event");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});



// // Google Fill location
// function initMap() {
//       var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 12,
//         center: {lat: 37.7749, lng: -122.431297}
//       });
//       var geocoder = new google.maps.Geocoder();
//       var infowindow = new google.maps.InfoWindow;
//       document.getElementById('submit').addEventListener('click', function(event) {
//         event.preventDefault()
//         geocodeAddress(geocoder, map, infowindow);
//         console.log(geocoder)
//         console.log(infowindow)
//         console.log(map)
//       });
//       var newAutocomplete = new google.maps.places.Autocomplete(document.getElementById('address'),{types: ['geocode']});
//         // autocomplete.setComponentRestrictions({ 'country': ['us'] });
//         newAutocomplete.addListener('place_changed', () => {
//           // self.zone.run(() => {
//             // this._address = autocomplete.getPlace();
//             // console.log(newAutocomplete);
//           // });
//         });
//     }