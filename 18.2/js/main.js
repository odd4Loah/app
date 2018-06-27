let app = new Vue ({
    el:'#app',
    data: {
        foodList: [
            {
                name: '葱',
                price: '5',
                discount: '.75'
            },
            {
                name: '姜',
                price: '10',
                discount: '.4'
            },
            {
                name: '蒜',
                price: '12',
            },
        ],

    },
});