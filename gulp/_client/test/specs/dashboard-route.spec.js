/* jshint -W117, -W030 */
describe('dashboard', function () {
    describe('route', function () {
        var controller;

        beforeEach(function() {
            module('app', specHelper.fakeLogger);
            specHelper.injector(function($httpBackend, $location, $rootScope, $route) {});
            $httpBackend.expectGET('app/modules/dashboard/views/dashboard.view.html').respond(200);
        });

        it('should map / route to dashboard View template', function () {
            expect($route.routes['/'].templateUrl).
                to.equal('app/modules/dashboard/views/dashboard.view.html');
        });

        it('should route / to the dashboard View', function () {
            $location.path('/');
            $rootScope.$digest();
            expect($route.current.templateUrl).to.equal('app/modules/dashboard/views/dashboard.view.html');
        });

        it('should route /invalid to the otherwise (dashboard) route', function () {
            $location.path('/invalid');
            $rootScope.$digest();
            expect($route.current.templateUrl).to.equal('app/modules/dashboard/views/dashboard.view.html');
        });
    });
});