(function(){
    'use strict';

    var map = L.map('map').setView([44.490631, 11.219390], 15);    

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([44.490631, 11.219390]).addTo(map);
    var circle = L.circle([44.488350, 11.214040], {
        color: 'darkgreen',
        fillColor: 'darkgreen',
        fillOpacity: 0.5,
        radius: 200
    }).addTo(map);

    var polygon = L.polygon([
        [44.488, 11.22],
        [44.490, 11.23],
        [44.485, 11.23]
    ]).addTo(map);

    marker.bindPopup("<b>Hello!</b><br>I am from here.").openPopup();
    circle.bindPopup("Schools");
    polygon.bindPopup("Roundabout");
}());