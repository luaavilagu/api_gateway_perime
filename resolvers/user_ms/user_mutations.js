import axios from 'axios';

/* #########################    MUTATION  ######################### */

/* STORE USER BY ID AND USER */
export const storeUser = async (_, {input}, ctx) => {
    const data = JSON.stringify(input);
    return await axios.post(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}`, data).then(res => res.data)
}

/* UPDATE USER BY ID AND USER */
export const updateUser = async (_, {id, input}, ctx) => {
    const data = JSON.stringify(input);
    return await axios.put(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}`,data).then(res => res.data)
}

/* DELETE USER BY ID */
export const deleteUser = async (_, {id}, ctx) => {
    return await axios.delete(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.USER_BASE_ENDPOINT}/${id}`).then(res => res.data)
}
