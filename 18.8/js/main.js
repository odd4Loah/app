/**
 * Created by lihoo on 2018/6/26.
 */
 const app = new Vue ({
    el: '#app',
    data: {
        math: 97,
        english: 28,
        PE: 55,
    },
    computed: {
        sum: function () {
            return this.math + this.english + this.PE;
        },
        average: function () {
            return Math.round(this.sum / 3);
        },

    },
    methods: {

    },
});