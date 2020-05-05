# api_gateway_perime
Esta API Gateway corre sobre Docker y con tecnología de GraphQL 

## Deploy 
Para desplegar esta aplicación en docker use :

```
sudo docker-compose up --build
```

# Microservicio de Multimedia

## QUERYS

```
{

  files{
  	id_model_media
    type_model_media
    path_media
  }
  
  getFile(id:5){
    type_model_media
    id_model_media
    path_media
  }
  
  getFileRegister(id:2, type:"USER"){
    id_model_media
    type_model_media
    path_media
  }

}
```
## MUTATIONS

```
mutation ($file: String){
  
  storeFile(id:1, type:"USER", file: $file){
    id_model_media
    type_model_media
    path_media
  }
}
mutation ($file: String){
  updateFile(id:5, type: "PUBLICATION", file: $file){
    id_model_media
    type_model_media
    path_media
  }
}
mutation {
  deleteFile(id:1, type: "USER"){
    id_model_media
    type_model_media
    path_media
  }
}
```

# Microservicio Publicaciones

## Querys Disponibles

- **Solicitar todas las publicaciones:**

```
{
  publications{
    title
    description
    state_publication
    id_image
    stock
    expiration_date
    price
    categories
  }
}
```

- **Solicitar una publicación en especifico y obtener solo titulo:**

```
{
  getPublication(id: "5eb0b8022727be001995a06d"){
    title
  }
}
  
```

## Mutations Disponibles

- **Crear una nueva publicación**
```
mutation{
  createPublication(input:{      
        title: "Arroz morado",
        description: "Arroz marca diana ",
        state_publication: true,
        contact_information: "3132456343",
        id_image: "2",
        stock: "3",
        expiration_date: "2016-05-18T16:00:00Z",
        price: "20",
        categories: [
            "arroz",
            "diana",
            "blanco",
            "grano"
        ]
    
  }){
    title
  }
}
  
```

- **Eliminar una publicación con el ID**

```
deletePublication(id: "5eb0b8022727be001995a06d"){
    title
}

```

- **Editar una publicación con el ID**

```
mutation{
  updatePublication(
    id:"5eb0f9d3c0c12f0012a0b7fc",
    input:{
      title: "test 2:10 am con "
    }
  )
  {
    title
    description
  }
}
```
