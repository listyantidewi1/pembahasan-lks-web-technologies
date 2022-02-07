<?php
$arr1 = array("Tree", "Grass", "Bird", "Water", "Cloud", "Sun");
$arr2 = array("Moon", "Star", "Cloud", "Butterfly", "Bird");
$arr_common= array_intersect($arr1, $arr2);
print_r($arr_common);
 
?>