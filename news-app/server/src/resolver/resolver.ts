import { IDataSources } from "../datasources";
import { IArticleParam } from "../common/types";

const resolvers = {
    Query: {
        articles: async (
            _: any,
            { type, limit}: IArticleParam,
            { dataSources }: { dataSources: IDataSources}
        ): Promise<any[]> => {
            const articles = await dataSources.articleApi.getArticles(type, limit);
            return articles;
        },
        trends: async (
            _: any,
            { type }: {type?: string},
            { dataSources }: {dataSources: IDataSources}
        ): Promise<any> => {
            const trends = await dataSources.trendsApi.getAllTrends(type);
            return trends;
        },
        article: async (
            _: any,
            { id }: {id: number},
            { dataSources }: { dataSources: IDataSources}
        ) => {
            const article = await dataSources.articleApi.getArticleById(id)
            return article;
        }
    }
}

export { resolvers };