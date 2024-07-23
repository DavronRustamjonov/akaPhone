import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Slider from "../Components/Slider";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        
        path: "/",
        element: <Slider/>,
        children: [
         
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
