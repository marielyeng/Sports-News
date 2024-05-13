import React from "react";
import { GenericError } from "./components/GenericError";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";

export default function WithErrorBoundary(): any {
    
    return (
        <ErrorBoundary
            FallbackComponent={() => {
                return (
                        <GenericError />
                )
            }}
            >
                <App />
            </ErrorBoundary>
    );
}