;(function() {

    'use strict';

    angular
        .module('core')
        .directive('mvCollection', mvCollection);

    /* @inject */
    function mvCollection() {
        return {
            templateUrl: 'app/core/directives/mvCollection/mvCollection.template.html',
            restrict: 'E',
            scope: true,
            transclude: true,
            replace:true,
            controller: controller,
            link: link
        };

        ////////////////

        function controller($scope) {
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
