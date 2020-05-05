/* #########################    MUTATION  ######################### */
// import { publicationInput } from './publication_schema/publication_schema'
import axios from 'axios';

/* CREATE PUBLICATION */

export const myurl = `http://` + process.env['PUBLICATION_URL'] + `:` + process.env['PUBLICATION_PORT'] + `/` + process.env['PUBLICATION_BASE_ENDPOINT'] + `/`;



/* UPDATE FILE IMAGE BY ID AND TYPE */
// export const updatePublication = async (_, {id, type}, ctx) => {
//     return await axios.put(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}`).then(res => res.data)
// }

// /* DELETE PUBLICATION */
export const deletePublication = async (_, {id}, ctx) => {
    return await axios.delete(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}`).then(res => res.data)
}
