<?php
header("Content-type:application/json");
$obj = (object) [];
$obj->nombre = (string) "Stiven";
$obj->apellido = (string) "Carvajal";
$obj->edad = (integer) 24;

echo json_encode ($obj);
?>