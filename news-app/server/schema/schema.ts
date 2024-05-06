const typeDefs =`
    type Articles {
        id: ID
        type: String
        title: String
        description: String
        createdAt: String
    }

    type Trends {
        id: ID
        type: String
        title: String
        description: String
        createdAt: String
    }

    type Query {
        articles(type: String, limit: Int): [Articles]
        article(id: Int): [Articles]
        trends(type: String): [Trends]
    }
`

export { typeDefs };