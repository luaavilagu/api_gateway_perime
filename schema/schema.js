import { gql } from "apollo-server";
import {multimedia_schema, multimedia_querys, multimedia_mutations} from './multimedia_schema/multimedia_schema'

const schema = gql`

    type Query {
        ${multimedia_querys}
    }

    type Mutation {
        ${multimedia_mutations}
    }

    ${multimedia_schema}
`;

export default schema