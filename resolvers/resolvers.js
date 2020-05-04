// Hardcoded data store
import {files, getFile, getFileRegister} from './multimedia_ms/multimedia_querys'
import {storeFile, updateFile, deleteFile} from './multimedia_ms/multimedia_mutations'

import {categorys, products, getCategory, getProduct} from './search_ms/search_querys'
import {postCategory, putCategory, deleteCategory, postProduct, putProduct, deleteProduct } from './search_ms/search_mutations'

import {allUbication, ubicationById, ubicationByPublication} from './ubication_ms/ubication_querys'
import {createUbication, updateUbication, deleteUbication} from './ubication_ms/ubication_mutations'

import {getComment, getComments} from './comments_ms/comments_querys'
import {storeComment,updateComment,deleteComment} from './comments_ms/comments_mutations'

import {users, getUser} from './user_ms/user_querys'
import {storeUser, updateUser, deleteUser} from './user_ms/user_mutations'

import {publications, getPublication} from './publication_ms/publication_querys'
import {createPublication , deletePublication} from './publication_ms/publication_mutations'


const resolvers = {
    Query: {
        files,
        getFile,
        getFileRegister,

        categorys, 
        products, 
        getCategory, 
        getProduct,

        allUbication, 
        ubicationById, 
        ubicationByPublication,

        getComment,
        getComments,

        users,
        getUser,

        publications,
        getPublication

    },

    Mutation: {
        storeFile,
        updateFile,
        deleteFile,
        
        postCategory, 
        putCategory, 
        deleteCategory, 
        postProduct, 
        putProduct, 
        deleteProduct,
        
        createUbication, 
        updateUbication, 
        deleteUbication,

        storeComment,
        updateComment,
        deleteComment,

        storeUser,
        updateUser,
        deleteUser,

        createPublication,
        deletePublication

    }
}

export default resolvers
