import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main';
import {ReactElement} from "react";

export default function Routes() : ReactElement {
    const routeList = createBrowserRouter([
        {
            path: '/',
            element: <MainPage />,
        },
    ]);

    return <RouterProvider router={routeList} />;
}
