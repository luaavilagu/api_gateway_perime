// Hardcoded data store
import {files, getFile, getFileRegister, getFileImage} from './multimedia_ms/multimedia_querys'
import {storeFile, updateFile, deleteFile} from './multimedia_ms/multimedia_mutations'
import axios from 'axios';

//Publications
import {publications, getPublication} from './publication_ms/publication_querys'
import {myurl} from './publication_ms/publication_mutations'

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
        createPublication(_, { input }  ){
            let data = JSON.stringify(input);
            console.log (data);
            axios.post(myurl,data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => res.data)
            
        }
    }

   
}

export default resolvers