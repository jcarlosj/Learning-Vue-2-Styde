// Code Vue
let vm = new Vue({
  el: '#app',     // Elemento donde funcionará nuestra Aplicación
  data: {         // Inicializamos los valores (inputs)
    // Se enlazan al DOM usando la directiva v-model (agregando comportamiento reactivo al DOM)
    first_name: '',
    last_name: '',
    nameProject: 'Styde'
  },
  computed: {     // Forma de definir propiedades dinámicas en Vue
    reversedName: function() {
      return ( this .first_name + ' ' + this .last_name ) .split( '' ) .reverse() .join( '' );
    }
  }
});

// Asignamos un nombre por defecto
vm .first_name = "<h2>Elisa</h2>";
vm .last_name = "Giraldo";
