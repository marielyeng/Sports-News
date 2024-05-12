import { Slice, createSlice } from "@reduxjs/toolkit";
import { ArticleSlice } from "../common";

export const initialState: ArticleSlice = {
    articles: []
};

export const articleSlice: Slice = createSlice<ArticleSlice, any, any, any>({
    name: "article",
    initialState: initialState,
    reducers: {}
},
);
