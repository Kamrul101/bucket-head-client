import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import AllClass from "../Components/Pages/AllClass/AllClass";
import DashboardLayout from "../Layouts/DashBoardLayout";
import MyCart from "../Components/Pages/Dashboard/Cart/MyCart";
import AllUsers from "../Components/Pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:"register",
          element:<Register></Register>
        },
        {
          path: '/allClass',
          element:<AllClass></AllClass>
        },
      
      ]
      
    },
    {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          path:'/dashboard/myCart',
          element:<MyCart></MyCart>
        },
        {
          path:'/dashboard/allUser',
          element:<AllUsers></AllUsers>
        }
        
      ]
    }
  ]);

  export default router;
  