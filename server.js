const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');
const { resolvers } = require('./graphql/resolvers');
const { typeDefs } = require('./graphql/typeDefs');
const { MONGODB } = require('./config.js');

const server = new ApolloServer({
	typeDefs,
	resolvers,
});
mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
	console.log('Mongo DB connected');
	server.listen({ port: 5000 }).then(() => {
		console.log('Server running on 5000');
	});
});
