import ArticleApi from "./ArticleApi/ArticleApi";
import TrendsApi from "./TrendsApi/TrendsApi";

export interface IDataSources {
    articleApi: ArticleApi;
    trendsApi: TrendsApi;
}

export default {
    articleApi: new ArticleApi(),
    trendsApi: new TrendsApi()
};