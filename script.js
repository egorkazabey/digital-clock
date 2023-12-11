'use strict';

const hours = document.querySelector('.clock-hours'),
      minutes = document.querySelector('.clock-minutes'),
	  seconds = document.querySelector('.clock-seconds');

const date = new Date();


	function clock() {
	hours.innerHTML = date.getHours();
	minutes.innerHTML =  date.getMinutes();
	seconds.innerHTML =  date.getSeconds();
	}

	clock()
	