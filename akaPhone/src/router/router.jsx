import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Components/Layout";
import Korzinka from "../Components/Korzinka/Korzinka";
import GooglePixselBlack from "../Components/Details/GooglePixselBlack";
import SamsungS7 from "../Components/Details/SamsungS7";
import Htc10Blask from "../Components/Details/Htc10Blask";
import VintageIphone from "../Components/Details/VintageIphone";
import LenovoIdeaPad from "../Components/Details/LenovoIdeaPad";
import HoliticChange from "../Components/Details/HoliticChange";
import KresloINDI from "../Components/Details/KresloINDi";
import XyberXcloudStringer from "../Components/Details/XyberXcloudStringer";
import GalaxyTab from "../Components/Details/GalaxyTab";
//   const dataLink=[{
//     span:"GOOGLE"
//   },{
//     span:"SAMSUNG"
//   },{
//     span:"Htc"
//   },{
//     span:"Apple"
//   },{
//     span:"Lenovo"
//   },{
//     span:"INDI"
//   },{
//     span:"AsaxiyUZ"
//   },{
//     span:"HyperX"
//   },{
//     span:"Galaxy"
//   }
// ]
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
      },{
        path: "/details/googlepixelblack",
        element: <GooglePixselBlack/>,
      },{
        path: "/details/samsungs7",
        element: <SamsungS7/>,
      },{
        path: "/details/htc10black",
        element: <Htc10Blask/>,
      },{
        path: "/details/vintageIphone",
        element: <VintageIphone/>,
      },{
        path: "/details/lenovoIdeapad",
        element: <LenovoIdeaPad/>,
      },{
        path: "/details/kresloINDI",
        element: <KresloINDI/>,
      },{
        path: "/details/holiticChange",
        element: <HoliticChange/>,
      },{
        path: "/details/xyberXcloudStringer",
        element: <XyberXcloudStringer/>,
      },{
        path: "/details/Galaxy",
        element: <GalaxyTab/>,
      }

    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
