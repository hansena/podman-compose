const getArguments = () => {
	const [, , command, ...args] = process.argv;
	return { command, args: args.join("") };
};

module.exports = getArguments;
