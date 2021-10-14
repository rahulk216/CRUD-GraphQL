const { gql } = require('graphql-tag');

const typeDefs = gql`
	type User {
		id: ID!
		email: String!
		token: String!
		username: String!
		createdAt: String!
	}
	type Query {
		getUsers: [User!]!
	}
`;
module.exports = { typeDefs };
