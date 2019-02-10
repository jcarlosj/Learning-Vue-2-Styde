// Code Vue
let vm = new Vue({
  el: '#app',     // Elemento donde funcionará nuestra Aplicación
  data: {         // Inicializamos los valores (inputs)
    // Se enlazan al DOM usando la directiva v-model (agregando comportamiento reactivo al DOM)
    first_name: '',
    last_name: '',
    team: true
  }
});

// Asignamos un nombre por defecto
vm .first_name = "Elisa";
vm .last_name = "Giraldo";
