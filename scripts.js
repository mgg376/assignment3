mapboxgl.accessToken = 'pk.eyJ1IjoibWdnMzc2IiwiYSI6ImNtOWF3dmk3MzBhNWQya3EzZHpyMmQ4ZDIifQ.WXxAjUmDcjYD8K0-iKGGzQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-73.99364, 40.72828],
    zoom: 15,
    pitch: 46,
    minZoom: 16,
    maxZoom: 20
});

const foodSpots = [
    { name: "Sushi Mercer", longitude: -73.99382944, latitude: 40.73034046 },
    { name: "Chipotle", longitude: -73.99344522, latitude: 40.73114167 },
    { name: "Osakana", longitude: -73.98720741, latitude: 40.72829963 },
    { name: "Le Fournil", longitude: -73.98838929, latitude: 40.72788582 },
    { name: "Pret", longitude: -73.99247279, latitude: 40.73010893 },
    { name: "Springbone", longitude: -73.99923285094354, latitude: 40.729997241108585 },
    { name: "Work", longitude: -73.9942802423407, latitude: 40.72923658808855 }
];

foodSpots.forEach(spot => {
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div class="marker-popup"><strong>${spot.name}</strong></div>`
    );

    // Set color based on spot name
    const markerColor = spot.name === "Work" ? '#0074D9' : '#ff3e00'; // Blue for "Work", Orange for others

    new mapboxgl.Marker({ color: markerColor })
        .setLngLat([spot.longitude, spot.latitude])
        .setPopup(popup)
        .addTo(map);
});

