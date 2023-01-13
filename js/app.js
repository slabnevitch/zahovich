// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// import Parallax from 'parallax-js'

import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Thumbs} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Thumbs]);

import FormHandler from 'formhandler.js';


//- SERVIVE FUNCTIONS==================

//- remove-class--------------------------
//- require('./vendor/libs-vanilla/service-functions/remove-class.js')

//- siblings--------------------------
// var siblings = require('./vendor/libs-vanilla/service-functions/siblings.js')

//- webp-detection--------------------------
// require('./vendor/libs-vanilla/service-functions/webp-detection.js')

//- dropdown-toggle on touch devices--------------------------
//- require('./vendor/libs-vanilla/service-functions/dropdown-toggle.js')

//- Scroll-width(для компенсация "прыгания" страницы на ванильных модалках)--------------------------
require('./vendor/libs-vanilla/service-functions/scrollWidth.js')

//- isMobile--------------------------
// var isMobile = require('./vendor/libs-vanilla/service-functions/mobileDetect.js')
//- All in one file--------------------------
var srvFuncs = require('./vendor/libs-vanilla/service-functions/all-functions.js')
// Using: srvFuncs.siblings(), srvFuncs.removeClass(), etc


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
require('./vendor/libs-vanilla/accordion/vanilla-accordion.js')
	
//- tabs--------------------------
// require('./vendor/libs-vanilla/tabs/tabs-pure.js')

//- tabs-accordion-combine--------------------------
require('./vendor/libs-vanilla/tabs-accordion-combine/tabs-accordion.js')
	
//- micromodal--------------------------
var MicroModal = require('./vendor/libs-vanilla/micromodal/micromodal.js')
	
//- swiper--------------------------
// require('./vendor/libs-vanilla/swiper/swiper-bundle.min.js')

//- tiny-slider--------------------------Не проверено!
// require('./vendor/libs-vanilla/tiny-slider/dist/tiny-slider.js')

//- wNumb--------------------------
var wNumb = require('./vendor/libs-vanilla/wnumb/wNumb.js')

// - noUiSlider--------------------------
var noUiSlider = require('./vendor/libs-vanilla/noUiSlider/nouislider.min.js')

//- iMask--------------------------
require('./vendor/libs-vanilla/imask/imask.js')

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
require('./vendor/libs-vanilla/fstdropdown/fstdropdown.min.js')

//- baguetteBox-------------------------- use: https://github.com/feimosi/baguetteBox.js#usage
// var baguetteBox = require('./vendor/libs-vanilla/baguetteBox/dist/baguetteBox.min.js')

//- counter--------------------------
require('./vendor/libs-vanilla/counter/counter.js')

// var tingle = require('./vendor/libs-vanilla/tingle-master/dist/tingle.js')
	
// require('./vendor/color-scheme-switcher.js')

var Locations = require('./vendor/locations.js')
//- end VANILLA JS===================================

// console.log(axios);




document.querySelector('#multilevel-panel-open').onclick = function(e) {
	// this.classList.toggle('on');
	document.documentElement.classList.toggle('lock');
}

