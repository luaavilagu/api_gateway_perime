import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* Get All Publications*/
export const publications = async (_, args, ctx) => {    
    return await axios.get(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}`).then(res => res.data)    
}


/* Get Publication By ID */

export const getPublication = async (_, {id}, ctx) => {
    return await axios.get(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}`).then(res => res.data)
}

