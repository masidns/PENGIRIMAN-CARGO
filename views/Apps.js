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


    })
})(window.angular);