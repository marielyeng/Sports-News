import { RESTDataSource } from '@apollo/datasource-rest';
import { IArticleDto } from '../../common/types';

class ArticleApi extends RESTDataSource {
    baseURL = "http://localhost:7000/";

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
        } catch(error) {
            console.log('An error occurred');
            throw error;
        }
    }

    public async getArticleById(id: number): Promise<IArticleDto> {
        try {
            const articleId = id.toString();
            const articles: IArticleDto = await this.get(`articles/${articleId}`);
            return articles;
        } catch(error) {
            console.log('An error occurred in getArticleById:', error);
            throw error;
        }
    }
    
}

export default ArticleApi;