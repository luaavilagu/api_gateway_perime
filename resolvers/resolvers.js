// Hardcoded data store
import {files, getFile, getFileRegister, getFileImage} from './multimedia_ms/multimedia_querys'
import {storeFile, updateFile, deleteFile} from './multimedia_ms/multimedia_mutations'
import axios from 'axios';

//Publications
import {publications, getPublication} from './publication_ms/publication_querys'
import {myurl , deletePublication} from './publication_ms/publication_mutations'

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
        createPublication(_, { input }  ){
            let data = JSON.stringify(input);
            console.log (data);
            axios.post(myurl,data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                console.log(response);
                return response;
              }, (error) => {
                console.log(error);
              });
               
        },
        
    }

   
}

export default resolvers