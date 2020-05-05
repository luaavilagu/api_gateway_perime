import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET ALL USERS */
export const users = async (_, args, ctx) => {    
    return await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}`).then(res => res.data)    
}

/* GET USER BY ID IN DATABASE */
export const getUser = async (_, {id}, ctx) => {
    return await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}`).then(res => res.data)
}
