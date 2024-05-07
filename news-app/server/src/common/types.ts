import { IncomingHttpHeaders } from "http";
import { IDataSources } from "../datasources";
//import IData

export interface IArticleDto {
    id: number;
    type: string;
    description: string;
    title: string;
    createdAt: string;
}

export interface IArticleParam {
    type?: string;
    limit?: number;
}

export interface IRequesContext {
    headers: IncomingHttpHeaders;
}

export interface IDataSourceContext {
    dataSources: IDataSources
}

export type IBaseDataSource = IRequesContext & IDataSourceContext;