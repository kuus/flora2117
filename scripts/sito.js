/*! @preserve This js file is bundled through automated tasks, view the repo for the real source */
(function () {
  'use strict';

  // allow this to be set from outside of this script, e.g. from the backend
  var api = window['flora2117'] || {};

  var api$1 = window['flora2117'] = api;

  var Map = function Map () {
    var mapContainer = document.getElementById('appMap');

    this.lib = window['L'];

    if (mapContainer) {
      this.init();
    }
  };

  /**
   * Init
   */
  Map.prototype.init = function init () {
    var map = this.lib.map('appMap').setView([45.48904, 9.19103], 15.49);

    this.lib.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var LeafIcon = this.lib.Icon.extend({
      options: {
        shadowUrl: 'images/leaf-shadow.png',
        iconSize:   [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:[-3, -76]
      }
    });

    // export to API
    api$1.map = map;
    api$1.mapIcon = LeafIcon;

    // usage:
    // let greenIcon = new LeafIcon({iconUrl: 'images/leaf-green.png'});
    // L.marker([45.48204, 9.19103], {icon: greenIcon}).bindPopup('I am a green leaf.').addTo(map);
  };

  new Map();

  // import 'jquery/dist/jquery';
  // import tether from 'tether';
  // import 'bootstrap/js/src/collapse';
  // import 'bootstrap/js/src/modal';
  // import 'bootstrap/js/src/dropdown';
  // import 'owl.carousel/dist/owl.carousel';
  var App = function App () {
    // bootstrap
    this.$onInit();
    $(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  App.prototype.$onInit = function $onInit () {
    // console.log('app.js initialized');

    this._highlightCurrentPage();
  };

  /**
   * On document ready
   */
  App.prototype.$onReady = function $onReady () {
    // console.log('app.js document is ready');

    $('.appPlant').each(function (i, element) {
      var $container = $(element);
      var $slider = $container.find('.appPlant__slider');
      var $thumbs = $container.find('.appPlant__slider-thumbs');

      var slider = $slider.owlCarousel({
        items: 1,
        autoHeight: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
      });
      var sliderThumbs = $thumbs.owlCarousel({
        // margin: 15,
        // center: true,
        autoWidth: true,
      });
      $thumbs
        .on('click', '.owl-item', function (event) {
          var idx = $(this).index();
          slider.trigger('to.owl.carousel', idx);
          sliderThumbs.trigger('to.owl.carousel', idx);
          slider.trigger('to.owl.carousel', idx);
          // show root plant information when viewing slides after the first
          if (idx === 0) {
            $container.removeClass('appPlant-show-root');
          } else {
            $container.addClass('appPlant-show-root');
          }
        });

    });
  };

  /**
   * Highlight current page (for bootstrap navbar)
   */
  App.prototype._highlightCurrentPage = function _highlightCurrentPage () {
    var currentHref = window.location.href;
    var links = document.querySelectorAll('.nav-link');
    if (links.length) {
      for (var i = links.length; i--;) {
        var link = links[i];
        if (currentHref === link.href) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    }
  };

  new App();

}());

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9mbG9yYTIxMTcvc3JjL2FwcC9zY3JpcHRzL2FwaS5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9mbG9yYTIxMTcvc3JjL2FwcC9zY3JpcHRzL21hcC5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9mbG9yYTIxMTcvc3JjL2FwcC9zY3JpcHRzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbGxvdyB0aGlzIHRvIGJlIHNldCBmcm9tIG91dHNpZGUgb2YgdGhpcyBzY3JpcHQsIGUuZy4gZnJvbSB0aGUgYmFja2VuZFxuY29uc3QgYXBpID0gd2luZG93WydmbG9yYTIxMTcnXSB8fCB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2luZG93WydmbG9yYTIxMTcnXSA9IGFwaTtcbiIsImltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuXG5cbmNsYXNzIE1hcCB7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgY29uc3QgbWFwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcE1hcCcpO1xuXG4gICAgdGhpcy5saWIgPSB3aW5kb3dbJ0wnXTtcblxuICAgIGlmIChtYXBDb250YWluZXIpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0XG4gICAqL1xuICBpbml0ICgpIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLmxpYi5tYXAoJ2FwcE1hcCcpLnNldFZpZXcoWzQ1LjQ4OTA0LCA5LjE5MTAzXSwgMTUuNDkpO1xuXG4gICAgdGhpcy5saWIudGlsZUxheWVyKCdodHRwOi8ve3N9LnRpbGUub3NtLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7XG4gICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyA8YSBocmVmPVwiaHR0cDovL29zbS5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4nXG4gICAgfSkuYWRkVG8obWFwKTtcblxuICAgIGxldCBMZWFmSWNvbiA9IHRoaXMubGliLkljb24uZXh0ZW5kKHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgc2hhZG93VXJsOiAnaW1hZ2VzL2xlYWYtc2hhZG93LnBuZycsXG4gICAgICAgIGljb25TaXplOiAgICAgWzM4LCA5NV0sXG4gICAgICAgIHNoYWRvd1NpemU6ICAgWzUwLCA2NF0sXG4gICAgICAgIGljb25BbmNob3I6ICAgWzIyLCA5NF0sXG4gICAgICAgIHNoYWRvd0FuY2hvcjogWzQsIDYyXSxcbiAgICAgICAgcG9wdXBBbmNob3I6ICBbLTMsIC03Nl1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGV4cG9ydCB0byBBUElcbiAgICBhcGkubWFwID0gbWFwO1xuICAgIGFwaS5tYXBJY29uID0gTGVhZkljb247XG5cbiAgICAvLyB1c2FnZTpcbiAgICAvLyBsZXQgZ3JlZW5JY29uID0gbmV3IExlYWZJY29uKHtpY29uVXJsOiAnaW1hZ2VzL2xlYWYtZ3JlZW4ucG5nJ30pO1xuICAgIC8vIEwubWFya2VyKFs0NS40ODIwNCwgOS4xOTEwM10sIHtpY29uOiBncmVlbkljb259KS5iaW5kUG9wdXAoJ0kgYW0gYSBncmVlbiBsZWFmLicpLmFkZFRvKG1hcCk7XG4gIH1cbn1cblxubmV3IE1hcCgpO1xuIiwiLy8gaW1wb3J0ICdqcXVlcnkvZGlzdC9qcXVlcnknO1xuLy8gaW1wb3J0IHRldGhlciBmcm9tICd0ZXRoZXInO1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvc3JjL2NvbGxhcHNlJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9tb2RhbCc7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvZHJvcGRvd24nO1xuLy8gaW1wb3J0ICdvd2wuY2Fyb3VzZWwvZGlzdC9vd2wuY2Fyb3VzZWwnO1xuaW1wb3J0ICcuL21hcC5qcyc7XG5cbmNsYXNzIEFwcCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8vIGJvb3RzdHJhcFxuICAgIHRoaXMuJG9uSW5pdCgpO1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KHRoaXMuJG9uUmVhZHkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgJG9uSW5pdCAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2FwcC5qcyBpbml0aWFsaXplZCcpO1xuXG4gICAgdGhpcy5faGlnaGxpZ2h0Q3VycmVudFBhZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBkb2N1bWVudCByZWFkeVxuICAgKi9cbiAgJG9uUmVhZHkgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdhcHAuanMgZG9jdW1lbnQgaXMgcmVhZHknKTtcblxuICAgICQoJy5hcHBQbGFudCcpLmVhY2goKGksIGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCAkY29udGFpbmVyID0gJChlbGVtZW50KTtcbiAgICAgIGxldCAkc2xpZGVyID0gJGNvbnRhaW5lci5maW5kKCcuYXBwUGxhbnRfX3NsaWRlcicpO1xuICAgICAgbGV0ICR0aHVtYnMgPSAkY29udGFpbmVyLmZpbmQoJy5hcHBQbGFudF9fc2xpZGVyLXRodW1icycpO1xuXG4gICAgICBsZXQgc2xpZGVyID0gJHNsaWRlci5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAgICAgICBtb3VzZURyYWc6IGZhbHNlLFxuICAgICAgICB0b3VjaERyYWc6IGZhbHNlLFxuICAgICAgICBwdWxsRHJhZzogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgbGV0IHNsaWRlclRodW1icyA9ICR0aHVtYnMub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAvLyBtYXJnaW46IDE1LFxuICAgICAgICAvLyBjZW50ZXI6IHRydWUsXG4gICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgJHRodW1ic1xuICAgICAgICAub24oJ2NsaWNrJywgJy5vd2wtaXRlbScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGNvbnN0IGlkeCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgICBzbGlkZXIudHJpZ2dlcigndG8ub3dsLmNhcm91c2VsJywgaWR4KTtcbiAgICAgICAgICBzbGlkZXJUaHVtYnMudHJpZ2dlcigndG8ub3dsLmNhcm91c2VsJywgaWR4KTtcbiAgICAgICAgICBzbGlkZXIudHJpZ2dlcigndG8ub3dsLmNhcm91c2VsJywgaWR4KTtcbiAgICAgICAgICAvLyBzaG93IHJvb3QgcGxhbnQgaW5mb3JtYXRpb24gd2hlbiB2aWV3aW5nIHNsaWRlcyBhZnRlciB0aGUgZmlyc3RcbiAgICAgICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgICAgICAkY29udGFpbmVyLnJlbW92ZUNsYXNzKCdhcHBQbGFudC1zaG93LXJvb3QnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGNvbnRhaW5lci5hZGRDbGFzcygnYXBwUGxhbnQtc2hvdy1yb290Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZ2hsaWdodCBjdXJyZW50IHBhZ2UgKGZvciBib290c3RyYXAgbmF2YmFyKVxuICAgKi9cbiAgX2hpZ2hsaWdodEN1cnJlbnRQYWdlICgpIHtcbiAgICBjb25zdCBjdXJyZW50SHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XG4gICAgaWYgKGxpbmtzLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IGxpbmtzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICBsZXQgbGluayA9IGxpbmtzW2ldO1xuICAgICAgICBpZiAoY3VycmVudEhyZWYgPT09IGxpbmsuaHJlZikge1xuICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5uZXcgQXBwKCk7XG4iXSwibmFtZXMiOlsiY29uc3QiLCJhcGkiXSwibWFwcGluZ3MiOiI7Ozs7RUFBQTtBQUNBQSxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDOztBQUV0QyxjQUFlLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUM7O0FDQXpDLE1BQU0sR0FBRyxHQUFDLFlBS0csSUFBSTtJQUNmLElBQVEsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBRXpELElBQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUV6QixJQUFNLFlBQVksRUFBRTtNQUNsQixJQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDYjtBQUNMLEVBQUEsQ0FBRyxDQUFBOztBQUVILEVBQUE7OztBQUdBLEVBQUEsY0FBRSxJQUFJLG9CQUFJO0lBQ1IsSUFBUSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQUV6RSxJQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyx5Q0FBeUMsRUFBRTtNQUM5RCxXQUFhLEVBQUUsNkRBQTZEO0tBQzNFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBRWhCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztNQUNwQyxPQUFTLEVBQUU7UUFDVCxTQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFFBQVUsSUFBSSxDQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDeEIsVUFBWSxFQUFFLENBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4QixVQUFZLEVBQUUsQ0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLFlBQWMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDdkIsV0FBYSxDQUFDLENBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7T0FDeEI7S0FDRixDQUFDLENBQUM7OztJQUdMQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNoQkEsS0FBSyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7Ozs7O0FBSzNCLEVBQUEsQ0FBRyxDQUFBOztBQUdILEVBQUEsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7RUNqRFY7Ozs7OztBQU1BLEFBRUEsTUFBTSxHQUFHLEdBQUMsWUFFRyxJQUFJOztJQUVmLElBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDaEQsRUFBQSxDQUFHLENBQUE7O0FBRUgsRUFBQTs7O0FBR0EsRUFBQSxjQUFFLE9BQU8sdUJBQUk7OztJQUdYLElBQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ2pDLEVBQUEsQ0FBRyxDQUFBOztBQUVILEVBQUE7OztBQUdBLEVBQUEsY0FBRSxRQUFRLHdCQUFJOzs7SUFHWixDQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRTtNQUNqQyxJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDOUIsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO01BQ3JELElBQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7TUFFNUQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUNqQyxLQUFPLEVBQUUsQ0FBQztRQUNWLFVBQVksRUFBRSxJQUFJO1FBQ2xCLFNBQVcsRUFBRSxLQUFLO1FBQ2xCLFNBQVcsRUFBRSxLQUFLO1FBQ2xCLFFBQVUsRUFBRSxLQUFLO09BQ2hCLENBQUMsQ0FBQztNQUNMLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7OztRQUd2QyxTQUFXLEVBQUUsSUFBSTtPQUNoQixDQUFDLENBQUM7TUFDTCxPQUFTO1NBQ0osRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxLQUFLLEVBQUU7VUFDM0MsSUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1VBQzlCLE1BQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7VUFDekMsWUFBYyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztVQUMvQyxNQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDOztVQUV6QyxJQUFNLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDZixVQUFZLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7V0FDOUMsTUFBTTtZQUNQLFVBQVksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztXQUMzQztTQUNGLENBQUMsQ0FBQzs7S0FFTixDQUFDLENBQUM7QUFDUCxFQUFBLENBQUcsQ0FBQTs7QUFFSCxFQUFBOzs7QUFHQSxFQUFBLGNBQUUscUJBQXFCLHFDQUFJO0lBQ3pCLElBQVEsV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzNDLElBQVEsS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxJQUFNLEtBQUssQ0FBQyxNQUFNLEVBQUU7TUFDbEIsS0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHO1FBQ2pDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFNLFdBQVcsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFO1VBQy9CLElBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlCLE1BQU07VUFDUCxJQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqQztPQUNGO0tBQ0Y7QUFDTCxFQUFBLENBQUcsQ0FBQTs7QUFHSCxFQUFBLElBQUksR0FBRyxFQUFFLENBQUM7OyJ9