import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import AllClass from "../Components/Pages/AllClass/AllClass";

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
        }
      ]
    },
  ]);

  export default router;
  