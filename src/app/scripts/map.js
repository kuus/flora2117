import api from './api';


class Map {

  /**
   * Constructor
   */
  constructor () {
    const mapContainer = document.getElementById('appMap');

    this.lib = window['L'];

    if (mapContainer) {
      this.init();
    }
  }

  /**
   * Init
   */
  init () {
    const map = this.lib.map('appMap').setView([45.48904, 9.19103], 15.49);

    this.lib.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let LeafIcon = this.lib.Icon.extend({
      options: {
        shadowUrl: 'images/leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
      }
    });

    // export to API
    api.map = map;
    api.mapIcon = LeafIcon;

    // usage:
    // let greenIcon = new LeafIcon({iconUrl: 'images/leaf-green.png'});
    // L.marker([45.48204, 9.19103], {icon: greenIcon}).bindPopup('I am a green leaf.').addTo(map);
  }
}

new Map();
