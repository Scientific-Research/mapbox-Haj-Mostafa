import { Popup, Marker, Map } from "mapbox-gl";

export const generateNewMarker = ({ lat, lng, map }) => {
  const popUp = new Popup({ closeButton: true, anchor: "left" }).setHTML(
    `<div class="popup">You click here: <br/>[${lng},  ${lat}]</div>`
  );
  new Marker({ color: "red", scale: 2.5 })
    .setLngLat([13.4, 52.52])
    .setPopup(popUp)
    .addTo(map);

  new Marker({ color: "green", scale: 2.5 })
    .setLngLat([13.4, 52.52])
    .setPopup(popUp)
    .addTo(map);

  new Marker({ color: "blue", scale: 2.5 })
    .setLngLat([13.4, 52.52])
    .setPopup(popUp)
    .addTo(map);

  L.mapbox.accessToken =
    "pk.eyJ1IjoiZWNsZXZlciIsImEiOiJja3IzM3B3b24yMHNsMnBueGNya3I4eXExIn0.qNBd6dRRZLTTxKSJ0PUazg";
  var map = L.mapbox
    .map("map")
    .setView([0, 0], 5)
    .addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v11"));

  // The GeoJSON representing a point feature with a property of 'video' for the Vimeo iframe
  var geoJson = {
    features: [
      {
        type: "Feature",
        properties: {
          "marker-color": "#f00",
          "marker-size": "large",
          "marker-symbol": "rocket",
          video:
            '<iframe src="//player.vimeo.com/video/106112939" width="380" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/106112939"><h2>How Simplicity Will Save GIS</h2><p>Vladimir Agafonkin</a> from <a href="http://vimeo.com/foss4g">FOSS4G</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
        },
        geometry: {
          type: "Point",
          coordinates: [0, 0],
        },
      },
    ],
  };

  var myLayer = L.mapbox.featureLayer().addTo(map);

  // Add the iframe in a marker tooltip using the custom feature properties
  myLayer.on("layeradd", function (e) {
    var marker = e.layer,
      feature = marker.feature;

    // Create custom popup content from the GeoJSON property 'video'
    var popupContent = feature.properties.video;

    // bind the popup to the marker http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent, {
      closeButton: false,
      minWidth: 320,
    });
  });

  // Add features to the map
  myLayer.setGeoJSON(geoJson);
};
