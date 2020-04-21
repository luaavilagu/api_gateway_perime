// Hardcoded data store
import {files, getFile, getFileRegister, getFileImage} from './multimedia_ms/multimedia_querys'
import {storeFile, updateFile, deleteFile} from './multimedia_ms/multimedia_mutations'

//Publications
import {publications} from './publication_ms/publication_querys'
import {createPublication} from './publication_ms/publication_mutations'

const resolvers = {
    Query: {
        files,
        getFile,
        getFileRegister,
        getFileImage,
        publications
    },

    Mutation: {
        storeFile,
        updateFile,
        deleteFile,
        createPublication
    }
}

export default resolvers