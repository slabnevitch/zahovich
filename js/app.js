// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// import Parallax from 'parallax-js'

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

// import FormHandler from 'formhandler.js';


//- SERVIVE FUNCTIONS==================

//- remove-class--------------------------
//- require('./vendor/libs-vanilla/service-functions/remove-class.js')

//- siblings--------------------------
//- require('./vendor/libs-vanilla/service-functions/siblings.js')

//- webp-detection--------------------------
// require('./vendor/libs-vanilla/service-functions/webp-detection.js')

//- dropdown-toggle on touch devices--------------------------
//- require('./vendor/libs-vanilla/service-functions/dropdown-toggle.js')

//- isMobile--------------------------
// require('./vendor/libs-vanilla/service-functions/mobileDetect.js')

//- All in one file--------------------------
require('./vendor/libs-vanilla/service-functions/all-functions.js')


//- WITH JQUERY===================================
//- jquery--------------------------
// require('./vendor/libs/jquery/jquery-3.1.1.min.js')

//- jquery-UI--------------------------Не проверено!
// require('./vendor/libs/jquery-ui/jquery-ui.min.js')
	
//- dl-menu--------------------------
// require('./vendor/libs/dlmenu/js/modernizr.custom.js')
// var dlmenu = require('./vendor/libs/dlmenu/js/jquery.dlmenu.js')
// папку dl-menu/fonts копировать в главную fonts и переименовать в "dl-menu-font"

//- magnific-popup--------------------------
// require('./vendor/libs/magnific-popup/dist/jquery.magnific-popup.min.js')
	
//- slick--------------------------
// require('./vendor/libs/slick/slick.min.js')
	
//- slick-master (без лишних контейнеров)--------------------------
// require('./vendor/libs/slick-master/slick.js')
		
//- superfish--------------------------Не проверено!
// require('./vendor/libs/superfish/dist/js/hoverIntent.js')
// require('./vendor/libs/superfish/dist/js/superfish.min.js')

//- end WITH JQUERY===================================


//- VANILLA JS===================================
//- dynamic-adaptive--------------------------
require('./vendor/libs-vanilla/dynamic-adaptive/da(es6).js')
	
//- slideout--------------------------
// var Slideout = require('./vendor/libs-vanilla/slideout/slideout.js')

//- multilevel-panel--------------------------Не проверено!
// require('./vendor/libs-vanilla/multilevel-panel/multilevel-panel.js')

//- multilevel-dropdown-menu--------------------------
// require('./vendor/libs-vanilla/multilevel-dropdown/multidropdown.js')
		
//- lazysizes--------------------------Не проверено!
// require('./vendor/libs-vanilla/lazysizes/lazysizes.min.js')
	
//- accordion--------------------------
// require('./vendor/libs-vanilla/accordion/vanilla-accordion.js')
	
//- tabs--------------------------
// require('./vendor/libs-vanilla/tabs/tabs-pure.js')

//- tabs-accordion-combine--------------------------
// require('./vendor/libs-vanilla/tabs-accordion-combine/tabs-accordion.js')
	
//- micromodal--------------------------
// var MicroModal = require('./vendor/libs-vanilla/micromodal/micromodal.js')
	
//- swiper--------------------------
// require('./vendor/libs-vanilla/swiper/swiper-bundle.min.js')

//- tiny-slider--------------------------Не проверено!
// require('./vendor/libs-vanilla/tiny-slider/dist/tiny-slider.js')

//- wNumb--------------------------
// var wNumb = require('./vendor/libs-vanilla/wnumb/wNumb.js')

// - noUiSlider--------------------------
// var noUiSlider = require('./vendor/libs-vanilla/noUiSlider/nouislider.min.js')

//- iMask--------------------------
// require('./vendor/libs-vanilla/imask/imask.js')

//- FormHandler--------------------------
//- html разыметка должна быть как в доке https://ivangrimes.github.io/formhandler.js/, обязателько должен присутствовать <div class="formhandler__notices"></div>!
//- кастомные стили для инпута и ошибок здесь _misc/formHandler-custom
// var FormHandler = require('./vendor/libs-vanilla/formhandler.js-1.1.2/dist/js/FormHandler.js')

//- ratings--------------------------
// require('./vendor/libs-vanilla/rating/ratings.js')

//- scroll-to-sects--------------------------
// require('./vendor/libs-vanilla/scroll-to-sects/scrolltosect.js')

//- tippy--------------------------
//- https://atomiks.github.io/tippyjs/
//- base using:  html: <button data-tippy-content="Tooltip">Text</button>; js: tippy('[data-tippy-content]');
import tippy from 'tippy.js';

//- sticky-sidebar -------------------------- Не проверено!
//- https://abouolia.github.io/sticky-sidebar/#usage
// require('./vendor/libs-vanilla/sticky-sidebar/dist/resizeSensor.js')
// require('./vendor/libs-vanilla/sticky-sidebar/dist/sticky-sidebar.min.js')

//- simplebar--------------------------
//- USE:	new SimpleBar(document.querySelector('mySelector'), { autoHide: false });
// var SimpleBar = require('./vendor/libs-vanilla/simplebar/simplebar.min.js')
	
//- fstdropdown (кастомный селект), исп-е.: <select data-searchdisable="true" class="fstdropdown-select">
// require('./vendor/libs-vanilla/fstdropdown/fstdropdown.min.js')

//- baguetteBox-------------------------- use: https://github.com/feimosi/baguetteBox.js#usage
// var baguetteBox = require('./vendor/libs-vanilla/baguetteBox/dist/baguetteBox.min.js')

//- counter--------------------------
// require('./vendor/libs-vanilla/counter/counter.js')

// var tingle = require('./vendor/libs-vanilla/tingle-master/dist/tingle.js')
	
//- end VANILLA JS===================================

// require('./vendor/color-scheme-switcher.js')
// require('./vendor/jquery-scrollify/jquery.scrollify.js')

document.querySelector('#burger').onclick = function(e) {
	this.classList.toggle('on');
	document.documentElement.classList.toggle('menu-opened');
	document.documentElement.classList.toggle('lock');
}

document.addEventListener('DOMContentLoaded', () => {

	//---------------Swiper
	if(document.querySelector('.main__slider') !== null){
		const swiper = new Swiper('.main__slider', {
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,

			loop: true,
			breakpoints: {
    // when window width is >= 320px
				992: {
					autoHeight: false
				}
			},

  // If we need pagination
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
	//custom pagination
	//type: 'custom',
	//renderCustom: (swiper, current, total) => {
		//return current.toString().length > 1 ? current : '0'+current;
	//}
			},

			on: {
				init: function (swiper) {
					document.querySelector('.swiper-pages__overal').innerText = `/${swiper.wrapperEl.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length}`;
				},
				slideChange: function (swiper) {
					console.log(swiper.activeIndex);
					document.querySelector('.swiper-pages__current').innerText = swiper.realIndex < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
				},
			},

		});
	}
//---------------END Swiper

tippy('[data-tippy-content]');

}); //DOMContentLoaded