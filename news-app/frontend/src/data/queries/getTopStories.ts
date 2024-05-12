import { gql } from "@apollo/client";
import { IArticle } from "../../common";

export interface IGetTrendsQueryResponse {
    trends: IArticle[];
}

export const GET_TOP_STORIES = gql`
    query getTrendsQuery($type: String) {
        trends(type: $type) {
            id
            type
            title
            description
            createdAt
        }
    }
`;