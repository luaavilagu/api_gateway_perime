import axios from 'axios';

/* #########################    MUTATION  ######################### */

/* STORE FILE IMAGE BY ID AND TYPE */
export const storeComment = async (_,{idpubl,iduser,text}, ctx) => {
    return await axios.post(`http://${ctx.COMMENTS_URL}:${ctx.COMMENTS_PORT}/add/${idpubl}/${iduser}/${text}`).then(res => res.data)
}

/* UPDATE FILE IMAGE BY ID AND TYPE */
export const updateComment = async (_,{id,text}, ctx) => {
    return await axios.put(`http://${ctx.COMMENTS_URL}:${ctx.COMMENTS_PORT}/update/${id}/${text}`).then(res => res.data)
}

/* DELETE FILE IMAGE BY ID AND TYPE */
export const deleteComment = async (_,{id}, ctx) => {
    return await axios.delete(`http://${ctx.COMMENTS_URL}:${ctx.COMMENTS_PORT}/delete/${id}`).then(res => res.data)
}
