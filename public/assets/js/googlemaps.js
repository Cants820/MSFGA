var activity = [
   ['Garbage Clean Up'], ['Beach Clean Up']
]

var markers = [
    ['San Francisco', 37.7749, -122.431297],
    ['Ocean Beach', 37.7594, -122.5107]
];

var date = [
    ['2017-12-12 07:00:00'], ['2017-12-13 06:30:00']
]


function initMap() {
    var latlng = new google.maps.LatLng(37.7749, -122.431297);
    var myOptions = {
        zoom: 12,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false
    };
    var map = new google.maps.Map(document.getElementById("map"),myOptions);
    var infowindow = new google.maps.InfoWindow(), marker, i;
    for (i = 0; i < markers.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][1], markers[i][2]),
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent('<div><strong>' + 'Event: ' + activity[i][0] + '</strong><br>' +
                markers[i][0] + '<br>' +
                'Date: ' + date[i][0] + '</div>');
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}