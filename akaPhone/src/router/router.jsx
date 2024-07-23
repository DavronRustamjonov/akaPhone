import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Nested from "../components/Nested";
import Lavash from "../components/Lavash";
import Desert from "../components/Desert";
import Set from "../components/Set";
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
          {
            path: "/",
            element: </>,
          },
          {
            path: "/",
            element: < />,
          },
          {
            path: "/",
            element: < />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
