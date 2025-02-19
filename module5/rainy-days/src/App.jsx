
import './index.css'
import { Header } from './components/Layout/Header';
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from './components/Layout';
import { Products } from './routes/Products';
import { SpecificProduct } from './routes/SpecificProducts';
const router = createBrowserRouter([
  {
   path: "/",
   element: <Layout />,
   children:[
         { path: "", element: <div>Home</div> },
         { path: "products", element: <Products /> },
         {
         path: "/product/:id",
         element: <SpecificProduct />,
        },
      ]
  },
])
function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
