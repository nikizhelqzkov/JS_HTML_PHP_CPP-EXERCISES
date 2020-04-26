<?php
$x = array();
$y = array();
$x[1] = $_POST["x1"];
$x[2] = $_POST["x2"];
$x[3] = $_POST["x3"];
$x[4] = $_POST["x4"];
$x[5] = $_POST["x5"];
$y[1] = $_POST["y1"];
$y[2] = $_POST["y2"];
$y[3] = $_POST["y3"];
$y[4] = $_POST["y4"];
$y[5] = $_POST["y5"];
$xc = $_POST["xc"];
$yc = $_POST["yc"];
$r = $_POST["r"];

for($i=1;$i<=5;$i++)
{
	if(($x[$i]-$xc)*($x[$i]-$xc)+($y[$i]-$yc)*($y[$i]-$yc)<=$r*$r)
		echo $i." ";
}
echo "<br>";
for($i=1;$i<=5;$i++)
{
	if(($x[$i]-$xc)*($x[$i]-$xc)+($y[$i]-$yc)*($y[$i]-$yc)>$r*$r)
		echo $i." ";
}
echo "<br>";
?>
