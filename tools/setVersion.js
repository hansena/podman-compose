const packageJSON = require("../package.json");
const child_process = require("child_process");
const semver = require("semver");

function updateVersion(v) {
	if (semver.gte(v.toString(), packageJSON.version)) {
		const newVersion = "npm version " + semver.inc(v.toString(), "patch");
		child_process.execSync(newVersion);
	}
}

try {
	const registryVersion = child_process.execSync(`npm view ${process.env.PACKAGE_NAME} version`);
	updateVersion(registryVersion);
} catch (_) {
	updateVersion("0.0.1");
}
