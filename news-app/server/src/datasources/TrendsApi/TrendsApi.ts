import { RESTDataSource } from '@apollo/datasource-rest';
import { IArticleDto } from '../../common/types';

class TrendsApi extends RESTDataSource {
    baseURL = "http://localhost:7000/";

    public async getAllTrends(type?: string): Promise<IArticleDto[]> {
        try {
            const trends: IArticleDto[] = type !==undefined ? await this.get(`/trends?type=$${type}`) : await this.get(`/trends`);

            if (!trends) {
                throw new Error('Error while fetching data');
            }
            return trends;
        }
        catch(error) {
            throw error;
        }
    }
}

export default TrendsApi;