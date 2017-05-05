<?php
	require_once "DAO.php";
	require_once "MaBD.php";
	require_once "ConnexionDAO.php";

	// Instanciation d'un objet MaBdDao
	$maBD = new ConnexionDAO( MaBD::getInstance () );

  $res = $maBD->getAll();
  echo $res

?>
