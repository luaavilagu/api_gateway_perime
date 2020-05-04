import axios from 'axios';
/* #########################    MUTATION  ######################### */

/* POST CATEGORIA BY ID */
export const postCategory= async (_, {id}, ctx) => {
    return await axios.post(`http://${ctx.SEARCH_URL}:${ctx.SEARCH_PORT}/${ctx.SEARCH_BASE_ENDPOINT}category/${id}`).then(res => res.data)
}
/* PUT CATEGORIA BY ID */
export const putCategory = async (_, {id}, ctx) => {
    return await axios.put(`http://${ctx.SEARCH_URL}:${ctx.SEARCH_PORT}/${ctx.SEARCH_BASE_ENDPOINT}category/${id}`).then(res => res.data)
}

/* DELETE CATEGORIA BY ID */
export const deleteCategory = async (_, {id}, ctx) => {
    return await axios.delete(`http://${ctx.SEARCH_URL}:${ctx.SEARCH_PORT}/${ctx.SEARCH_BASE_ENDPOINT}category/${id}`).then(res => res.data)
}

/* POST PRODUCTO BY ID */
export const postProduct = async (_, {id}, ctx) => {
    return await axios.post(`http://${ctx.SEARCH_URL}:${ctx.SEARCH_PORT}/${ctx.SEARCH_BASE_ENDPOINT}product/${id}`).then(res => res.data)
}

/* PUT PRODUCTO BY ID */
export const putProduct = async (_, {id}, ctx) => {
    return await axios.put(`http://${ctx.SEARCH_URL}:${ctx.SEARCH_PORT}/${ctx.SEARCH_BASE_ENDPOINT}product/${id}`).then(res => res.data)
}

/* DELETE PRODUCTO BY ID */
export const deleteProduct = async (_, {id}, ctx) => {
    return await axios.delete(`http://${ctx.SEARCH_URL}:${ctx.SEARCH_PORT}/${ctx.SEARCH_BASE_ENDPOINT}product/${id}`).then(res => res.data)
}
