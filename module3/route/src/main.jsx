import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About } from './routes/about';
import { Layout } from './layout';
import { Profile } from './routes/profile';
import { SpecificProfile } from './routes/specificProfile';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "",
      element: <App />
    },
    {
      path: "about",
      element: <About />,
      children: [
        {
        path: "me",
        element: <h2>This is our outlet</h2>,
      }
      ],
    },
    {
      path: "profile",
      element: <Profile />,
      children: [
        {
          path: ":name",
          element: <SpecificProfile />
        }
      ]
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
