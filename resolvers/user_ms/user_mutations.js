import db from '../../database_simulation'
import axios from 'axios';
import { user_mutations } from '../../schema/user_schema/user_schema';

export const urlUser = 'http://54.80.217.100:5000/perime-user-ms/user/';

/* #########################    MUTATION  ######################### */

/* STORE USER BY ID AND USER */
//export const storeUser = async (_, input, ctx) => {
//    return await axios.post(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}`,  {JSON.stringify(input)}, {'Content-Type': 'application/json'}).then(res => res.data)
//}

/* UPDATE USER BY ID AND USER */
//export const updateUser = async (_, {id, input}, ctx) => {
//    return await axios.put(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}/${User}`,{JSON,stringify(input)}).then(res => res.data)
//}

/* DELETE USER BY ID */
export const deleteUser = async (_, {id}, ctx) => {
    return await axios.delete(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}`).then(res => res.data)
}
