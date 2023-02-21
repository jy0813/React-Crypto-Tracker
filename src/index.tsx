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
import Chart from "./page/Chart";
import Price from "./page/Price";
import {QueryClient, QueryClientProvider } from "react-query";



const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {index: true, path: '/', element: <Coins/>},
      {
        path: '/:coinId',
        element: <Coin/>,
        children:[
          {path:'chart', element:<Chart/>},
          {path:'price', element:<Price/>},
        ]
      },
    ]
  }
]);


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router}/>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
);

