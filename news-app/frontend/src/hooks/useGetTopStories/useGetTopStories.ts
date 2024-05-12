import { useQuery } from "@apollo/client";
import { GET_TOP_STORIES, IGetTrendsQueryResponse } from "../../data/queries";

export const useGetTopStory = (type?: string) => {
    const { loading, data, error } = useQuery<IGetTrendsQueryResponse>(GET_TOP_STORIES, {
        variables: {
            type,
        }
    })

    return { loading, data, error, type}
}