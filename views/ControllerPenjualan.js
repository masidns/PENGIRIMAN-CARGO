// (function (angular){
//     'use strict'
//     angular.module("MyController", [])
//         .controller("PenjualanController", function ($scope, $http) {
        
//         $scope.DatasPengirim = [];
//         $scope.DatasPenerima = [];
//         $scope.DatasBarang = [];
//         $scope.DatasTransaksi = [];
//         $scope.input = {};
//         $scope.status="Simpan";

//         $http({
//             method: "get",
//             url: "http://localhost/cargo/CodeIgniter/pengirim",
//             header: {
//                 "Content-Type": "application/json"
//             }
//         }).then(function (response) {
//             $scope.DatasPengirim = response.data.data;
//         }, function (error) {
//             alert(error.message);
//         })

//         $http({
//             method: "get",
//             url: "http://localhost/cargo/CodeIgniter/penerima",
//             header: {
//                 "Content-Type": "application/json"
//             }
//         }).then(function (response) {
//             $scope.DatasPenerima = response.data.data;
//         }, function (error) {
//             alert(error.message);
//         })

//         $http({
//             method: "get",
//             url: "http://localhost/cargo/CodeIgniter/barang",
//             header: {
//                 "Content-Type": "application/json"
//             }
//         }).then(function (response) {
//             $scope.DatasBarang = response.data.data;
//         }, function (error) {
//             alert(error.message);
//         })

//         $http({
//             method: "get",
//             url: "http://localhost/cargo/CodeIgniter/transaksi",
//             header: {
//                 "Content-Type": "application/json"
//             }
//         }).then(function (response) {
//             $scope.DatasTransaksi = response.data.data;
//         }, function (error) {
//             alert(error.message);
//         })

// })(window.angular);