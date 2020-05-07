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

# Microservicio Busqueda

## Querys Disponibles

- **Solicitar todas las categorias:**

```
{
  categorys
 {
  id_category
  name_category
  type_category
}
}
```

- **Solicitar una categoria en especifico y obtener solo su nombre:**

```
{
  getCategory(id:1)
  {
    id_category
    name_category
    type_category
  }
}
  
```

```
{
  categorys
 {
  id_category
  name_category
  type_category
}
}
```
- **Solicitar todos los productos:**

```
{
  products
  {
    id_product
    id_category
    name_product
    description_product
  }
}
```
- **Solicitar un producto en especifico y obtener solo su nombre:**

```
{
  getProduct(id: 2)
  {
    name_product
  }
}
```

# Microservicio Usuario

## Querys Disponibles

- **Solicitar todos los usuarios con todos sus atributos:**

```
{
  users{
    id_user,
    username_user,
    passhash_user
    address_user,
    cellphone_user,
    email_user
  }
}
```

- **Solicitar el usuario con id igual a 1 con todos sus atributos:**

```
{
  getUser(id: 1){
    username_user,
    passhash_user,
    address_user,
    cellphone_user,
    email_user
  }
}
  
```

## Mutations Disponibles

- **Crear un nuevo usuario**
```
mutation{
  storeUser(input:{      
    username_user: "exampleuser",
    passhash_user: "examplepassword",
    address_user: "Cra 102 # 80 - 51",
    cellphone_user: "3200000000",
    email_user: "exampleuser@examplec.com"    
  })
  {
    id_user,
    username_user,
    passhash_user,
    address_user,
    cellphone_user,
    email_user
  }
}
  
```

- **Eliminar un usuario con el ID igual a 1 y traer todos sus atributos**

```
mutation{
  deleteUser(id: 1    
  })
  {
    id_user,
    username_user,
    passhash_user,
    address_user,
    cellphone_user,
    email_user
  }
}

```

- **Editar un usuario con el ID igual a 1 y traer todos sus atributos**

```
mutation{
  updateUser(id: 1, input:{      
    username_user: "updateuser",
    passhash_user: "updatepassword",
    address_user: "Cll. 102 # 80 - 51",
    cellphone_user: "3200000001",
    email_user: "updateuser@examplec.com"    
  })
  {
    id_user,
    username_user,
    passhash_user,
    address_user,
    cellphone_user,
    email_user
  }
}
```


