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
        
    
    input PublicationInput{
        _id: ID
        title: String
        description: String
        state_publication: Boolean
        contact_information: String
        id_image: String
        stock: String
        expiration_date: String
        price: String
        categories: [String]
    }

    ${publication_schema}
    ${multimedia_schema}
`;

export default schema