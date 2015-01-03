(function() {
    'use strict';

    angular.module('app', [
        /**
         * Global
         *
         * @module  app.core        Contains the core stuctured elements of the application
         *
         * @module  app.widgets     Contains global widget directives
         *
         * @module  app.modules     Contains the remaining modules for the application
         */
        'app.core',
        'app.widgets',
        'app.modules'

    ]);

})();