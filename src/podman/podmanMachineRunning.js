const exec = require("child_process").execSync;

const podmanMachineRunning = () => {
	try {
		const stdout = exec(`podman machine list`, { encoding: "utf-8" });
		const [headers, machine1] = stdout.split("\n");
		const [, , , lastUp] = machine1.split(/[ ]{2,}/g);
		return lastUp === "Currently running";
	} catch (error) {
		return false;
	}
};

module.exports = podmanMachineRunning;
