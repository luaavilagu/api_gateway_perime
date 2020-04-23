/* #########################    MUTATION  ######################### */

import axios from 'axios';

/* CREATE PUBLICATION */
export const createPublication = async (_, {input}, ctx) => {
    const data = JSON.stringify(input);
    return await axios.put(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}`, data).then(res => res.data)
}

/* UPDATE FILE IMAGE BY ID AND TYPE */
export const updateFile = async (_, {input}, ctx) => {
    const data = JSON.stringify(input);
    return await axios.put(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}`, data).then(res => res.data)
}

// /* DELETE PUBLICATION */
export const deletePublication = async (_, {id}, ctx) => {
    return await axios.delete(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}`).then(res => res.data)
}
