<?php

$x = array();
$y = array();
$x[1]=$_POST["x1"];
$y[1] = $_POST ["y1"];
$x[2] = $_POST ["x2"];
$y[2] = $_POST ["y2"];
$x[3] = $_POST ["x3"];
$y[3] = $_POST ["y3"];
$x[4] = $_POST ["x4"];
$y[4] = $_POST ["y4"];
$x[5] = $_POST ["x5"];
$y[5] = $_POST ["y5"];
$xc = $_POST ["xc"];
$yc = $_POST ["yc"];
$R = $_POST ["R"];
for($i=1;$i<=5;$i++)
{
	if(($x[$i]-$xc)*($x[$i]-$xc)+ ($y[$i]-$yc)*($y[$i]-$yc)<=$R*$R)
	{
		echo $i." ";
		
	}
}echo "<br>";
for($i=1;$i<=5;$i++)
{
	if( ($x[$i]-$xc)*($x[$i]-$xc)+ ($y[$i]-$yc)*($y[$i]-$yc)>$R*$R)
	{
		echo $i." ";
		;
	}
}echo "<br>"


?>