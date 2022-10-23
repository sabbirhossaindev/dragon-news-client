import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Login from "../../Pages/Shared/Login/Login/Login";
import Register from "../../Pages/Shared/Login/Register/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-ochre-kappa.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-ochre-kappa.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRouter><News></News></PrivateRouter>,
                loader: ({ params }) => fetch(`https://dragon-news-server-ochre-kappa.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            }
        ]
    }
]);