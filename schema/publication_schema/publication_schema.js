export const publication_schema = `
    input PublicationInput{
        _id: ID
        title: String
        description: String
        state_publication: Boolean
        contact_information: String
        id_image: String
        stock: String
        expiration_date: String
        price: String
        categories: [String]
    }
    
    type Publication {
        _id: ID
        title: String
        description: String
        state_publication: Boolean
        contact_information: String
        id_image: String
        stock: String
        expiration_date: String
        price: String
        categories: [String]
    },

`

export const publication_querys = `
    publications: [Publication!]!
    getPublication(id: ID): Publication
`

export const publication_mutations = `
    createPublication( input: PublicationInput ): Publication
    deletePublication( id: ID ): Publication
    updatePublication( id: ID , input: PublicationInput ): Publication
`


