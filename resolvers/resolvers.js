// Hardcoded data store
import {files, getFile, getFileRegister, getFileImage} from './multimedia_ms/multimedia_querys'
import {storeFile, updateFile, deleteFile} from './multimedia_ms/multimedia_mutations'

import {users, getUser} from './user_ms/user_querys'
import {storeUser, updateUser, deleteUser} from './user_ms/user_mutations'
import Axios from 'axios'

import {urlUser} from './user_ms/user_mutations'

const resolvers = {
    Query: {
        files,
        getFile,
        getFileRegister,
        getFileImage,
        //perime-user-ms
        users,
        getUser
    },

    Mutation: {
        storeFile,
        updateFile,
        deleteFile,
        //perime-user-ms
        storeUser(_, {input} ){
            let data = JSON.stringify(input);
            Axios.post(urlUser, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            ).then(res => res.data)
        },

        updateUser(_, {id, input} ){
            let data = JSON.stringify(input);
            Axios.put(urlUser + id , data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            ).then(res => res.data)
        },

        deleteUser
    }
}

export default resolvers