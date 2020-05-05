import { gql } from "apollo-server";
import {publication_schema, publication_querys, publication_mutations} from './publication_schema/publication_schema'
import {multimedia_schema, multimedia_querys, multimedia_mutations} from './multimedia_schema/multimedia_schema'

const schema = gql`

    type Query {
        ${multimedia_querys}
        ${publication_querys}
    }

    type Mutation {
        ${multimedia_mutations}
        ${publication_mutations}
        
    }
        

    ${publication_schema}
    ${multimedia_schema}
`;

export default schema