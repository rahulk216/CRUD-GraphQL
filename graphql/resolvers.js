const User = require('../Models/User');
const resolvers = {
	Query: {
		async getUsers() {
			try {
				const users = await User.find();
				return users;
			} catch (err) {
				throw new Error(err);
			}
		},
	},
	Mutation: {
		async addUser(_, { body: { email, username } }) {
			
			const newUser = new User({
				email,
				username,
				createdAt: new Date().toISOString(),
			});
			console.log(newUser);
			const res = await newUser.save();
			return res;
		},
	},
};

module.exports = { resolvers };
