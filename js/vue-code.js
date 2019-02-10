// Nueva instancia de Vue
let vm = new Vue({
  el: '#app',     // Elemento donde funcionará nuestra Aplicación
  data: {         // Inicializamos los valores (inputs)
    // Se enlazan al DOM usando la directiva v-model (agregando comportamiento reactivo al DOM)
    first_name: '',
    last_name: '',
    formSubmited: false
  },
  methods: {
    isFormValid: function() {
      return this .first_name != '' && this .last_name != '';
    },
    submitForm: function() {          // Se enlaza esta acción al formulario usando la directiva v-on
      if( ! this .isFormValid() ) return;    // Si el formulario no es válido detiene la ejecución
      this .formSubmited = true;
    }
  }
});

// Asignamos un nombre por defecto
vm .first_name = "Elisa";
vm .last_name = "Giraldo";
