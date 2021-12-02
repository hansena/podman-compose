const exec = require("child_process").execSync;
const path = require("path");
const logger = require("logger-line-number");

const prepareVolumes = ({ container_name, volumes }) => {
	let volumeArgs = [];
	volumes.forEach((volume) => {
		const [fromPath, toPath] = volume.split(":");
		const filename = fromPath.split("/").slice(-1);
		const stagingScript = path.join(__dirname, "..", "podman", "podman_stage_file.sh");
		const vmFilePath = `.config/containers/${container_name}/${filename}`;
		// const vmFilePath = `/var/home/core/.config/containers/${container_name}/${filename}`;
		volumeArgs = [...volumeArgs, `${vmFilePath}:${toPath}`];
		// logger.log(volumeArgs);
		logger.log(`sh ${stagingScript} ${vmFilePath} ${path.join(process.cwd(), fromPath)}`);
		const stdout = exec(`sh ${stagingScript} ${vmFilePath} ${path.join(process.cwd(), fromPath)}`, {
			stdio: "inherit",
		});
		// logger.log(stdout);
	});
	return `-v ${volumeArgs.join(" -v ")}`;
};

module.exports = prepareVolumes;
