const { gql } = require('graphql-tag');

const typeDefs = gql`
	type User {
		id: ID!
		email: String!
		username: String!
		createdAt: String!
	}
	input AddUser{
		email:String!,
		username:String!,
	}
	type Query {
		getUsers: [User!]!
	}
	type Mutation {
		addUser(body: AddUser!): User!
	}
`;
module.exports = { typeDefs };
