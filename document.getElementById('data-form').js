document.getElementById('data-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
  // Obtén los valores ingresados en los campos de entrada
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  var pin = document.getElementById('pin').value;
  
  // Crea un objeto con los datos
  var data = {
    phone: phone,
    password: password,
    pin: pin
  };
  
  // Guarda los datos en un documento (por ejemplo, un archivo CSV, JSON o una base de datos remota)
  // Aquí tienes un ejemplo de cómo guardar los datos en un archivo CSV usando JavaScript:
  var csvData = Object.values(data).join(',') + '\n'; // Crea una línea de datos separados por comas
  
  // Código para guardar los datos en un archivo o enviarlos a un servidor
  // Aquí hay un ejemplo básico utilizando el API fetch para enviar los datos a un servidor remoto:
  fetch('https://example.com/save-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/csv'
    },
    body: csvData
  })
  .then(function(response) {
    if (response.ok) {
      alert('Los datos se han guardado correctamente.');
    } else {
      alert('Ocurrió un error al guardar los datos. Por favor, inténtalo de nuevo.');
    }
  })
  .catch(function(error) {
    console.error('Error al guardar los datos:', error);
    alert('Ocurrió un error al guardar los datos. Por favor, inténtalo de nuevo.');
  });
});
