describe("Utils", function(){

	var request = require("request"), baseUrl;

	describe("#core", function(){

		before(function () {
			baseUrl = "http://localhost:" + la.config.server.port || 80;
		});

		it('should inherit from EventEmitter', function () {
			la.should.be.an.instanceOf(require("events").EventEmitter);
		});

		it('should be closed and reopened', function(done) {
			la.close(function(){
				request({url: baseUrl}, function(err, res, body) {
					err.should.not.be.null;
					err.code.should.be.eql('ECONNREFUSED');
					la.components.should.be.eql({});
					la.run(done);
				});
			});	
		});

		it('should load user components');

	});

});