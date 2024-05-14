import { gql } from "@apollo/client";
import { IArticle } from "../../common";

export interface IGetArticleQueryResponse {
    article: IArticle[];
}

export const GET_ARTICLE = gql`
    query getArticleQuery($id: ID) {
        article(id: $id) {
            id
            type
            title
            description
            createdAt
        }
    }
`;