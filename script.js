const params = new URLSearchParams(window.location.search);

const mine = params.get("mine");

if(mine){
document.getElementById("mineTitle").innerText = mine + " Truck Monitoring";
}

/* Map */

var map = L.map('map').setView([11.6643, 78.1460], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19
}).addTo(map);

/* Fake Truck Locations */

L.marker([11.6643,78.1460]).addTo(map)
.bindPopup("Truck TN52AB1023");

L.marker([11.6680,78.1500]).addTo(map)
.bindPopup("Truck TN52AB3321");

L.marker([11.6600,78.1400]).addTo(map)
.bindPopup("Truck TN52AB8765");