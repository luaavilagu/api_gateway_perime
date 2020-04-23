import { gql } from "apollo-server";

import {multimedia_schema, multimedia_querys, multimedia_mutations} from './multimedia_schema/multimedia_schema'
import {ubication_schema, ubication_queries, ubication_mutations} from './ubication_schema/ubication_schema'
import {busqueda_schema, busqueda_querys, busqueda_mutations} from './busqueda_schema/busqueda_schema'
import {comments_schema,comments_querys,comments_mutations} from './comentarios_schema/comentarios_schema'
import {user_schema, user_querys, user_mutations} from './user_schema/user_schema'

const schema = gql`

    type Query {
        ${multimedia_querys}
        ${busqueda_querys}
        ${ubication_queries}
        ${comments_querys}
        ${user_querys}
    }

    type Mutation {
        ${multimedia_mutations}
        ${busqueda_mutations}
        ${ubication_mutations}
        ${comments_mutations}
        ${user_mutations}
    }

    ${multimedia_schema}
    ${busqueda_schema}
    ${ubication_schema}
    ${comments_schema}
    ${user_schema}
`;

export default schema