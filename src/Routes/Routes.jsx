import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import AllClass from "../Components/Pages/AllClass/AllClass";
import DashboardLayout from "../Layouts/DashBoardLayout";
import MyCart from "../Components/Pages/Dashboard/Cart/MyCart";
import AllUsers from "../Components/Pages/Dashboard/AllUsers/AllUsers";
import AllInstructor from "../Components/Pages/AllInstructor/AllInstructor";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Components/Pages/Dashboard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import ManageClass from "../Components/Pages/Dashboard/ManageClass/ManageClass";
import AdminRoute from "./AdminRoute";
import AdminManageClass from "../Components/Pages/Dashboard/AdminManageClass/AdminManageClass";
import Payment from "../Components/Pages/Dashboard/Payment/Payment";

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
        {
          path: '/allInstructor',
          element:<AllInstructor></AllInstructor>
        },
      
      ]
      
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
          path:'/dashboard/myCart',
          element:<MyCart></MyCart>
        },
        {
          path:'/dashboard/payment',
          element:<Payment></Payment>
        },
        {
          path:'manageAllClass',
          element:<AdminManageClass></AdminManageClass>
        },
        {
          path:'/dashboard/allUser',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: '/dashboard/addClass',
          element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path:'manageClass',
          element:<InstructorRoute><ManageClass></ManageClass></InstructorRoute>
        }
        
      ]
    }
  ]);

  export default router;
  