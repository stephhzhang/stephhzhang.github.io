var mymap = L.map('mapid').setView([51.505, -0.09], 13);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic3RlcGhoemhhbmciLCJhIjoiY2pmNXEzYWl4MWZzdzMzcTcxajlwcGt6OSJ9.yvik5cWBpiKMj7pc5idWaA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic3RlcGhoemhhbmciLCJhIjoiY2pmNXEzYWl4MWZzdzMzcTcxajlwcGt6OSJ9.yvik5cWBpiKMj7pc5idWaA'
}).addTo(mymap);
