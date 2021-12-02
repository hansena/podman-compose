const logger = require("logger-line-number");
const shell = require("shelljs");
const parseCompose = require("../docker/parseCompose");
const ensurePodman = require("../podman/ensurePodman");
const prepareVolumes = require("./prepareVolumes");

const up = async (args) => {
	try {
		await ensurePodman();
		const services = parseCompose();
		services.forEach(({ container_name, environment, image, ports, volumes }) => {
			const cmd = "podman run -d";
			const name = container_name ? `--name ${container_name}` : "";
			const portmap = !ports.length ? "" : `-p ${ports.map((port) => port).join(" -p ")}`;
			const env = !environment.length ? "" : `--env ${environment.map((env) => env).join(" --env ")}`;
			const vols = prepareVolumes({ container_name, volumes });
			// console.log([cmd, args, name, portmap, env, vols, image].join(" "));
			// shell.exec([cmd, args, name, portmap, env, vols, image].join(" "), {}, (data) => {
			// 	if (data !== 0) {
			// 		logger.error(`Failed to start container: ${container_name}`);
			// 		logger.error("Exiting process");
			// 		process.exit(1);
			// 	}
			// });
		});
	} catch (error) {
		logger.error("Error bringing up containers.");
		logger.error(error);
		process.exit(1);
	}
};

module.exports = up;
