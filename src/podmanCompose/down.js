const logger = require("logger-line-number");
const shell = require("shelljs");
const parseCompose = require("../docker/parseCompose");

// TODO: better error handling
const down = () => {
	const services = parseCompose();
	services.forEach(({ container_name }) => {
		const { code: stop } = shell.exec(`podman container stop ${container_name}`);
		if (stop !== 0) {
			logger.error(`Failed to stop container: ${container_name}`);
			logger.error("Exiting process");
			process.exit(1);
		}

		const { code: remove } = shell.exec(`podman container rm ${container_name}`);
		if (remove !== 0) {
			logger.error(`Failed to stop container: ${container_name}`);
			logger.error("Exiting process");
			process.exit(1);
		}
	});
};

module.exports = down;
