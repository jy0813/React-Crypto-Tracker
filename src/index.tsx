import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./page/NotFound";
import Coins from "./page/Coins";
import Coin from "./page/Coin";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<NotFound/>,
        children:[
            {index:true,path:'/', element:<Coins/>},
            {path:'/:coinId', element:<Coin/>},
        ]
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);

