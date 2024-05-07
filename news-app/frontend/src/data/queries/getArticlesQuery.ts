import { gql } from "@apollo/client";
import { IArticle } from "common";

export interface IGetArticlesQueryResponse {
    articles: IArticle[];
}

export const GET_ARTICLES = gql`
    query getArticlesQuery($type: String, $limit: Int) {
        articles(type: $type, limit: $limit) {
            id
            type
            title
            description
            createdAt
        }
    }
`;