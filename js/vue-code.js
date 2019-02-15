// Define filtro de forma global
Vue .filter( 'capital', function( value ) {
    return value .charAt( 0 ) .toUpperCase() + value .slice( 1 );
});
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
        },
        greeting: function( value, greet ) {
            return `${ greet } ${ value }`;
        }
    }
});
