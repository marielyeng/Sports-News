import { Router } from "@remix-run/router";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "pages/Home/Home";

const router: Router =  createBrowserRouter([{
    path: '/',
    element: <Home />
}]);

export const AppRoute: React.FC = () => {
    return <RouterProvider router={router} />;
}