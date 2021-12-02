const exec = require("child_process").execSync;

const podmanMachineInitialized = () => {
	try {
		const stdout = exec(`podman machine list`, { encoding: "utf-8" });
		const [headers, machine1] = stdout.split("\n");
		return !!machine1;
	} catch (error) {
		return false;
	}
};

module.exports = podmanMachineInitialized;
