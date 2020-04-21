// Hardcoded data store
import {files, getFile, getFileRegister} from './multimedia_ms/multimedia_querys'
import {storeFile, updateFile, deleteFile} from './multimedia_ms/multimedia_mutations'

const resolvers = {
    Query: {
        files,
        getFile,
        getFileRegister,
    },

    Mutation: {
        storeFile,
        updateFile,
        deleteFile,
    }
}

export default resolvers