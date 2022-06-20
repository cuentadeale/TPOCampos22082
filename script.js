
  function validarFormulario() {
                  
  if (document.formulario.nombre.value.length == 0) {
      alert("Tiene que escribir su nombre")
      document.formulario.nombre.focus()
      return 0;
  }

  if (document.formulario.telefono.value.length < 6) {
      alert("Escriba un telefono valido")
      document.formulario.telefono.focus()
      return 0;
  }


    if (document.formulario.email.value.length == 0) {
      alert("Escriba un email valido")
      document.formulario.email.focus()
      return 0;
  }

  if (document.formulario.mensaje.value.length == 0) {
      alert("Tiene que escribir su mensaje")
      document.formulario.mensaje.focus()
      return 0;
  }

   alert("Muchas gracias por enviar el formulario");
  document.formulario.submit();


  }





