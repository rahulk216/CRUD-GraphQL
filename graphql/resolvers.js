const User = require('../Models/User')
const resolvers = {
	Query: {
		async getUsers() {
			try {
				const users = await User.find()
				return users
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};

module.exports = { resolvers };
