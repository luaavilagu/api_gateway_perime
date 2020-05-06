import axios from 'axios';

/* #########################    MUTATION  ######################### */

/* STORE USER BY ID AND USER */
export const storeUser = async (_, {input}, ctx) => {
    const data = JSON.stringify(input);
    return await axios.post(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}`, data, {headers: {'Content-Type': 'application/json'}}).then(res => res.data)
}

/* UPDATE USER BY ID AND USER */
export const updateUser = async (_, {id, input, token}, ctx) => {
    const data = JSON.stringify(input);
    return await axios.put(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}`,data, {headers: {'Content-Type': 'application/json', 'Authorization': "Bearer "`${token}`}}).then(res => res.data)
}

/* DELETE USER BY ID */
export const deleteUser = async (_, {id, token}, ctx) => {
    return await axios.delete(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}`, {headers: {'Authorization': "Bearer "`${token}`}}).then(res => res.data)
}

