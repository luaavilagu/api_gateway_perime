import axios from 'axios';

/* #########################    MUTATION  ######################### */

/* LOGIN USER BY EMAIL AND PASSWORD */
export const loginUser = async (_, {input}, ctx) => {
    const data = JSON.stringify(input);
    return await axios.post(`http://${ctx.USER_URL}:${ctx.USER_PORT}/${ctx.LOGIN_BASE_ENDPOINT}`, data, {headers: {'Content-Type': 'application/json'}}).then(res => res.data)
}
