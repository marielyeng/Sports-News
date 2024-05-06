import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useMemo } from "react";
import { config } from "config";

export const useApolloClient = () => {
    return useMemo(() => {
        const client = new ApolloClient({
            uri: config.GRAPHQL_URI,
            cache: new InMemoryCache(),
        });

        return client;
    }, []);
}