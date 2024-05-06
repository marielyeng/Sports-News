import ArticleApi from "./ArticleApi";

export interface IDataSources {
    articleApi: ArticleApi;
}

export default {
    articleApi: new ArticleApi()
};