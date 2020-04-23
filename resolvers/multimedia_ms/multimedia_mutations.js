import axios from 'axios';
/* #########################    MUTATION  ######################### */

/* STORE FILE IMAGE BY ID AND TYPE */
export const storeFile = async (_, {id, type, file}, ctx) => {
    return await axios.post(`http://${ctx.MULTIMEDIA_URL}:${ctx.MULTIMEDIA_PORT}/${ctx.MULTIMEDIA_BASE_ENDPOINT}/${id}/${type}`, {mediafile:file}).then(res => res.data);
}

/* UPDATE FILE IMAGE BY ID AND TYPE */
export const updateFile = async (_, {id, type, file}, ctx) => {
    return await axios.put(`http://${ctx.MULTIMEDIA_URL}:${ctx.MULTIMEDIA_PORT}/${ctx.MULTIMEDIA_BASE_ENDPOINT}/${id}/${type}`, {mediafile:file}).then(res => res.data)
}

/* DELETE FILE IMAGE BY ID AND TYPE */
export const deleteFile = async (_, {id, type}, ctx) => {
    return await axios.delete(`http://${ctx.MULTIMEDIA_URL}:${ctx.MULTIMEDIA_PORT}/${ctx.MULTIMEDIA_BASE_ENDPOINT}/${id}/${type}`).then(res => res.data)
}