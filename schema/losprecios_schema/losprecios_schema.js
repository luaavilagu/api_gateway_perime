export const losprecios_schema = `
type Datos{
        ID: ID
        Nombre: String
        Unidad: String
        
        

        NombrePorción: String
        TamañoPorción: Int
        TamañoPresentaciónTípica: Int
        NombrePresentaciónTípica: String
        RutaImagen: String
        
        TotalÍtems: Int
        Categoría: String
        Subcategoría: String
    }
`

export const losprecios_querys = `
    getLosPrecios: String
`

