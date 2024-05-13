import { Router } from "@remix-run/router";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";
import { Basketball } from "./pages/Basketball/Basketball";
import { AboutUs } from "./pages/AboutUs";
import { Football } from "./pages/Football";
import { ArticlePage } from "./pages/Article/Article";

const router: Router =  createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/basketball',
        element: <Basketball />
    },
    {
        path: '/football',
        element: <Football />
    },
    {
        path: '/aboutus',
        element: <AboutUs />
    },
    {
        path: '/article/id',
        element: <ArticlePage />
    }
]);

export const AppRoute: React.FC = () => {
    return <RouterProvider router={router} />;
}