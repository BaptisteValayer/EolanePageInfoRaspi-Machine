<?php

	// Autochargement des classes
	function __autoload($class) {
		require_once "Classes/$class.php";
	}
	//$maBD = new MaBdDao ( MaBD::getInstance () );
	if(isset($_GET['tab'])){print_r($_GET['tab']);}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="fusioncharts-jquery-plugin-master/src/jquery-fusioncharts.js"></script>
	<script type="text/javascript" src="fusioncharts-jquery-plugin-master/package/fusioncharts-jquery-plugin.min.js"></script>
	<script src="js/pageAffiche.js"></script>
</head>
<body>
	<div id="chart-container">
  	FusionCharts will render here
 </div>
</body>
</html>
