/**
 * Created by lihoo on 2018/6/27.
 */
'use strict';
Vue.config.productionTip = false;


Vue.directive('pin',function (el, binding,) {
	 let pinned = binding.value;
	 // console.log('val:', val);
	 if (pinned) {
		el.style.position = 'fixed';
		el.style.top = '10px';
		el.style.left = '10px';
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
