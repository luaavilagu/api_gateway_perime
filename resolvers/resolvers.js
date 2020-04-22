// Hardcoded data store
import {files, getFile, getFileRegister} from './multimedia_ms/multimedia_querys'
import {storeFile, updateFile, deleteFile} from './multimedia_ms/multimedia_mutations'

import {categorias, productos, getCategoria, getProducto} from './busqueda_ms/busqueda_querys'
import {postCategoria, putCategoria, deleteCategoria, postProducto, putProducto, deleteProducto } from './busqueda_ms/busqueda_mutations'

import {allUbication, ubicationById, ubicationByPublication} from './ubication_ms/ubication_querys'
import {createUbication, updateUbication, deleteUbication} from './ubication_ms/ubication_mutations'

const resolvers = {
    Query: {
        files,
        getFile,
        getFileRegister,

        categorias, 
        productos, 
        getCategoria, 
        getProducto,

        allUbication, 
        ubicationById, 
        ubicationByPublication
    },

    Mutation: {
        storeFile,
        updateFile,
        deleteFile,
        
        postCategoria, 
        putCategoria, 
        deleteCategoria, 
        postProducto, 
        putProducto, 
        deleteProducto,
        
        createUbication, 
        updateUbication, 
        deleteUbication
    }
}

export default resolvers