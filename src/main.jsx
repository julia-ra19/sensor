import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import  Home  from './Routes/Home.jsx';
import  Lance  from './Routes/Lance.jsx';
import Equipamentos from './Routes/Equipamentos.jsx';
import Objetivo from './Routes/Objetivo.jsx';
import Publico from './Routes/Publico.jsx';
import Bibliografia from './Routes/Bibliografia.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
  path: "Lance",
  element:  <Lance/>,
  },
  {
  path: "Publico",
  element:  <Publico/>,
  },
  {
    path: "Objetivo",
    element:  <Objetivo/>,
  },
  {
    path: "Equipamentos",
    element:  <Equipamentos/>,
  },
  {
    path: "Bibliografia",
    element:  <Bibliografia/>,
  },
  

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
