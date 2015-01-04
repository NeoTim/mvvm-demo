/* global jQuery:false */
;(function() {

    'use strict';

    angular
        .module('materialize')
        .controller('MaterializeController', MaterializeController);

    /* @ngInject */
    function MaterializeController(resolvedUsers) {

        // Materialize controller logic
        var vm = this;

        ///////////////////////////////

        vm.users = resolvedUsers;

        /**
         *      toggle
         *      @description
         *      @param  {Object}        description
         *      @return {Object}        description
         */
        function toggle (param) {}

        jQuery(document).ready(function() {
            $('ul.tabs').tabs();

        });

    }

}).call(this);
