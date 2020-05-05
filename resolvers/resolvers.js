// Hardcoded data store
import {files, getFile, getFileRegister, getFileImage} from './multimedia_ms/multimedia_querys'
import {storeFile, updateFile, deleteFile} from './multimedia_ms/multimedia_mutations'
import axios from 'axios';

//Publications
import {publications, getPublication} from './publication_ms/publication_querys'
import { updatePublication, createPublication, deletePublication} from './publication_ms/publication_mutations'

const resolvers = {
    Query: {
        files,
        getFile,
        getFileRegister,
        getFileImage,
        publications,
        getPublication
    },

    Mutation: {
        storeFile,
        updateFile,
        deleteFile,
        deletePublication,
        createPublication,
        updatePublication        
    }   
}

export default resolvers