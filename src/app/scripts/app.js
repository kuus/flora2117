// import 'jquery/dist/jquery';
// import tether from 'tether';
// import 'bootstrap/js/src/collapse';
// import 'bootstrap/js/src/modal';
// import 'bootstrap/js/src/dropdown';
// import 'owl.carousel/dist/owl.carousel';
import './map.js';

class App {

  constructor () {
    // bootstrap
    this.$onInit();
    $(document).ready(this.$onReady.bind(this));
  }

  /**
   * Init
   */
  $onInit () {
    // console.log('app.js initialized');

    this._highlightCurrentPage();
  }

  /**
   * On document ready
   */
  $onReady () {
    // console.log('app.js document is ready');

    $('.appPlant').each((i, element) => {
      let $container = $(element);
      let $slider = $container.find('.appPlant__slider');
      let $thumbs = $container.find('.appPlant__slider-thumbs');

      let slider = $slider.owlCarousel({
        items: 1,
        autoHeight: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
      });
      let sliderThumbs = $thumbs.owlCarousel({
        // margin: 15,
        // center: true,
        autoWidth: true,
      });
      $thumbs
        .on('click', '.owl-item', function (event) {
          const idx = $(this).index();
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
  }

  /**
   * Highlight current page (for bootstrap navbar)
   */
  _highlightCurrentPage () {
    const currentHref = window.location.href;
    const links = document.querySelectorAll('.nav-link');
    if (links.length) {
      for (var i = links.length; i--;) {
        let link = links[i];
        if (currentHref === link.href) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    }
  }
}

new App();
