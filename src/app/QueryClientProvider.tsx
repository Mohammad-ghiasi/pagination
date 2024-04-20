"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const client = new QueryClient({
    defaultOptions:{
        queries:{
            gcTime: 20000,
            // ...
        }
    }
});
export const QueryClientProviders = ({children}: {children: React.ReactNode}) => {
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}