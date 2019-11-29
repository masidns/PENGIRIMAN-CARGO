(function (angular){
    'use strict'
    angular.module("MyController", [])
    .controller("HomeController", function ($scope, $http){
        
    })

    //controller pengirim
    .controller("PengirimController", function ($scope, $http) {
        $scope.DatasPengirim = [];
        $scope.input = {};
        $scope.status="Simpan";
        $http({
            method: "get",
            url: "http://localhost/cargo/CodeIgniter/pengirim",
            header: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            $scope.DatasPengirim = response.data.data;
        }, function (error) {
            alert(error.message);
        })

        $scope.Simpan = function(){
            if ($scope.status=="Simpan"){
                $http({
                    method: "POST",
                    url: "http://localhost/cargo/CodeIgniter/pengirim",
                    data: $scope.input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response){
                    $scope.DatasPengirim.push(angular.copy($scope.input));
                    alert("Data Berhasil disimpan");
                }, function(error){
                    alert("Data gagal disimpan");
                })
            }else{
                $http({
                    method: "PUT",
                    url: "http://localhost/cargo/CodeIgniter/pengirim",
                    data: $scope.input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response){
                    alert("Data berhasil diubah");
                }, function(error){
                    alert("Data gagal diubah");
                })
            }
        }
        $scope.Hapus = function(item){
            $http({
                method: "DELETE",
                url: "http://localhost/cargo/CodeIgniter/pengirim?idPengirim="+item.idPengirim,
            }).then(function(response){
                var index = $scope.DatasPengirim.indexOf(item);
                $scope.DatasPengirim.splice(index, 1);
                alert("Data Berhasil Dihapus");
                $scope.DatasPengirim.push($scope.input);
            }, function(error){
                alert("Data Gagal Dihapus");
            })
        }

        $scope.GetData = function(item){
            $scope.input = item;
            $scope.status = "updatePengirim";
        }
        $scope.GetSimpan = function(item){
            $scope.status = "deletePengirim";
        }
    })

    //controller Penerima
    .controller("PenerimaController", function ($scope, $http) {
        $scope.DatasPenerima = [];
        $scope.input = {};
        $scope.status="Simpan";
        $http({
            method: "get",
            url: "http://localhost/cargo/CodeIgniter/penerima",
            header: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            $scope.DatasPenerima = response.data.data;
        }, function (error) {
            alert(error.message);
        })

        $scope.Simpan = function(){
            if ($scope.status=="Simpan"){
                $http({
                    method: "POST",
                    url: "http://localhost/cargo/CodeIgniter/penerima",
                    data: $scope.input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response){
                    $scope.DatasPenerima.push(angular.copy($scope.input));
                    alert("Data Berhasil disimpan");
                }, function(error){
                    alert("Data gagal disimpan");
                })
            }else{
                $http({
                    method: "PUT",
                    url: "http://localhost/cargo/CodeIgniter/penerima",
                    data: $scope.input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response){
                    alert("Data berhasil diubah");
                }, function(error){
                    alert("Data gagal diubah");
                })
            }
        }
        $scope.Hapus = function(item){
            $http({
                method: "DELETE",
                url: "http://localhost/cargo/CodeIgniter/penerima?idPenerima="+item.idPenerima,
            }).then(function(response){
                var index = $scope.DatasPenerima.indexOf(item);
                $scope.DatasPenerima.splice(index, 1);
                alert("Data Berhasil Dihapus");
                $scope.DatasPenerima.push($scope.input);
            }, function(error){
                alert("Data Gagal Dihapus");
            })
        }

        $scope.GetData = function(item){
            $scope.input = item;
            $scope.status = "updatePenerima";
        }
        $scope.GetSimpan = function(item){
            $scope.status = "deletePenerima";
        }
    })

    //controller Barang
    .controller("BarangController", function ($scope, $http) {
        $scope.DatasBarang = [];
        $scope.input = {};
        $scope.status="Simpan";
        $http({
            method: "get",
            url: "http://localhost/cargo/CodeIgniter/barang",
            header: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            $scope.DatasBarang = response.data.data;
        }, function (error) {
            alert(error.message);
        })

        $scope.Simpan = function(){
            if ($scope.status=="Simpan"){
                $http({
                    method: "POST",
                    url: "http://localhost/cargo/CodeIgniter/barang",
                    data: $scope.input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response){
                    $scope.DatasBarang.push(angular.copy($scope.input));
                    alert("Data Berhasil disimpan");
                }, function(error){
                    alert("Data gagal disimpan");
                })
            }else{
                $http({
                    method: "PUT",
                    url: "http://localhost/cargo/CodeIgniter/barang",
                    data: $scope.input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response){
                    alert("Data berhasil diubah");
                }, function(error){
                    alert("Data gagal diubah");
                })
            }
        }
        $scope.Hapus = function(item){
            $http({
                method: "DELETE",
                url: "http://localhost/cargo/CodeIgniter/barang?NoDo="+item.NoDo,
            }).then(function(response){
                var index = $scope.DatasBarang.indexOf(item);
                $scope.DatasBarang.splice(index, 1);
                alert("Data Berhasil Dihapus");
                $scope.DatasBarang.push($scope.input);
            }, function(error){
                alert("Data Gagal Dihapus");
            })
        }

        $scope.GetData = function(item){
            $scope.input = item;
            $scope.status = "updateBarang";
        }
        $scope.GetSimpan = function(item){
            $scope.status = "deleteBarang";
        }
    })

    //controller transaksi
    .controller("TransaksiController", function ($scope, $http) {
        $scope.DatasTransaksi = [];
        $scope.DatasPengirim = [];
        $scope.DatasPenerima = [];
        $scope.DatasBarang = [];
        $scope.SelectedPengirim = {};
        $scope.SelectedPenerima = {};
        $scope.SelectedBarang = {};
        $scope.input = {};
        $scope.status="Simpan";

        // Getpengirim
        $http({
            method: "get",
            url: "http://localhost/cargo/CodeIgniter/transaksi",
            header: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            $scope.DatasTransaksi = response.data.data;
        }, function (error) {
            alert(error.message);
        })
        $http({
            method: "get",
            url: "http://localhost/cargo/CodeIgniter/pengirim",
            header: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            $scope.DatasPengirim = response.data.data;
        }, function (error) {
            alert(error.message);
        })
        $http({
            method: "get",
            url: "http://localhost/cargo/CodeIgniter/penerima",
            header: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            $scope.DatasPenerima = response.data.data;
        }, function (error) {
            alert(error.message);
        })
        $http({
            method: "get",
            url: "http://localhost/cargo/CodeIgniter/barang",
            header: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            $scope.DatasBarang = response.data.data;
        }, function (error) {
            alert(error.message);
        })
        // hitung
        $scope.hitung =  function(){
            if($scope.SelectedPengirim != undefined && $scope.input.Tarif != undefined && $scope.SelectedBarang!=undefined){
                $scope.input.Biaya = $scope.input.Tarif;
                $scope.input.Total = 0;
                var PPN = 0;
                var BiayaPack = 0;
                var Biayalain = 0;
                if($scope.input.PPN != undefined && $scope.input.PPN >0){
                    PPN = (parseInt($scope.input.Biaya) * parseInt($scope.SelectedBarang.Berat))*(parseInt($scope.input.PPN)/100)
                }
                if($scope.input.BiayaPack != undefined){
                    BiayaPack = parseInt($scope.input.BiayaPack);
                }
                if($scope.input.Biayalain != undefined){
                    Biayalain = parseInt($scope.input.Biayalain);
                }
                $scope.input.Total = parseInt($scope.input.Biaya) * parseInt($scope.SelectedBarang.Berat)+ PPN +BiayaPack+Biayalain ;
            }
        }
        $scope.Simpan = function(){
            if ($scope.status=="Simpan"){
                $scope.input.idPengirim=$scope.SelectedPengirim.idPengirim;
                $scope.input.NoDo=$scope.SelectedBarang.NoDo;
                $scope.input.idPenerima=$scope.SelectedPenerima.idPenerima;
                $http({
                    method: "POST",
                    url: "http://localhost/cargo/CodeIgniter/transaksi",
                    data: $scope.input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response){
                    $scope.input.NoStt = response.data.data;
                    $scope.DatasTransaksi.push(angular.copy($scope.input));
                    alert("Data Berhasil disimpan");
                }, function(error){
                    alert("Data gagal disimpan");
                })
            } else {
                $scope.input.idPengirim = $scope.SelectedPengirim.idPengirim;
                $scope.input.NoDo = $scope.SelectedBarang.NoDo;
                $scope.input.idPenerima = $scope.SelectedPenerima.idPenerima;
                var Data= {};
                Data.NoStt = $scope.input.NoStt;
                Data.idPengirim = $scope.input.idPengirim;
                Data.Tarif = $scope.input.Tarif;
                Data.Biaya = $scope.input.Biaya;
                Data.BiayaPack = $scope.input.BiayaPack;
                Data.Biayalain = $scope.input.Biayalain;
                Data.PPN = $scope.input.PPN;
                Data.Total = $scope.input.Total;
                Data.NoDo = $scope.input.NoDo;
                Data.idPenerima = $scope.input.idPenerima;
                
                $http({
                    method: "PUT",
                    url: "http://localhost/cargo/CodeIgniter/transaksi",
                    data: Data,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    // $scope.DatasTransaksi.push(angular.copy($scope.input));
                    alert("Data berhasil diubah");
                }, function (error) {
                    alert("Data gagal diubah");
                })
            }
        }
        $scope.Hapus = function (item) {
            $http({
                method: "DELETE",
                url: "http://localhost/cargo/CodeIgniter/transaksi?NoStt=" + item.NoStt,
            }).then(function (response) {
                var index = $scope.DatasTransaksi.indexOf(item);
                $scope.DatasTransaksi.splice(index, 1);
                alert("Data Berhasil Dihapus");
                $scope.DatasTransaksi.push($scope.input);
            }, function (error) {
                alert("Data Gagal Dihapus");
            })
        }

        $scope.GetData = function (item) {
            angular.forEach($scope.DatasBarang, function (valueBarang, KeyBarang) {
                if (valueBarang.NoDo == $scope.input.NoDo) {
                    $scope.SelectedBarang = valueBarang;
                }
            })
            angular.forEach($scope.DatasPengirim, function (valuePengirim, KeyPengirim) {
                if (valuePengirim.idPengirim == $scope.input.idPengirim) {
                    $scope.SelectedPengirim = valuePengirim;
                }
            })
            angular.forEach($scope.DatasPenerima, function (valuePenerima, keyPenerima) {
                if (valuePenerima.idPenerima == $scope.input.idPenerima) {
                    $scope.SelectedPenerima = valuePenerima;
                }
            })
            $scope.input = item;
            $scope.status = "updateTransaksi";
        }
        $scope.GetSimpan = function (item) {
            $scope.status = "deleteTransaksi";
        }
    })

    //controller pembayaran
    .controller("PembayaranController", function ($scope, $http) {
        $scope.DatasPembayaran = [];
        $scope.DatasTransaksi = [];
        $scope.SelectedTransaksi = {};
        $scope.input = {};
        $scope.status="Simpan";
        $http({
            method: "get",
            url: "http://localhost/cargo/CodeIgniter/pembayaran",
            header: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            $scope.DatasPembayaran = response.data.status;
        }, function (error) {
            alert(error.message);
        })
        // get Transaksi
        $http({
            method: "get",
            url: "http://localhost/cargo/CodeIgniter/transaksi",
            header: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            $scope.DatasTransaksi = response.data.data;
        }, function (error) {
            alert(error.message);
        })

        $scope.Simpan = function(){
            $scope.input = {};
            // $scope.input.NoStt=$scope.SelectedTransaksi.Nostt;
            if ($scope.status=="Simpan"){          
                
             $scope.input.NoStt=$scope.SelectedTransaksi.NoStt;      
                $http({
                    method: "POST",
                    url: "http://localhost/cargo/CodeIgniter/pembayaran",
                    data: $scope.input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response){
                    $scope.DatasPembayaran.push(response.data.status[0]);
                    alert("Data Berhasil disimpan");
                }, function(error){
                    alert("Data gagal disimpan");
                })
            }else{
                $http({
                    method: "PUT",
                    url: "http://localhost/cargo/CodeIgniter/pembayaran",
                    data: $scope.input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response){
                    alert("Data berhasil diubah");
                }, function(error){
                    alert("Data gagal diubah");
                })
            }
        }
        $scope.Hapus = function(item){
            $http({
                method: "DELETE",
                url: "http://localhost/cargo/CodeIgniter/pembayaran?idPembayaran="+item.idPembayaran,
            }).then(function(response){
                var index = $scope.DatasPembayaran.indexOf(item);
                $scope.DatasPembayaran.splice(index, 1);
                alert("Data Berhasil Dihapus");
                $scope.DatasPembayaran.push($scope.input);
            }, function(error){
                alert("Data Gagal Dihapus");
            })
        }

        $scope.GetData = function(item){
            $scope.input = item;
            $scope.status = "updatePembayaran";
        }
        $scope.GetSimpan = function(item){
            $scope.status = "deletePembayaran";
        }
    })

    // Users
    .controller("UsersController", function ($scope, $http, $window) {
        $scope.input = {};
        $scope.Login=function () {
        var Url = "http://localhost/cargo/CodeIgniter/users?username="+$scope.input.username + "&psw=" + $scope.input.psw;
        
        $http({
            method: "get",
            url: Url
        }).then(function (response) {
            alert("Sukses login");
          
            $window.sessionStorage.setItem("username", $scope.input.username);
            $window.location.href = "index.html"
        }, function (error) {
            alert("Gagal Login");
           
            $window.sessionStorage.setItem("username", response.data.data.data.username);

        })      
     }
    })
})(window.angular);