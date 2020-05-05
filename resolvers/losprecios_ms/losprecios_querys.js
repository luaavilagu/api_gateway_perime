import axios from 'axios';

/* #########################    QUERYS  ######################### */

/* GET LosPrecios */
export const getLosPrecios = async (_,args, ctx) => {
  return await axios.get(`https://losprecios.co/producto/detalles?ID=1256&ClaveAPI=uExmJrA_831WXmWr`).then(res => res.json).then(json => json.Datos)
}
