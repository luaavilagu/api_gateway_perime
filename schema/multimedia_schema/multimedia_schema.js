export const multimedia_schema = `
    type Multimedia {
        id_model_media: Int
        type_model_media: String
        path_media: String
    }
`

export const multimedia_querys = `
    files: [Multimedia]
    getFile(id: ID): Multimedia
    getFileRegister(id: ID, type: String): Multimedia
`

export const multimedia_mutations = `
    storeFile(id: ID, type: String, file: String): Multimedia
    updateFile(id: ID, type: String, file: String): Multimedia
    deleteFile(id: ID, type: String): Multimedia    
`