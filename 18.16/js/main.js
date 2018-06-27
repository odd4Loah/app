/**
 * Created by lihoo on 2018/6/27.
 */
'use strict';
Vue.config.productionTip = false;


Vue.directive('pin', function (el, binding,) {
	let pinned = binding.value;
	// console.log('val:', val);
	let position =binding.modifiers;
	// console.log('position:', position);
	let warning = binding.arg;

	if (pinned) {
		el.style.position = 'fixed';
		for (let key in position) {
			if (position[key]) {
				el.style[key] = '10px';
			}
		}
		
		if (warning === 'true') {
			el.style.backgroundColor = 'yellow';
		} else {
			el.style.backgroundColor = 'red';
		}
		// el.style.top = '10px';
		// el.style.left = '10px';
	} else {
		el.style.position = 'static';
	}
});
// Vue.component('', {});


new Vue({
	el: '#app',
	data: {
		card1: {
			pinned: false,
		},
		card2: {
			pinned: false,
		},
	}
});
