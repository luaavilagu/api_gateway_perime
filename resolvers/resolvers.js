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
        updatePublication(_, { id , input }  ){
            
            let values = {};

            if (input.title) {
                values.title = input.title;
              }
          
              if (input.description) {let data = JSON.stringify(input);
                values.description = req.body.description;
              }
      
              if (input.state_publication) {
                  values.state_publication = req.body.state_publication;
              }
      
              if (input.contact_information) {
                  values.contact_information = req.body.contact_information;
              }
      
              if (input.id_image) {
                  values.id_image = req.body.id_image;
              }
      
              if (input.stock) {
                  values.stock = req.body.stock;
              }
      
              if (input.expiration_date) {
                  values.expiration_date = req.body.expiration_date;
              }
      
              if (input.price) {
                  values.price = req.body.price;
              }
      
              if (input.categories) {
                  values.categories = req.body.categories;
              }

            let data = JSON.stringify(values);
            console.log (data);
            axios.post(myurl+`${id}`,data, {
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