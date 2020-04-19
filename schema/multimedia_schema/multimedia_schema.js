export const multimedia_schema = `
    type Multimedia {
        _id: ID
        multiable_id: Int
        multiable_type: String
        multiable_path: String
    }
`

export const multimedia_querys = `
    files: [Multimedia]
    getFile(id: ID): Multimedia
    getFileRegister(id: ID, type: String): Multimedia
    getFileImage(id: ID, type: String): Multimedia
`

export const multimedia_mutations = `
    storeFile(id: ID, type: String): Multimedia
    updateFile(id: ID, type: String): Multimedia
    deleteFile(id: ID, type: String): Multimedia
`