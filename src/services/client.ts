import { GraphQLClient } from 'graphql-request'

const token = process.env.REACT_APP_TOKEN
const endpoint = 'https://api.github.com/graphql'
const headers = {
    'Authorization': `bearer ${token}`
}

const client = new GraphQLClient(endpoint, { headers })

export default client