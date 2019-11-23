<?php defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/API_Controller.php';

class users extends API_Controller
{
    public function __construct() {
        parent::__construct();
        $this->load->model('users_model', 'usersmodel');
    }
    public function getUsers(){
        $id = $_GET;
        $result = $this->usersmodel->get($id);
        if(!empty($result)){
            $this->api_return(
                [
                    "data"=>$result
                ], 200
            );
        }else{
            $this->api_return(
                [
                    "data" => "Data Kosong"
                ], 400
            );
        }
        
    }
    Public function insertUsers(){
        $post = json_decode($this->input->raw_input_stream);
        $data = $this->usersmodel->insert($post);
        if($data){
            $this->api_return(
                [
                    'status' => true,
                ], 
                200); 
        }else{
            $this->api_return(
                [
                    'status' => false,
                ], 400);
        }
   }
    public function updateUsers(){
        $data = json_decode($this->input->raw_input_stream);
        $result = $this->usersmodel->update($data);
        if($result){
            $this->api_return(
                [
                    'status' => true,
                ], 
                200); 
        }else{
            $this->api_return(
                [
                    'status' => false,
                ], 400);
        }  
    }
    public function deleteUsers(){
        $id = $_GET;
        $result = $this->usersmodel->delete($id);
        if($result){
            $this->api_return(
                [
                    'status' => true
                ], 200
            );
        }else{
            $this->api_return(
                [
                    'status' => false
                ],400
            );
            }
    }
}




?>