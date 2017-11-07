 var loc = [];
      console.log(loc)

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 37.7749, lng: -122.431297}
        });
        var geocoder = new google.maps.Geocoder();


        document.getElementById('submit').addEventListener('click', function(event) {
          event.preventDefault()
          geocodeAddress(geocoder, map);
        });

        var newAutocomplete = new google.maps.places.Autocomplete(document.getElementById('address'),{types: ['geocode']});
          // autocomplete.setComponentRestrictions({ 'country': ['us'] });
          newAutocomplete.addListener('place_changed', () => {
            // self.zone.run(() => {
              // this._address = autocomplete.getPlace();
              console.log(newAutocomplete);
            // });
          });
      }

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          // console.log(results)
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

          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }