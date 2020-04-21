export const publication_schema = `
    type Publication {
        _id: String!
        title: String
        state_publication: Boolean
        contact_information: String
        id_image: String
        stock: String
        expiration_date: String
        price: String
        categories: [String]
    }
`

export const publication_querys = `
    publications: [Publication!]!
`
// getFile(id: ID): Multimedia
// getFileRegister(id: ID, type: String): Multimedia
// getFileImage(id: ID, type: String): Multimedia
export const publication_mutations = `
    createPublication(id: String!): Publication
`
    // updateFile(id: ID, type: String): Multimedia
    // deleteFile(id: ID, type: String): Multimedia