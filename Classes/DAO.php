<?php
/* Classe abstraite pour l'accès aux données d'une base
 */

class DAO {
    const UNKNOWN_ID = -1; // Identifiant non déterminé
    protected $pdo; // Objet pdo pour l'accès à la table

    protected $table; // Nom de la table dans la base

    // Le constructeur reçoit l'objet PDO contenant la connexion
    public function __construct(PDO $connector) { $this->pdo = $connector; }

    // Ajout de l'objet dans la base
    public function insert($obj) {
			$fieldList = "";
			$valueList = array();
			$textRequete = "";

			foreach ($obj as $key => $value) {
				$fieldList = $fieldList."$key, ";
				array_push($valueList,$value);
				$textRequete = $textRequete."?, ";
			}
			$fieldList = substr($fieldList, 0, -2);
      $textRequete = substr($textRequete, 0, -2);

			$stmt = $this->pdo->prepare ( "INSERT INTO $this->table ($fieldList) VALUES ($textRequete)" );
			$res = $stmt->execute ($valueList);
		}
}
?>
