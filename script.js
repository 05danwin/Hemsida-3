const buttonRight = document.getElementById("höger-scroll-knapp");
const buttonLeft = document.getElementById("vänster-scroll-knapp");

buttonRight.onclick = function () {
    document.getElementById("produktlista").scroll({
      left: document.getElementById("produktlista").scrollLeft + 700,
      behavior: "smooth"
    });
  };
  buttonLeft.onclick = function () {
    document.getElementById("produktlista").scroll({
      left: document.getElementById("produktlista").scrollLeft - 700,
      behavior:"smooth" 
    });
  };

window.onload = function() {
mapboxgl.accessToken = "pk.eyJ1IjoiZGFud2luMDUiLCJhIjoiY2xmamd0dzFuMDB0OTNzbWptMXUxNGlqdSJ9.PXhBG9sxypeXB1s_R4o-fQ";
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
});
};