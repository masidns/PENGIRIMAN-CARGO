<?php
class transaksi_model extends CI_model
{
    public function Get($No){
        if ($No != null){
        $this->db->where('NoStt', $No['NoStt']);
        $result = $this->db->get('transaksi');
        return $result->result_array();
    }
    else{
        $result = $this->db->get('transaksi');
        return $result->result_array();
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