document.addEventListener('DOMContentLoaded', () => {

	console.log(Locations);
	var  locs = new Locations().events();


	if(document.getElementById('callback-phone') !== null){
		var phoneMask = IMask(document.getElementById('callback-phone'), {
			mask: '+{7} (000) 000-00-00'
		});
		
	}

	// micromodal
	if(document.querySelector('.modal') !== null){
		MicroModal.init({
			openTrigger: 'data-micromodal-open', 
			closeTrigger: 'data-micromodal-close',
			openClass: 'is-open', 
			disableFocus: true, 
			awaitOpenAnimation: true,
			awaitCloseAnimation: true,
			disableScroll: true,
			onShow: modal => {
				// console.log(arguments)
				// при disableScroll: true для компенсации ширины скроллбара (фикс "прыгания" страницы влево)
				document.querySelector('#wrapper-for-scroll-fix').classList.add('modal-open');
			}, // [1]
			onClose: modal => {
				// console.info(`${modal.id} is hidden`);
				// при disableScroll: true для компенсации ширины скроллбара (фикс "прыгания" страницы влево)
				// setTimeout(() => {
					document.querySelector('#wrapper-for-scroll-fix').classList.remove('modal-open');

				// }, 1000);
			}
		});		
	}
	// END micromodal


	// for many Sliders
	if(document.querySelector('.range-slider') !== null){
		var readySlidersArr = [];//массив всех слайдеров для доступа программно
			
			Array.prototype.slice.call(document.querySelectorAll('.range')).forEach(function(rangeBlock) {
				var slider = rangeBlock.querySelector('.range-slider'),
						inputMin = rangeBlock.querySelector('#minval'),
						inputMax = rangeBlock.querySelector('#maxval'),
						widthKeff = 10,
						
						noUi =noUiSlider.create(slider, {
							connect: true,
							behaviour: 'tap',
							tooltips: slider.dataset.units ? true : false,
							start: [Number(inputMin.value), Number(inputMax.value)],
							range: {
								min: 0,
								max: Number(slider.dataset.maxval) 
							},
							format: {
			        // 'to' the formatted value. Receives a number.
								to: function (value) {
									return slider.dataset.units ? Math.ceil(Number(value)) + ' ' + slider.dataset.units : Math.ceil(Number(value));
								},
			        // 'from' the formatted value.
			        // Receives a string, should return a number.
								from: function (value) {
									return Math.ceil(Number(value.replace(',-', '')));
								}
							}
						});

						slider.noUiSlider.on('update', getValues);
						slider.noUiSlider.on('set', getValues);

						function getValues() {
							console.log(slider.noUiSlider.get()[0])
							inputMin.value = (slider.noUiSlider.get()[0]);
							inputMax.value = (slider.noUiSlider.get()[1]);			
							inputMin.style.width = ((inputMin.value.length + 1) * widthKeff) + 'px';
							inputMax.style.width = ((inputMax.value.length + 1) * widthKeff) + 'px';
						}

						inputMax.addEventListener('change', function() {
							slider.noUiSlider.set([null, +inputMax.value]);
							// this.style.width = ((this.value.length + 1) * widthKeff) + 'px';
						});
						inputMin.addEventListener('change', function() {
							console.log('min change!')
							slider.noUiSlider.set([+inputMin.value, null]);
							// this.style.width = ((this.value.length + 1) * widthKeff) + 'px';
						});
					readySlidersArr.push(noUi);
			});

		}
		// END noUiSlider

	document.onclick = function(e) {
		var target = e.target;

		// desktop catalog toggle
		if(screen.width >= 991){
			if(target.classList.contains('catalog-menu__item') || target.parentElement.classList.contains('catalog-menu__item')){
				if(target.parentElement.classList.contains('with-submenu')){
					e.preventDefault();
					document.querySelector('.catalog').classList.toggle('catalog-opened');
					target.parentElement.classList.toggle('catalog-item-opened');
					srvFuncs.siblings(target.parentElement).forEach(item => item.classList.remove('catalog-item-opened'));
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
			allowTouchMove: false,
			fadeEffect: {
			    crossFade: true
			  },
			effect: 'fade',
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


	if(document.querySelector('.product-view__screen') !== null && document.querySelector('.product-view__nav') !== null){
		var navSwiper = new Swiper('.product-view__nav', {
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 15,
			parallax: true,
			//autoHeight: true,
			//speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
		  // direction: 'vertical',
			loop: true

		});
		var screenSwiper = new Swiper('.product-view__screen', {

			// effect: 'fade',
			// fadeEffect: {//при отсутствии плавного перехода - расскомментировать соотв-ю. строку в adjustment.scss
			// 	crossFade: true
			// },

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			//spaceBetween: 0,
			//autoHeight: true,
			//speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
		  // direction: 'vertical',
			loop: true,
			thumbs: {
				swiper: navSwiper
			}

		});

	}



//---------------END Swiper

	tippy('[data-tippy-content]');
	tippy('#product-tippy', {
		theme: 'zlatmax', 
		maxWidth: 'none',
		allowHTML: true,
		// content: '<div class="pizdyk">Pizduk</div>',
		// trigger: 'click',
		content: (reference) => `<div class="points-tooltip">${reference.getAttribute('tooltip-title')}</div>`,
		offset: [150, 15]
	});


	if(document.querySelector('.footer__form') != null){
		new FormHandler({
			form: {
				block: '.form-footer',
				submit: '.form-footer__submit'
			},
			fields: {
				email: {
					validation: 'isEmail',
					notice: {
						message: 'Нужен правильный емейл адрес',
			      		 appendTo: '.field-notice',
			      		 nextToField: false
					}
				},
				checkbox: {
			      validation: 'isCheckboxChecked',
			      notice: {
						message: 'Нужно ваше согласие с условиями',
			      		 appendTo: '.check-notice',
			      		 nextToField: false
					}
			    }
			},
			 sender: {
			    send: true
			 },
			 callbacks: {
			  	
			  	onSubmit(form, fields) {
			  		console.log('onSubmit', form, fields);
			  	},
			  	onSend(result) {
			  		console.log('onsend', result);
			  	}
			  }
		});
		// console.log(pizdyk)

	}

	if(document.querySelector('.modal') != null){
		new FormHandler({
			form: {
				// block: '.callback-form',
				// submit: '.callback-form__submit'
			},
			// block: '.callback-form',
			fields: {
				firstname: {
					validation: 'isName',
					notice: {
						message: 'Необходимо ввести свое имя',
			      		 appendTo: '.callback-field-notice',
			      		 nextToField: false
					}
				},
				phone: {
					validation: 'isPhone',
					notice: {
						message: 'Нужен правильный номер телефона',
			      		 appendTo: '.callback-phone-notice',
			      		 nextToField: false
					}
				},
				checkbox: {
			      validation: 'isCheckboxChecked',
			      notice: {
						message: 'Нужно ваше согласие с условиями',
			      		appendTo: '.callback-check-notice',
			      		 nextToField: false
					}
			    }
			},
			 sender: {
			    send: true
			 }
		});
		// console.log(piska)

	}

}); //DOMContentLoaded