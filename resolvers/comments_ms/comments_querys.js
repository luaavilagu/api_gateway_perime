import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET ITEM REGISTER BY ID IN DATABASE */
export const getComment = async (_, {id}, ctx) => {
    return await axios.get(`http://${ctx.COMMENTS_URL}:${ctx.COMMENTS_PORT}/comment/${id}`).then(res => res.data)
}

export const getComments = async (_, args, ctx) => {
    return await axios.get(`http://${ctx.COMMENTS_URL}:${ctx.COMMENTS_PORT}/comments`).then(res => res.data)
}


