import { createBrowserRouter } from "react-router-dom";
import Blog from "../Page/Share/Blog";
import Course from "../Page/Share/Course";
import Home from "../Page/Share/Home";
import Login from "../Page/Share/Login";
import News from "../Page/Share/News";
import PremiumCourse from "../Page/Share/PremiumCourse";
import Register from "../Page/Share/Register";
import Main from "./Main";
import PrivateRouter from "./PrivateRouter";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://academic-earth-server-pronoybanik.vercel.app/learning')
            },
            {
                path: '/category/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://academic-earth-server-pronoybanik.vercel.app/category/${params.id}`)

            },
            {
                path: '/premiumcourse',
                element: <PrivateRouter><PremiumCourse></PremiumCourse></PrivateRouter>,
                loader: () => fetch('https://academic-earth-server-pronoybanik.vercel.app/learning')
            },
            {
                path: '/learning/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`https://academic-earth-server-pronoybanik.vercel.app/learning/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }

])