/* global _:false */
;(function() {
    'use strict';

    angular
        .module('core')
        .config(Core)
        .run(runner);

    /* @ngInject */
    function runner($rootScope) {

        var defaults = {
            color: 'white',
            links: 'indigo-text',
            logo:  'grey-text'
        };

        $rootScope.$navbarDefaults = defaults;
        $rootScope.$navbar = defaults;

        $rootScope.$on('$stateChangeStart', function (event, state) {

            $rootScope.$navbar = defaults;

            if (state.navbar) {

                $rootScope.$navbar = defaults;
                _.assign($rootScope.$navbar, state.navbar);
            }
        });
    }

    /* @ngInject */
    function Core ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/core/views/home.view.html',
                controller:  'HomeController as vm',
                navbar: {
                    color: 'white',
                    links: 'indigo-text',
                    logo:  'grey-text'
                }
            });

        ////////////////////////

    }

}).call(this);