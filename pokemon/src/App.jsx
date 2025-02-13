
import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from "./routes/home.jsx";
import { Layout } from './layout';
import { Pokemon } from './routes/Pokemon';
const router = createBrowserRouter([
  {
     path: "/",
     element: <Layout />,
     children:[
      { path: ":page", element: <Home />,},
      { path: "", element:<Home />},
      { path: "pokemon/:name", element: <Pokemon />},
     ],
  },
])

function App (){
  return <RouterProvider router={router}/>;
}

export default App
