;(function() {
    'use strict';

    angular
        .module('generators')
        .config(Generators);

    /* @ngInject */
    function Generators ($stateProvider) {

        $stateProvider
            .state('generators', {
                url: '/generators',
                templateUrl: 'app/modules/generators/views/generators.view.html',
                controller:  'GeneratorsController as vm',
                navbar: {
                    color:'indigo',
                    links:'white-text',
                    logo: 'white-text'
                }
            });

        ////////////////////////

    }

}).call(this);