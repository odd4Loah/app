/**
 * Created by lihoo on 2018/6/26.
 */
 let app = new Vue({
    el: '#app',
    methods: {
        onClick: function () {
            console.log('clicked');
        },
        onEnter: function () {
            console.log('mouse Enter');
        },
        onOut: function () {
            console.log('mouse Leave');
        },
        onSubmit: function () {
            console.log('submitted');
        },
        onKeyUp: function () {
            console.log('key pressed');
        },
        onEnnnnnter: function () {
            console.log('on enter key');
        },
    }
});