<?php

/**
 * Class to test connexion access
 */
class connexionDAO extends DAO
{
  protected $table = "component";

  public function getAll() {
    $stmt = $this->pdo->prepare("SELECT name FROM $this->table");
    $stmt->execute();
    $res = array();
    foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row){
        $res[] = $row;
    }
    echo json_encode($res);
  }
}
 ?>
