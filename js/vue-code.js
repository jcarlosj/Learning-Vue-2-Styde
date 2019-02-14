// Code Vue
let vm = new Vue({
    el: '#app',
    data: {
        tasks: [
            {
                title: 'Técnicas de Autorización con Laravel',
                pending: false
            },
            {
                title: 'Métodos de Autentización con Laravel',
                pending: true
            },
            {
                title: 'Crea una aplicación con Laravel',
                pending: true
            }
        ]
    },
    computed: {
        pendingTasks: function() {
            return this .tasks .filter( function( item ) {
                return item .pending;
            });
        }
    }
});
