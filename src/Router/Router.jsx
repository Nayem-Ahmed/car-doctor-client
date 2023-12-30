import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home/Home";
import About from "../Component/About";
import Services from "../Component/Services";
import Blog from "../Component/Blog";
import Contact from "../Component/Contact";
import Login from "../Component/Login";
import Signup from "../Component/Signup";
import Servicedetails from "../Component/Servicedetails";
import Checkout from "../Component/Checkout";
import Allorders from "../Component/Allorders";
import Privetrout from "./Privetrout";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                // loader:()=>fetch(`https://car-doctor-server-tau-amber.vercel.app/services`),
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<About></About>,
            },
            {
                path:'/services',
                element:<Services></Services>,
            },
            {
                path:'/blog',
                element:<Blog></Blog>,
            },
            // {
            //     path:'/contact',
            //     element:<Contact></Contact>,
            // },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/signup',
                element:<Signup></Signup>,
            },
            {
                path:'/checkout/:id',
                loader:({params})=>fetch(`https://car-doctor-server-tau-amber.vercel.app/services/${params.id}`),
                element:<Privetrout><Checkout></Checkout></Privetrout>,
            },
            {
                path:'/servicedetails/:id',
                loader:()=>fetch('https://car-doctor-server-tau-amber.vercel.app/services'),
                element:<Servicedetails></Servicedetails>,
            },
            {
                path:'/orders',
                element:<Privetrout><Allorders></Allorders></Privetrout>,
            },
        ]
    }
])
export default router;