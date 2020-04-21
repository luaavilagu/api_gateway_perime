import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET ALL */
export const files = async (_, args, ctx) => {    
    return await axios.get(`http://${ctx.MULTIMEDIA_URL}:${ctx.MULTIMEDIA_PORT}/${ctx.MULTIMEDIA_BASE_ENDPOINT}`).then(res => res.data)    
}

/* GET ITEM REGISTER BY ID IN DATABASE */
export const getFile = async (_, {id}, ctx) => {
    return await axios.get(`http://${ctx.MULTIMEDIA_URL}:${ctx.MULTIMEDIA_PORT}/${ctx.MULTIMEDIA_BASE_ENDPOINT}/${id}`).then(res => res.data)
}

/* GET ITEM REGISTER BY TYPE AND ID OF TYPE MODEL */
export const getFileRegister = async (_,{id, type}, ctx) => {
    return await axios.get(`http://${ctx.MULTIMEDIA_URL}:${ctx.MULTIMEDIA_PORT}/${ctx.MULTIMEDIA_BASE_ENDPOINT}/${id}/${type}/register`).then(res => res.data)
}