/**
 * Created by lihoo on 2018/6/27.
 */
'use strict';
Vue.config.productionTip = false;

let base = {
	methods: {
		show: function () {
			this.visible = true;
		},
		hide: function () {
			this.visible = false;
		},
		toggle: function () {
			this.visible = !this.visible;
			},

	},
	data: function ()  {
		return {
			visible: false,
		}
	},
};

Vue.component('tooltip',{
	template: `
	<div>
		<span @mouseenter="show" @mouseleave="hide">bys</span>
		<div v-if="visible">
			毕业生
		</div>
	</div>
	`,
	mixins: [base],


	// data: function ()  {
	//     return {
	//     	visible: true,
	//   }
	// }
	// methods: {
	// 	show: function () {
	// 		this.visible = true;
	// 	},
	// 	hide: function () {
	// 		this.visible = false;
	// 	},
	//
	// },
	// data: function ()  {
	//     return {
	//     	visible: false,
	//   }
	// }
});

Vue.component('popup',{
	template: `
	<div>
		<button @click="toggle">PoPup</button>
		<div v-if="visible">
		<span @click="hide">把他给我关咯</span>
		<h4>title</h4>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur earum enim illo minus sapiente unde, veniam veritatis? Accusamus alias aut deleniti dolorem esse fuga fugiat ipsam maxime suscipit ullam?
		</div>
	</div>
	`,

	mixins: [base],

	// methods: {
	// 	toggle: function () {
	// 		this.visible = !this.visible;
	// 	},
	// 	hide: function () {
	// 		this.visible = false;
	// 	},
	//
	// },
	// data: function ()  {
	//     return {
	//     	visible: false,
	//   }
	// }
});



new Vue({
	el: '#app',
	data: {

	}
});
