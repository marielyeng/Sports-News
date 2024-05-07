import { useQuery } from "@apollo/client";
import { GET_ARTICLE, IGetArticleQueryResponse } from "data/queries";

export const useGetArticle = (id: number) => {
    const { loading, data, error } = useQuery<IGetArticleQueryResponse>(GET_ARTICLE, {
        variables: {
            id
        }
    })

    return { loading, data, error}
}