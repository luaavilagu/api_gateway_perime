export const login_schema = `

    input LoginInput {
        email: String
        password: String
    }
`

export const login_mutations = `
    loginUser(input: LoginInput): String
`