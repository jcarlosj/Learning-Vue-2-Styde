// Code Vue
let vm = new Vue({
    el: '#app',
    data: {
        name: 'Ana María Fernández C',
        gender: 'female'
    },
    filters: {
        upper: function( value ) {
            return value .toUpperCase();
        },
        title: function( value ) {
            return `Mrs. ${ value }`;
        }
    }
});
