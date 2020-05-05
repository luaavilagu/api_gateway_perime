import axios from 'axios';
/* #########################    MUTATION  ######################### */


export const createUbication = async (_, {id, type}, ctx) => {
    return await axios.post(`http://${ctx.UBICATION_URL}:${ctx.UBICATION_PORT}/${ctx.UBICATION_BASE_ENDPOINT}/${id}/${type}`).then(res => res.data)
}


export const updateUbication = async (_, {id, type}, ctx) => {
    return await axios.put(`http://${ctx.UBICATION_URL}:${ctx.UBICATION_PORT}/${ctx.UBICATION_BASE_ENDPOINT}/${id}/${type}`).then(res => res.data)
}


export const deleteUbication = async (_, {id, type}, ctx) => {
    return await axios.delete(`http://${ctx.UBICATION_URL}:${ctx.UBICATION_PORT}/${ctx.UBICATION_BASE_ENDPOINT}/${id}`).then(res => res.data)
}