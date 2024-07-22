import { createBrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Korzinka from "../Components/Korzinka/Korzinka";
import App from "../App";
/*          Menu End             */

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [   {
            path: "/",
            element: <Header/>,
            children:[{
              path: "/korzinka",
              element: <Korzinka/>,
            }]
        }
       

        ]

    }
 

])
export default router