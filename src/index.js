import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';

import Home from "./pages/home/home";
import Comunidade from "./pages/comunidade/comunidade";
import Ajuda from "./pages/ajuda/ajuda";
import Login from "./pages/login/login";
import Setup from "./pages/setup/setup";
import ErrorPage from './pages/Error/ErrorPage';
import LembrarSenha from './pages/lembrarsenha/lembrarsenha';
import Cadastro from './pages/cadastro/cadastro';
import Family from './pages/family/family';
import ComunidadeText from './pages/comunidadeText/comunidadeText';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/comunidade",
        element: <Comunidade />,
      },
      {
        path: "/ajuda",
        element: <Ajuda />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/setup",
        element: <Setup />,
      },
      {
        path: "/lembrarsenha",
        element: <LembrarSenha />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/family",
        element: <Family />,
      },
      {
        path: "/comunidadeText",
        element: <ComunidadeText />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
