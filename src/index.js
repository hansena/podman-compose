const logger = require("logger-line-number");
const cli = require("./cli");
const podmanCompose = require("./podmanCompose");

module.exports = () => {
	try {
		const { command, args } = cli.getArguments();
		podmanCompose[command](args);
	} catch (error) {
		if (error.message === "podmanCompose[command] is not a function") {
			logger.error(`ERROR - Unrecognized command.`);
		} else {
			logger.error(error);
		}
		process.exit(1);
	}
};
