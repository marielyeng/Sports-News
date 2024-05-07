import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { IDataSourceContext } from './common/types';
import { resolvers } from './resolver';
import typeDefs from './schema';
import ArticleApi from './datasources/ArticleApi/ArticleApi';
import TrendsApi from './datasources/TrendsApi/TrendsApi';

const server = new ApolloServer<IDataSourceContext>({
    typeDefs,
    resolvers
})

// `startStandaloneServer` returns a `Promise` with the
// the URL that the server is listening on.
const { url } = await startStandaloneServer(server, {
    context: async () => {
        return {
            dataSources: {
                articleApi: new ArticleApi(),
                trendsApi: new TrendsApi(),
            }
        }
    },
    listen: { port: 5000 },
});

console.log(`🚀 Server ready at: ${url}`);