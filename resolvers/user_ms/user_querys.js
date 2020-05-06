import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET ALL USERS */
export const users = async (_, {token}, ctx) => {    
    return await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}`, {headers: {'Content-Type': 'application/json', 'Authorization': "Bearer "`${token}`}}).then(res => res.data)    
}

/* GET USER BY ID IN DATABASE */
export const getUser = async (_, {token, email}, ctx) => {
    return await axios.get(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${email}`, {headers: {'Content-Type': 'application/json', 'Authorization': "Bearer "`${token}`}}).then(res => res.data)
}
