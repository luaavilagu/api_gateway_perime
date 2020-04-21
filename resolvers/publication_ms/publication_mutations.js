/* #########################    MUTATION  ######################### */

/* STORE FILE IMAGE BY ID AND TYPE */
export const createPublication = async (_, {id}, ctx) => {
    return await axios.post(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}`).then(res => res.data)
}

/* UPDATE FILE IMAGE BY ID AND TYPE */
// export const updateFile = async (_, {id, type}, ctx) => {
//     return await axios.put(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}/${type}`).then(res => res.data)
// }

// /* DELETE FILE IMAGE BY ID AND TYPE */
// export const deleteFile = async (_, {id, type}, ctx) => {
//     return await axios.delete(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}/${type}`).then(res => res.data)
// }
