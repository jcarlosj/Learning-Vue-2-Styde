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
        email: 'anamfernandezc@correo.co',
        salary: 2500
    },
    methods: {
        // Se ejecuta siempre al cambio de cualquier propiedad en la vista
        reverse: function( value ) {
            console .log( 'Method!' );
            return value .split( '' ) .reverse() .join( '' );
        }
    },
    filters: {
        // Se ejecuta siempre al cambio de cualquier propiedad en la vista
        reversed: function( value ) {
            console .log( 'Filter!' );
            return value .split( '' ) .reverse() .join( '' );
        }
    },
    computed: {
        // Se ejecutan los 'computed properties' solo cuando hace falta
        reversedName: function() {
            console .log( 'Computed!', Math .random( 2 ) );
            this .salary;                                               // En este caso cuando afectamos a esta propiedad (aunque no hacemos nada con ella, pero esta incluida y eso hace que se ejecute de nuevo este 'computed property' cuando es afectada en la vista)
            return this .name .split( '' ) .reverse() .join( '' );      // En este caso cuando afectamos a esta propiedad
            // NOTA: En este caso se puede afirmar que: las propiedades this .salary y this .name
            //       son dependencias de la 'computed property' reversedName y cuando estas sean
            //       afectadas en la vista, entonces la 'computed property' se re-ejecutará.
            //       Solo se ejecuta siempre al cambio de cualquier propiedad en la vista definida 
            //       dentro de cualquier 'computed property'
        }
    }
    // NOTA:
    //   - Las computed properties y los filtros tienen en común que sirven para transformar datos
    //   - No cambiar el valor de una propiedad dentro de un filtro o una computed property
    //   - Para agregar nuevos datos o cambiarlos, la mejor práctica es hacer esto dentro de un método
});
