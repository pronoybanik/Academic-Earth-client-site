import { createBrowserRouter } from "react-router-dom";
import Blog from "../Page/Share/Blog";
import Course from "../Page/Share/Course";
import Home from "../Page/Share/Home";
import Login from "../Page/Share/Login";
import News from "../Page/Share/News";
import PremiumCourse from "../Page/Share/PremiumCourse";
import Register from "../Page/Share/Register";
import Main from "./Main";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/learning')
            },
            {
                path: '/category/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: '/premiumcourse',
                element: <PremiumCourse></PremiumCourse>,
                loader: () => fetch('http://localhost:5000/learning')
            },
            {
                path: '/learning/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/learning/${params.id}`)
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