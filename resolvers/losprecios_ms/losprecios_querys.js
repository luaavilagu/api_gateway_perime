import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET ALL */
export const getProductosLosPrecios = async (_, {id}, ctx) => {    
    return await axios.get(`http://${ctx.LOSPRECIOS_URL}/producto/detalles?ID${id}&ClaveAPI=${ctx.LOSPRECIOS_API}`).then(res => res.data)    
}
