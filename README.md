# api_gateway_perime
api_gateway_perime



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
  getPublication(id: "IdDePublicacion"){
    title
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
getPublication(id: "IdDePublicacion"){
    title
}

```
