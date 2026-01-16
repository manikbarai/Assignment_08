import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    errorElement: <ErrorPage/>,
    hydrateFallbackElement: <p>Loading...</p>,
    children:[
        {
            index: true ,
            element:<Home/>,
            loader: ()=> fetch('./appData.json'),
        },
        {
            path:'/apps',
            element:<Apps/>
        },
        {
            path:'/installation',
            element:<Installation/>
        },
        {
          path: '/appDetails/:id',
          element: <AppDetails/>
        },
    ]
  },
]);
export default router;