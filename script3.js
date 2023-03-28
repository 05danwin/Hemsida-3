window.onload = function() {
mapboxgl.accessToken = "pk.eyJ1IjoiZGFud2luMDUiLCJhIjoiY2xmamd0dzFuMDB0OTNzbWptMXUxNGlqdSJ9.PXhBG9sxypeXB1s_R4o-fQ";
var map = new mapboxgl.Map({
    container: "map",
    center:[18.063601, 59.440327],
    zoom:15,
    style: "mapbox://styles/mapbox/streets-v11",
});
const marker = new mapboxgl.Marker()
.setLngLat([18.063601, 59.440327])
.addTo(map);
};