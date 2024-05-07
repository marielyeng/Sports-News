import { useQuery } from "@apollo/client";
import { GET_ARTICLES, IGetArticlesQueryResponse } from "data/queries";

export const useGetArticles = (type?: string, limit?: number) => {
    const { loading, data, error } = useQuery<IGetArticlesQueryResponse>(GET_ARTICLES, {
        variables: {
            type,
            limit
        }
    })

    return { loading, data, error, type, limit}
}