/**
 * Created by lihoo on 2018/6/26.
 */

Vue.component('user', {
	template: '<a :href="\'/user/\'+ username">@{{username}}</a>',
	props: ['username'],
	methods: {},
});

 new Vue ({
	 el: '#app',

 });