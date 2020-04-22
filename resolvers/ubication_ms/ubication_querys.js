import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET ALL */
export const allUbication = async (_, args, ctx) => {    
    return await axios.get(`http://${ctx.UBICATION_URL}:${ctx.UBICATION_PORT}/${ctx.UBICATION_BASE_ENDPOINT}`).then(res => res.data)    
}


export const ubicationById = async (_, {id, type}, ctx) => {
    return await axios.get(`http://${ctx.UBICATION_URL}:${ctx.UBICATION_PORT}/${ctx.UBICATION_BASE_ENDPOINT}/${id}`).then(res => res.data)
}


export const ubicationByPublication = async (_, {id, idPublication}, ctx) => {
    return await axios.get(`http://${ctx.UBICATION_URL}:${ctx.UBICATION_PORT}/${ctx.UBICATION_BASE_ENDPOINT}/${idPublication}`).then(res => res.data)
}


