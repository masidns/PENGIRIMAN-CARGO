<?php
class pembayaran_model extends CI_model
{
    public function Get($id){
        if ($id != null){
        $this->db->where('idPembayaran', $id['idPembayaran']);
        $result = $this->db->get('pembayaran');
        return $result->result_array();
    }
    else{
        $result = $this->db->get('pembayaran');
        return $result->result_array();
     }
    }

    public function insert($data){
        $result = $this->db->insert('pembayaran', $data);
        return $result;
    }

    public function update($data){
        $this->db->where("idPembayaran", $data->idPembayaran);
        $result = $this->db->update('pembayaran', $data);
        return $result;
    }

    public function delete($id){
        $result = $this->db->where('idPembayaran', $id['idPembayaran']);
        $result = $this->db->delete('pembayaran');
        return $result;
    }
}


?>