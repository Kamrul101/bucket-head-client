import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import AllClass from "../Components/Pages/AllClass/AllClass";
import DashboardLayout from "../Layouts/DashBoardLayout";

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
      path:'dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        // path:'myCart',
        
      ]
    }
  ]);

  export default router;
  