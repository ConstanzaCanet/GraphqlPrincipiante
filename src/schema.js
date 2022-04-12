//makeExecutableSchema con esto podemos crear un esquema nuevo y unir nuestros typeDefs
import { makeExecutableSchema } from 'graphql-tools';
import {resolvers} from './resolvers.js';


//como una ruta
const typeDefs=`
    type Query{
        Users: [User]
    }
    type User {
        _id:ID
        name: String!
        age: Int
        phone: String
        email: String!
    }

    type Mutation{
        createUser(input: UserInput): User
        updateUser(_id:ID, input: UserInput): User
        deleteUser(_id:ID): User
    }

    input UserInput {
        name: String!
        age: Int
        phone: String
        email: String!
    }
`;


export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
})
