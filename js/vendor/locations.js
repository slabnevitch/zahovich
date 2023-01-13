const axios = require('axios');
function Locations() {
	var urls = {
			rus: 'https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia',
			ukr: 'https://gist.githubusercontent.com/alex-oleshkevich/1509c308fabab9e104b5190dab99a77b/raw/b20bd8026deec00205a57d395c0ae1f75cc387bb/ua-cities.json'
		},
		button = document.querySelector('.header__loc'),
		countriesSelect = document.getElementById('countries'),
		citiesSelect = document.getElementById('cities'),
		preloader = document.querySelector('.modal-loc__preloader'),
		citiesArrays ={
			rus: null,
			ukr: null
		},
		_self = this;

		this.events = () => {
			button.addEventListener('click', this.buttonClick);
		},
		this.buttonClick = (e) => {
			this.availableCheck();
		},
		this.availableCheck = () =>{
			if(citiesArrays[countriesSelect.value] == null ){
				this.getCities(countriesSelect.value);
			}
		},
		this.render = (cities) => {
			[...cities].forEach((item, i) => {
				// console.log(i + "--" + item.city)
				var opt = document.createElement('option');
				opt.setAttribute('value', i);
				citiesSelect.append(opt);

			});
			citiesSelect.classList.add('fstdropdown-select');
			citiesSelect.setFstDropdown();
		}
		this.getCities = async function(value){
			try {
				const response = await axios.get(urls[value]);
				preloader.style.display = "none";
				console.log(response.data);
				citiesArrays[countriesSelect.value] = response.data;
				this.render(citiesArrays[countriesSelect.value]);
			
			} catch (error) {
				console.error(error);
			}

		}
};

	
module.exports = Locations;