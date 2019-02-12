// Code Vue
let vm = new Vue({
    el: '#app',
    data: {
        vue: {
            experience: null,
            years: 0,
            description: ''
        }
    },
    computed: {
        descriptionError: function() {
            let value = this .vue .description .trim();     // Obtiene el valor del campo

            if( value == '' ) {
                return 'El campo es obligatorio';
            }
            else if( value .length < 15 ) {
                return 'La descripción debe tener mínimo 15 caracteres';
            }
            else if( value .length > 140 ) {
                return 'La descripción puede tener máximo 140 caracteres';
            }
            else {
                return null;
            }

        }
    }
});
