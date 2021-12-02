const exec = require("child_process").execSync;
const logger = require("logger-line-number");

const podmanInstalled = () => {
	try {
		const stdout = exec(`podman --version`, { encoding: "utf-8" });
		return true;
	} catch (error) {
		logger.error(error);
		process.exit(1);
	}
};

module.exports = podmanInstalled;
