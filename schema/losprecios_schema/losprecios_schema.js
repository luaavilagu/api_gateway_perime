export const losprecios_schema = `
type Datos {
  Nombre: String
  Unidad: String
  Descripción: String
  Complemento: String
  NombrePorción: String
  TamañoPorción: String
  TamañoPresentaciónTípica: String
  NombrePresentaciónTípica: String
  RutaImagen: String
  Ítems: [Items]
}
type Items {
  Producto: String
  ProductoID: Int
  Marca: String
  Tamaño: Int
  Unidad: String
  Complemento: String
  RutaImagen: String
  CódigoEAN13: String
  ÍtemsTiendas: [ItemsTiendas]
}
type ItemsTiendas {
  Tienda: String
  TiendaID: Int
  Precio: String
  Fecha: String
}
type Producto {
  Resultado: String
  Datos: [Datos]
  ErrorID: Int
  Mensaje: String
}
`

export const losprecios_querys = `
   getLosPrecios(id: ID, type: Int): Produto
`


