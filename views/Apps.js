(function (angular){
    'use strict'
    angular.module("MyApp", ["MyController", "ngAnimate", "ui.router"])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("Home");
        $stateProvider
            .state("home", {
                url:"/home",
                templateUrl:"views/pages/home.html",
                controller:"HomeController"
            })
            .state("pengirim", {
                url:"/pengirim",
                templateUrl:"views/pages/pengirim.html",
                controller:"PengirimController"
            })
            .state("penerima", {
                url:"/penerima",
                templateUrl:"views/pages/penerima.html",
                controller:"PenerimaController"
            })
            .state("barang", {
                url:"/barang",
                templateUrl:"views/pages/barang.html",
                controller:"BarangController"
            })
            .state("transaksi", {
                url:"/transaksi",
                templateUrl:"views/pages/transaksi.html",
                controller:"TransaksiController"
            })
            .state("pembayaran", {
                url:"/pembayaran",
                templateUrl:"views/pages/pembayaran.html",
                controller:"PembayaranController"
            })
            .state("penjualan", {
                url:"/Penjualan",
                templateUrl:"views/pages/penjualan.html",
                controller:"PenjualanController"
            })
            .state("users", {
                url:"/users",
                templateUrl:"views/pages/users.html",
                controller:"UsersController"
            })

    })
    .controller("views", function ($scope, $window){
        if ($window.sessionStorage.getItem("username")==undefined || $window.sessionStorage.getItem("username")=="" || $window.sessionStorage.getItem("username")==null ){
            window.location.href="login.html";
        }
        $scope.Logout= function(){
            sessionStorage.clear();
            window.location.href="index.html";
        }
    })
})(window.angular);