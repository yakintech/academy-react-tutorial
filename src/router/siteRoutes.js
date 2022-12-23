import Child from "../children/Child";
import Parent from "../children/Parent";
import Favorites from "../contextSample/Favorites";
import Products from "../contextSample/Products";
import Sayac from "../contextSample/Sayac";
import Sayac2 from "../contextSample/Sayac2";
import About from "../routingSample/About";
import Contact from "../routingSample/Contact";
import Home from "../routingSample/Home";
import NoMatch from "../routingSample/NoMatch";
import UserDetail from "../routingSample/UserDetail";
import Users from "../routingSample/Users";

export const siteRoutes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },{
        path:'/about',
        element:<About/>
    },{
        path:'/users',
        element:<Users/>
    },
    {
        path:'/users/:id',
        element:<UserDetail/>
    },
    {
        path:'/sayac',
        element:<Sayac/>
    },
    {
        path:'/sayac2',
        element:<Sayac2/>
    },
    {
        path:'/parent',
        element:<Parent><Child></Child></Parent>
    },
    {
        path:'/products',
        element:<Products></Products>
    },
    {
        path:'/favorites',
        element:<Favorites/>
    },
    {
        path:'*',
        element:<NoMatch/>
    },
]