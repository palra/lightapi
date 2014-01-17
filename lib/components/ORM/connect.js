var seq;

module.exports = function(config, cb) {
	if(seq) {
		cb(seq);
	}
	else {
		if(	config.username === undefined
			|| config.password === undefined 
			|| config.database === undefined) {
			log.warn("Database authentication information uncomplete, got " + JSON.stringify(config) + ", skipping.");
			cb(false);
		} else {
			var Seq = new require("sequelize");
			seq = new Seq(config.database, config.username, config.password, config);
			seq.authenticate().complete(function (err) {
				if(!!err) {
					log.error("Unable to connect to the database : "+err);
					throw new Error("Unable to connect to the database : "+err);
				} else {
					log.debug("Connected to the "+config.dialect+" database.");
					cb(seq);
				}
			});
		}
	}
}