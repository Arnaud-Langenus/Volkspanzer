const mymap = L.map('openstreetmap').setView([51.22561, 4.40083], 18);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(mymap);
const marker = L.marker([51.22561, 4.40083]).addTo(mymap);
marker.bindPopup("<b>Volkspanzer</b><br/><b>Opening hours:</b><br/><b>From Mon - Fri 9 - 5 PM</b>").openPopup();