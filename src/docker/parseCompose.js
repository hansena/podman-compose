const fs = require("fs");
const yaml = require("js-yaml");

const parseCompose = () => {
	const filepath = fs.existsSync(`${process.cwd()}/docker-compose.yml`)
		? `${process.cwd()}/docker-compose.yml`
		: `${process.cwd()}/docker-compose.yaml`;

	try {
		const { services } = yaml.load(fs.readFileSync(filepath, "utf-8"));
		// console.log("-------------- PARSING COMPOSE --------------");
		// console.log(Object.keys(services).map((service) => ({ name: service, ...services[service] })));
		// console.log("-------------- COMPOSE PARSED --------------");
		return Object.keys(services).map((service) => ({ name: service, ...services[service] }));
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

module.exports = parseCompose;
