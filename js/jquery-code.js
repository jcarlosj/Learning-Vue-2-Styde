$( document ) .ready( function() {

  // Deshabilita el botón "Continuar"
  $( '#btn_continue' ) .attr( 'disabled', 'disabled' );

  // Limpia los campos
  $( 'form :input' ) .val( '' );

  //Alterna Habilita Continua
  function toggleEnableContinue() {

    // Valida que los campos no estén vacíos
    if( $( '#first_name' ) .val() != '' && $( '#last_name' ) .val() != '' ) {
      $( '#btn_continue' ) .removeAttr( 'disabled' );         // Habilita el botón "Continuar"
    }
    else {
      $( '#btn_continue' ) .attr( 'disabled', 'disabled' );   // Deshabilita el botón "Continuar"
    }

  }

  // Lee la interacción con el teclado
  $( '#first_name, #last_name' ) .keyup( toggleEnableContinue );

  $( '#form_register' ) .submit( function( event ) {
    event .preventDefault();           // Evita la recarga al envio de los datos

    $( '#register, .card-title, .card-subtitle' ) .hide();
    $( '#welcome' ) .show();

    $( '#welcome h4' ) .text(
      'Bienvenido, ' + $( '#first_name' ) .val() + ' ' + $( '#last_name' ) .val()
    );
  });
});
