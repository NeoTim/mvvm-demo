;(function() {
    'use strict';

    angular
        .module('components')
        .config(Components);

    /* @ngInject */
    function Components ($stateProvider) {

        $stateProvider
            .state('components', {
                url: '/components',
                templateUrl: 'app/modules/components/views/components.view.html',
                controller:  'ComponentsController as vm'
            });

        ////////////////////////

    }

}).call(this);