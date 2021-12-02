const exec = require("child_process").execSync;
const path = require("path");
const logger = require("logger-line-number");
// const shell = require("shelljs");
const podmanInstalled = require("./podmanInstalled");
const podmanMachineInitialized = require("./podmanMachineInitialized");
const podmanMachineRunning = require("./podmanMachineRunning");

const configs = { stdio: "inherit" };

const ensurePodman = async () => {
	try {
		logger.log("Ensuring podman configuration.");
		if (!podmanInstalled()) exec("brew install podman", configs);
		if (!podmanMachineInitialized()) {
			exec(`sh ${path.join(__dirname, "podman_machine_start.sh")}`, configs);
		}
		if (!podmanMachineRunning()) exec("podman machine start", configs);
		return true;
	} catch (error) {
		logger.error("Unable to resolve podman error. Please confirm installation and try again.");
		logger.error(error);
		process.exit(1);
	}
};

module.exports = ensurePodman;
