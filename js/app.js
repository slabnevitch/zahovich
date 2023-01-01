// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// import Parallax from 'parallax-js'

import Swiper, { Navigation, Pagination, Autoplay, EffectFade} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

// import FormHandler from 'formhandler.js';


//- SERVIVE FUNCTIONS==================

//- remove-class--------------------------
//- require('./vendor/libs-vanilla/service-functions/remove-class.js')

//- siblings--------------------------
// require('./vendor/libs-vanilla/service-functions/siblings.js')

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
require('./vendor/libs-vanilla/multilevel-panel/multilevel-panel.js')

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

// var isMobile = {
// 	Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
// 	BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
// 	iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
// 	Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
// 	any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
// };
// Use: if(isMobile.any()){ some code here }

function siblings( elem ) {
	var createSiblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};
	return createSiblings( ( elem.parentNode || {} ).firstChild, elem );
}

document.querySelector('#multilevel-panel-open').onclick = function(e) {
	// this.classList.toggle('on');
	document.documentElement.classList.toggle('lock');
}

document.addEventListener('DOMContentLoaded', () => {

	document.onclick = function(e) {
		var target = e.target;

		// desktop catalog toggle
		if(screen.width >= 991){
			if(target.classList.contains('catalog-menu__item') || target.parentElement.classList.contains('catalog-menu__item')){
				if(target.parentElement.classList.contains('with-submenu')){
					e.preventDefault();
					document.querySelector('.catalog').classList.toggle('catalog-opened');
					target.parentElement.classList.toggle('catalog-item-opened');
					siblings(target.parentElement).forEach(item => item.classList.remove('catalog-item-opened'));
					// classList.toggle('catalog-item-opened');
				}
			}else{
				document.querySelector('.catalog').classList.remove('catalog-opened');
				document.querySelectorAll('.catalog-menu__item').forEach(item => item.classList.remove('catalog-item-opened'));

			}

		}
		//END desktop catalog toggle

	}


	if(document.querySelector('.main__slider') !== null){
		var mainSwiper = new Swiper('.main__slider', {
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
			},

			on: {
				init: function (swiper) {
					document.querySelector('.swiper-pages__overal').innerText = `/${swiper.wrapperEl.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length}`;
				},
				slideChange: function (swiper) {
					console.log(swiper.activeIndex);
					document.querySelector('.swiper-pages__current').innerText = swiper.realIndex < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
				}
			},

		});

		mainSwiper.on('slideChange', function (swiper) {
			bannerSwiper.slideTo(swiper.activeIndex, 0, false);
		});
	}


	if(document.querySelector('.banners-slider') !== null){
		var bannerSwiper = new Swiper('.banners-slider', {

			effect: 'fade',
			fadeEffect: {
			    crossFade: true
			  },
			observer: true,
			observeParents: true,
			loop: true

		});
	}

	//---------------Swiper
	if(document.querySelector('.products-carousel') !== null){
			new Swiper('.products-carousel', {
				observer: true,
				observeParents: true,

				slidesPerView: 1.05,
				//spaceBetween: 0,
				autoplay: {
					delay: 4000,
					disableOnInteraction: false,
				},
				loop: true,
				spaceBetween: 15,

				breakpoints: {
	    // when window width is >= 320px

					700: {
						slidesPerView: 2,
						spaceBetween: 30
					},
					991: {
						spaceBetween: 30,
						slidesPerView: 3
					},
					1366: {
						spaceBetween: 30,
						slidesPerView: 4
					}
				},

	  // If we need pagination
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				}
			});
	}

	if(document.querySelector('.novelties-swiper') !== null){
		new Swiper('.novelties-swiper', {
			observer: true,
			observeParents: true,

			slidesPerView: 1.15,
			//spaceBetween: 0,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			loop: true,
			spaceBetween: 15,

			breakpoints: {
    // when window width is >= 320px

				768: {
					slidesPerView: 2,
					spaceBetween: 30
				}
				,992: {
					slidesPerView: 3,
					spaceBetween: 30
				},
				1100: {
					spaceBetween: 30,
					slidesPerView: 2
				},
				1366: {
					spaceBetween: 30,
					slidesPerView: 3
				}
			},

  // If we need pagination
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			}
		});
	}


//---------------END Swiper

tippy('[data-tippy-content]');

}); //DOMContentLoaded