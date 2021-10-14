const { gql } = require('graphql-tag');

const typeDefs = gql`
	type User {
		id: ID!
		email: String!
		token: String!
		username: String!
		createdAt: String!
	}
	type AddUser{
		
	}
	type Query {
		getUsers: [User!]!
	}
	type Mutation {
		addUser(addUser:AddUser): User!
	}
`;
module.exports = { typeDefs };
