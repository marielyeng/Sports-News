import { RESTDataSource } from '@apollo/datasource-rest';
import { IArticleDto } from '../../common/types';

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
        } catch(error) {
            console.log('An error occurred');
            throw error;
        }
    }

    public async getArticleById(id: number): Promise<IArticleDto> {
        try {
            const params: {[ key: string ]: string} = {};
            
            const articleId = id.toString();
            const article: IArticleDto = await this.get(`articles/${articleId}`, { params });
            return article;
            
        } catch(error) {
            console.log('An error occurred');
            throw error;
        }
    }
}

export default ArticleApi;