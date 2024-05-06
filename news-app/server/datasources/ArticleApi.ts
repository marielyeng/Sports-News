import { RESTDataSource } from '@apollo/datasource-rest';
import { IArticleDto } from '../common/types';
import { strict } from 'assert';

class ArticleApi extends RESTDataSource {
    override baseURL = "http://localhost:7000/";

    public async getArticles(type?: string, limit?: number): Promise<IArticleDto[]> {
        try {
            const params: { [key: string]: string } = {};

            if (type) {
                params['type'] = type;
            }

            if (limit) {
                params['_limit'] = limit.toString();
            }

            const articles: IArticleDto[] = await this.get('articles', { params });
            return articles;
        }
        catch(error) {
            throw error;
        }
    }

    public async getArticleById(id: number): Promise<IArticleDto> {
        try {
            const params: {[ key: string ]: string} = {};
            if (id) {
                const articleId = id.toString();
                const article: IArticleDto = await this.get(`articles/${articleId}`, { params });
                return article;
            }
        }
        catch(error) {
            throw error;
        }
    }
}

export default ArticleApi;