map.on('load', () => {
map.addSource('route', {
'type': 'geojson',
'data': {
'type': 'Feature',
'properties': {},
'geometry': {
'type': 'LineString',
'coordinates': [
[30.901346, -29.872902],
[30.910390, -29.875108], // new coordinates
[30.918938, -29.881410],
[30.939078, -29.887783],
[30.943274, -29.890030],
[30.949141, -29.886855],
[30.950380, -29.886499],
[30.959216, -29.896098],
[30.962991, -29.901137],
[30.974778, -29.903222],
[30.978020, -29.901950],
[30.977616, -29.901540],
[30.983201, -29.888878],
[30.987605, -29.881124],
[31.0054458, -29.861605],
[31.009690, -29.860094],
[31.010159, -29.859136],
[31.010560, -29.854723],
[31.016592, -29.852946],
]
}
}
});



map.addLayer({
'id': 'route',
'type': 'line',
'source': 'route',
'layout': {
'line-join': 'round',
'line-cap': 'round'
},
'paint': {
'line-color': '#276221',
'line-width': 5
}
});
});