import { createBrowserRouter } from "react-router-dom";
import Blog from "../Page/Share/Blog";
import Course from "../Page/Share/Course";
import Login from "../Page/Share/Login";
import Register from "../Page/Share/Register";
import Main from "./Main";



export const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Course></Course>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            }
        ]
    }

])