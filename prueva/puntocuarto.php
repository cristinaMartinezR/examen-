<?php

$elementos = array ("carro","celular","audifinos","mientras","crear","consola","otro","nivel"); //"aqui se cambian los valores"

echo"<pre>";
print_r ($elementos);
echo"<pre>";

sort($elementos,SORT_REGULAR);

echo"<pre>";
print_r ($elementos);
echo"<pre>";


?>