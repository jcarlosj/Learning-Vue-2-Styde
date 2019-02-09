$( document ) .ready( function() {

  function restartForm() {
    $( '#btn_continue' ) .attr( 'disabled', 'disabled' );   // Deshabilita el botón "Continuar"
    $( 'form :input' ) .val( '' );                          // Limpia los campos
  }

  function isFormValid() {
    return $( '#first_name' ) .val() != '' && $( '#last_name' ) .val() != '';
  }

  //Alterna acción de Habilitar/Deshabilitar Botón "Continuar"
  function toggleEnableContinue() {
    // Valida que los campos no estén vacíos
    $( '#btn_continue' ) .prop( 'disabled', !isFormValid() );
  }

  restartForm();

  // Lee la interacción con el teclado
  $( '#first_name, #last_name' ) .keyup( toggleEnableContinue );

  $( '#form_register' ) .submit( function( event ) {
    event .preventDefault();           // Evita la recarga al envio de los datos

    if( !isFormValid() ) return;        // Detiene la ejecución si el formulario no es válido

    $( '#register, .card-title, .card-subtitle' ) .hide();
    $( '#welcome' ) .show();

    $( '#welcome h4' ) .text(
      'Bienvenido, ' + $( '#first_name' ) .val() + ' ' + $( '#last_name' ) .val()
    );
  });
});
