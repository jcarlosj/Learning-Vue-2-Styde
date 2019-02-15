// Define filtros globales
Vue .filter( 'capital', function( value ) {
    return value .charAt( 0 ) .toUpperCase() + value .slice( 1 );
});
Vue .filter( 'money', function( value ) {
    return numeral( value ) .format( '$ 0,0.00' );
});
// Code Vue
let vm = new Vue({
    el: '#app',
    data: {
        name: 'Ana María Fernández C',
        gender: 'female',
        salary: 2500
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
