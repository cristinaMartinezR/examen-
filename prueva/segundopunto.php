<?php

$array =array(1,2,3,4,5,6);  //"aqui se cambian los valores"

function num($array){
    $mayor=0;
    $menor=0;
    foreach($array as $key){
        if ($mayor < $key){
            $mayor= $key;
        }
        if ($menor> $key){
            $menor=$key;
        }
    }


echo "el mayor es:".$mayor."</br>";
}

?>