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
        trends(type: String): [Trends]
        article(id: Int): [Articles]
    }
`

export { typeDefs };