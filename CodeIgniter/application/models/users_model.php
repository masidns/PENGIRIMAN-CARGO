<?php
class users_model extends CI_model
{
    public function Get($id){
        if ($id != null){
            $this->db->where('id', $id['id']);
            $result = $this->db->get('users');
            return $result->result_array();
        }
        else{
            $result = $this->db->get('users');
            return $result->result_array();
        }
    }
    public function insert($data){
        $result =$this->db->insert('users', $data);
        return $result;
    }
    public function update($data){
        $this->db->where("id", $data->id);
        $result = $this->db->update("users", $data);
        return $result;
    }
    public function delete($id){
        $result = $this->db->where('id', $id['id']);
        $result = $this->db->delete('users');
        return $result;
    }
    
}
?>
