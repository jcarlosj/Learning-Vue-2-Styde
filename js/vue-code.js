// Nueva instancia de Vue
new Vue({
  el: '#app',     // Elemento donde funcionará nuestra Aplicación
  data: {         // Inicializamos los valores (inputs)
    // Se enlazan al DOM usando la directiva v-model (agregando comportamiento reactivo al DOM)
    first_name: '',
    last_name: ''
  },
  methods: {
    isFormValid: function() {
      return this .first_name != '' && this .last_name != '';
    }
  }
});
