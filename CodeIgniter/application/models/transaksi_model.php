<?php
class transaksi_model extends CI_model
{
    public function Get($No){
        if ($No != null){
        $this->db->where('NoStt', $No['NoStt']);
        $result = $this->db->get('transaksi');
        return $result->db->query("SELECT `transaksi`.*,
        `pengirim`.*, 
        `penerima`.*, 
        `barang`.*,
      FROM
        `transaksi`
        INNER JOIN `pengirim` ON `pengirim`.`idPengirim` = `transaksi`.`idPengirim`
        INNER JOIN `penerima` ON `penerima`.`idPenerima` = `transaksi`.`idPenerima`
        INNER JOIN `barang` ON `barang`.`NoDo` = `transaksi`.`NoDo`");
    }
    else{
        $result = $this->db->get('transaksi');
        return $result->db->query("SELECT `transaksi`.*,
        `pengirim`.*,
        `penerima`.*,
        `barang`.`NoDo`
      FROM
        `transaksi`
        INNER JOIN `pengirim` ON `pengirim`.`idPengirim` = `transaksi`.`idPengirim`
        INNER JOIN `penerima` ON `penerima`.`idPenerima` = `transaksi`.`idPenerima`
        INNER JOIN `barang` ON `barang`.`NoDo` = `transaksi`.`NoDo`");
     }
    }

    public function insert($data){
        $result = $this->db->insert('transaksi', $data);
        return $result;
    }

    public function update($data){
        $this->db->where("NoStt", $data->NoStt);
        $result = $this->db->update('transaksi', $data);
        return $result;
    }

    public function delete($No){
        $result = $this->db->where('NoStt', $No['NoStt']);
        $result = $this->db->delete('transaksi');
        return $result;
    }
}


?>