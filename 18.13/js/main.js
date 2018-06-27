/**
 * Created by lihoo on 2018/6/27.
 */
'use strict';
let Event =new Vue();

Vue.component('huahua', {
	template: `
		<div>
			我说： <input @keyup="on_change" v-model="i_said">
		</div>`,
	methods: {
		on_change: function () {
			Event.$emit('huahua-said-something', this.i_said);
		}
	},
	data: function () {
		return {
			i_said: '',
		}
	},
});
Vue.component('qiqi', {
	template: `<div>花花说： {{qiqi_said}}</div>`,
	data: function () {
		return {
			qiqi_said: '',
		}
	},
	mounted: function () {
		let me = this;
		Event.$on('huahua-said-something', function (data) {
			console.log('data:', data);
			// console.log('this', this);
			// console.log(me);
			me.qiqi_said = data;
		})
	}
});


new Vue({
	el: '#app',
});
