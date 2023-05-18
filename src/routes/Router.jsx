import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Courses from "../pages/Courses/Courses";
import SelectedCourse from "../pages/Courses/SelectedCourse/SelectedCourse";
import Profile from "../pages/Profile/Profile";
import PremiumAccess from "../pages/PremiumAccess/PremiumAccess";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "../pages/Blog/Blog";
import Faq from "../pages/Faq/Faq";
 
 export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/courses',
                element: <Courses/>,
                loader: () => fetch('https://pro-tech-edu-online-server.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <SelectedCourse/>,
                loader: ({params}) => fetch(`https://pro-tech-edu-online-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '/premium',
                element: <PrivateRoute><PremiumAccess/></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/faq',
                element: <Faq/>
            }
        ]
    }
])