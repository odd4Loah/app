/**
 * Created by lihoo on 2018/6/27.
 */
'use strict';

Vue.filter('meter', function (value, unit) {
	value = value || 0;
	unit = unit || 'm';
	return (value / 1000).toFixed(2) + unit;
},
	function ()  {
	    return {

	  }
	}

);


Vue.filter('currency', function (value, unit) {
	value = value || 0;
	unit = unit || '元';
	return value + unit;
});


// Vue.component('', {});


new Vue({
	el: '#app',
	data: {
		price: 100,
		length: 10,
	}
});
