const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	client: {
		port: process.env.PORT_CLIENT || 8000,
		env: process.env.ENV,
	},
	server: {
		port: process.env.PORT_SERVER || 3000,
		env: process.env.ENV,
	},
};
