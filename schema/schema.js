import { gql } from "apollo-server";
import {multimedia_schema, multimedia_querys, multimedia_mutations} from './multimedia_schema/multimedia_schema'
import {user_schema, user_querys, user_mutations} from './user_schema/user_schema'


const schema = gql`

    type Query {
        ${multimedia_querys},
        
        ${user_querys}
    }

    type Mutation {
        ${multimedia_mutations},

        ${user_mutations},
    }

    ${multimedia_schema}

    ${user_schema}

`;

export default schema