import axios from 'axios';
/* #########################    MUTATION  ######################### */

/* DELETE  BY ID */
export const deteleLosPrecios = async (_, {id}, ctx) => {
    return await axios.delete(`https://${ctx.LOSPRECIOS_URL}/producto/detalles?ID=${id}&ClaveAPI=${ctx.LOSPRECIOS_BASE_ENDPOINT}`).then(res => res.data)
}
