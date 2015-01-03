describe('Midway: templates', function() {
    it('should load the template for the avengers view properly',
        function(done) {
            var tester = ngMidwayTester('app');
            tester.visit('/avengers', function() {
                var current = tester.inject('$route').current;
                var controller = current.controller;
                var template = current.templateUrl;
                expect(template).to.match(/modules\/avengers\/views\/avengers\.view\.html/);
                tester.destroy();
                done();
            });
        });

    it('should load the template for the dashboard view properly',
        function(done) {
            var tester = ngMidwayTester('app');
            tester.visit('/', function() {
                var current = tester.inject('$route').current;
                var controller = current.controller;
                var template = current.templateUrl;
                expect(template).to.match(/modules\/dashboard\/views\/dashboard\.view\.html/);
                tester.destroy();
                done();
            });
        });
});