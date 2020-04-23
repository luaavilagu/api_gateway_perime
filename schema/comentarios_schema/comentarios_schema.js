export const comments_schema = `
    type Comments {
        id_comments: Int
        id_publication: Int
        text_comment: String
        date_comment: String
        id_user: Int
    }
`

export const comments_querys = `
    getComment(id: ID): Comments
    getComments: [Comments]
`

export const comments_mutations = `
    storeComment(idpubl: ID, iduser: ID, text: String): Comments
    updateComment(id: ID, text: String): Comments
    deleteComment(id: ID): Comments
`