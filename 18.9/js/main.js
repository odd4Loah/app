/**
 * Created by lihoo on 2018/6/26.
 */

// Vue.component('alert', );

let alert_component = {
    template: '<button @click="on_click">弹弹弹</button>',
    methods: {
        on_click: function () {
            alert('huYA');
        }
    }
};

new Vue({
    el:'#seg1',
    components: {
        alert: alert_component,
    }
});