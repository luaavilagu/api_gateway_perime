/* #########################    MUTATION  ######################### */
// import { publicationInput } from './publication_schema/publication_schema'

/* STORE FILE IMAGE BY ID AND TYPE */

export const myurl = `http://publicatons2.centralus.cloudapp.azure.com:3000/publications/` ;

console.log(myurl);
// export const createPublication = ( { input: publicationInput }, ctx) => {
 
//     let data = JSON.stringify({
//         title: this.nuevo.title,
//         description: this.nuevo.description
//     })


//     var sender = async ( _ , {id}, ctx) => {
//     return await axios.post(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}`,data, {
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }).then(res => res.data)
// }

/* UPDATE FILE IMAGE BY ID AND TYPE */
// export const updateFile = async (_, {id, type}, ctx) => {
//     return await axios.put(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}/${type}`).then(res => res.data)
// }

// /* DELETE FILE IMAGE BY ID AND TYPE */
// export const deletePublication = async (_, {id, type}, ctx) => {
//     return await axios.delete(`http://${ctx.PUBLICATION_URL}:${ctx.PUBLICATION_PORT}/${ctx.PUBLICATION_BASE_ENDPOINT}/${id}/${type}`).then(res => res.data)
// }
