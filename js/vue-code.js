// Code Vue
let vm = new Vue({
    el: '#app',
    data: {
        name: 'Ana María Fernández C'
    },
    filters: {
        upper: function( value ) {
            return value .toUpperCase();
        }
    }
});
