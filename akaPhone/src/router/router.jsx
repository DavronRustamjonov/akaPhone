import { createBrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
// import Korzinka from "../Components/Korzinka/Korzinka";
import App from "../App";
import Hero from "../Components/Hero/Hero";
import Section from "../Components/Section/Section";
/*          Menu End             */

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [   {
            path: "/",
            element: <Header/>,
         children:[{
            path: "/",
            element: <Hero/>,
        },
        {

        }
    
    ]

        },
       {
        path: "/",
        element: <Section/>,

       }

        ]

    }
 

])
export default router