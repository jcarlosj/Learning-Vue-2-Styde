// Code Vue
let vm = new Vue({
  el: '#app',     // Elemento donde funcionará nuestra Aplicación
  data: {         // Inicializamos los valores (inputs)
    // Se enlazan al DOM usando la directiva v-model (agregando comportamiento reactivo al DOM)
    first_name: '',
    last_name: '',
    isGreeting: false
  },
  methods: {
    sayHello: function() {
      console .log( 'Saludo con Vue 2' );
      return `Hola, ${this .first_name} ¿Cómo estas?`;
    }
  }
});

// Asignamos un nombre por defecto
vm .first_name = "Elisa";
vm .last_name = "Giraldo";

// Code jQuery
$( document ) .ready( function() {

  // Mensaje de Bienvenida
  $( 'h4.jq-saludo' ) .text(
    'Bienvenido, ' + vm .first_name + ' ' + vm .last_name   // Usando los valores asignados con Vue
  );

  // Saludo al hacer click en el botón
  $( '.btn_saludar' ) .click( function() {
    console .log( 'Saludo con jQuery' );
    $( 'h4.jq-saludo' ) .text( 'Hola, ' + vm .first_name + ' ¿Cómo estas?' );   // Usamos la propiedad definida por Vue en jQuery
  });
});
