// Code Vue
let vm = new Vue({
    el: '#app',
    data: {
        new_task: '',
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
    },
    methods: {
        createTask: function() {
            if( this .new_task .trim() .length ) {
                this .tasks .push({
                    title: this .new_task,
                    pending: true
                });
                this .new_task = '';
            }
        }
    }
});
