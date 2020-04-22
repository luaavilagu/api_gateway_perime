export const search_schema = `
    type Category {
        id_categoy: ID
        name_category: String
        type_category: String
    }
    type Product{
        id_product: ID
        id_category: Int
        name_product: String
        description_product: String
    }
    
`

export const search_querys = `
    getCategory(id: ID): Category
    categorys: [Category]
    getProduct(id: ID): Product
    products: [Product]
`

export const search_mutations = `
    postCategory(id: ID): Category
    putCategory(id: ID): Category
    deleteCategory(id: ID): Category
    postProduct(id: ID): Product
    putProduct(id: ID): Product
    deleteProduct(id: ID): Product
`
