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
            url: "http://localhost/Pengiriman/CodeIgniter/pengirim",
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
                    url: "http://localhost/Pengiriman/CodeIgniter/pengirim",
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
                    url: "http://localhost/Pengiriman/CodeIgniter/pengirim",
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
                url: "http://localhost/Pengiriman/CodeIgniter/pengirim?idPengirim="+item.idPengirim,
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
            url: "http://localhost/Pengiriman/CodeIgniter/penerima",
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
                    url: "http://localhost/Pengiriman/CodeIgniter/penerima",
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
                    url: "http://localhost/Pengiriman/CodeIgniter/penerima",
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
                url: "http://localhost/Pengiriman/CodeIgniter/penerima?idPenerima="+item.idPenerima,
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
            url: "http://localhost/Pengiriman/CodeIgniter/barang",
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
                    url: "http://localhost/Pengiriman/CodeIgniter/barang",
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
                    url: "http://localhost/Pengiriman/CodeIgniter/barang",
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
                url: "http://localhost/Pengiriman/CodeIgniter/barang?NoDo="+item.NoDo,
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
            url: "http://localhost/Pengiriman/CodeIgniter/transaksi",
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
            url: "http://localhost/Pengiriman/CodeIgniter/pengirim",
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
            url: "http://localhost/Pengiriman/CodeIgniter/penerima",
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
            url: "http://localhost/Pengiriman/CodeIgniter/barang",
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
                    url: "http://localhost/Pengiriman/CodeIgniter/transaksi",
                    data: $scope.input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response){
                    $scope.DatasTransaksi.push(angular.copy($scope.input));
                    alert("Data Berhasil disimpan");
                }, function(error){
                    alert("Data gagal disimpan");
                })
            }else{
                $http({
                    method: "PUT",
                    url: "http://localhost/Pengiriman/CodeIgniter/transaksi",
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
                url: "http://localhost/Pengiriman/CodeIgniter/transaksi?NoStt="+item.NoStt,
            }).then(function(response){
                var index = $scope.DatasTransaksi.indexOf(item);
                $scope.DatasTransaksi.splice(index, 1);
                alert("Data Berhasil Dihapus");
                $scope.DatasTransaksi.push($scope.input);
            }, function(error){
                alert("Data Gagal Dihapus");
            })
        }

        $scope.GetData = function(item){
            $scope.input = item;
            $scope.status = "updateTransaksi";
        }
        $scope.GetSimpan = function(item){
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
            url: "http://localhost/Pengiriman/CodeIgniter/pembayaran",
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
            url: "http://localhost/Pengiriman/CodeIgniter/transaksi",
            header: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            $scope.DatasTransaksi = response.data.data;
        }, function (error) {
            alert(error.message);
        })

        $scope.Simpan = function(){
            if ($scope.status=="Simpan"){
                $http({
                    method: "POST",
                    url: "http://localhost/Pengiriman/CodeIgniter/pembayaran",
                    data: $scope.input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response){
                    $scope.DatasPembayaran.push(angular.copy($scope.input));
                    alert("Data Berhasil disimpan");
                }, function(error){
                    alert("Data gagal disimpan");
                })
            }else{
                $http({
                    method: "PUT",
                    url: "http://localhost/Pengiriman/CodeIgniter/pembayaran",
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
                url: "http://localhost/Pengiriman/CodeIgniter/pembayaran?idPembayaran="+item.idPembayaran,
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

    //controller Users
    .controller("UsersController", function ($scope, $http) {
        $scope.DatasUsers = [];
        $scope.input = {};
        $scope.status="Simpan";
        $http({
            method: "get",
            url: "http://localhost/cargo/CodeIgniter/users",
            header: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            $scope.DatasUsers = response.data.data;
        }, function (error) {
            alert(error.message);
        })

        $scope.Simpan = function(){
            if ($scope.status=="Simpan"){
                $http({
                    method: "POST",
                    url: "http://localhost/cargo/CodeIgniter/users",
                    data: $scope.input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response){
                    $scope.DatasUsers.push(angular.copy($scope.input));
                    alert("Data Berhasil disimpan");
                }, function(error){
                    alert("Data gagal disimpan");
                })
            }else{
                $http({
                    method: "PUT",
                    url: "http://localhost/cargo/CodeIgniter/users",
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
                url: "http://localhost/cargo/CodeIgniter/users?id="+item.id,
            }).then(function(response){
                var index = $scope.DatasUsers.indexOf(item);
                $scope.DatasUsers.splice(index, 1);
                alert("Data Berhasil Dihapus");
                $scope.DatasUsers.push($scope.input);
            }, function(error){
                alert("Data Gagal Dihapus");
            })
        }

        $scope.GetData = function(item){
            $scope.input = item;
            $scope.status = "updateUsers";
        }
        $scope.GetSimpan = function(item){
            $scope.status = "deleteUsers";
        }
    })
    // users
    // .controller("UsersController", function ($scope, $http, $window) {
    //     $scope.input = {};
    //     $scope.Login=function () {
    //     var Url = "http://localhost/Pengiriman/CodeIgniter/users?email="+$scope.input.email + "&psw=" + $scope.input.psw;
    //     $http({
    //         method: "get",
    //         url: Url
    //     }).then(function (response) {
    //         alert("Sukses Login");
    //         $window.sessionStorage.setItem("email", response.data.data.data.email);
    //         window.location.href = "index.html"
    //     }, function (error) {
    //         alert("Gagal Login");
    //         $window.sessionStorage.setItem("email", response.data.data.data.email);
    //     })
    //     }
    // })
})(window.angular);