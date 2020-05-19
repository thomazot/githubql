export const getUsers =  /* GraphQL */ `
    query getUsers($search: String!) {
        search(type: USER, query: $search, last: 20) {
            userCount,
            edges{
                node {
                    ... on User{
                        id
                        name
                        avatarUrl
                    }
                }
            }
        }
    }
`