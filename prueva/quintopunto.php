<?php
$words=['hola','adios'];
$frase='hola manuela, hola marta, hola sol, adios camila, adios';  //"aqui se cambian los valores"

echo '<hr>';
$cuenta = contarPalabra( $frase, ['hola']);
var_export($cuenta);


?>