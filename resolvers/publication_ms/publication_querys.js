import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET ALL */
export const publications = async (_, args, ctx) => {    
    return await axios.get(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}`).then(res => res.data)    
}

// /* GET ITEM REGISTER BY ID IN DATABASE */
export const getPublication = async (_, {id}, ctx) => {
    return await axios.get(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}`).then(res => res.data)
}