function contarPalabra($frase,$filtro){
    $w=array_count_values(explode(' ',preg_replace("/[^A-Za-z ]/", '', $frase)));
    return array_intersect_key($w, array_flip($filtro));
}

$frase='hola mariana, hola manuela, hola sol, adios marta, adios'; //"aqui se cambian los valores"

$cuenta = contarPalabra( $frase, ['gato']);

var_export($cuenta);