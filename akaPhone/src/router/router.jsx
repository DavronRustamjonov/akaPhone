import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Components/Layout";
import Korzinka from "../Components/Korzinka/Korzinka";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {        
        path: "/",
        element: <Layout/>,
      },
      {
        path: "/korzinka",
        element: <Korzinka/>,
      }
      
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
