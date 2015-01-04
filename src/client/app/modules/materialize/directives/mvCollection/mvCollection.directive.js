;(function() {

    'use strict';

    angular
        .module('materialize')
        .directive('mvCollection', mvCollection);

    /* @inject */
    function mvCollection() {
        return {
            templateUrl: 'app/modules/materialize/directives/mvCollection/mvCollection.template.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            replace:true,
            controller: controller,
            link: link
        };

        ////////////////

        function controller($scope) {
            /* jshint validthis:true */
            this.expandable = true;
        }

        function link(scope, element, attrs, ctrl) {

            element.children().ready(function() {

                ctrl.children = element.children();

            });

            ///////////////////////////////

            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}
        }
    }

}).call(this);