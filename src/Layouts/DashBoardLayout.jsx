import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  
  FaShoppingCart,
  FaWallet,
  
  FaHome,
  
  FaList,
  FaUserFriends,
  FaBookOpen,
  FaFileUpload,
  FaBook,
} from "react-icons/fa";
import {
  
  Bounce,
  JackInTheBox,
  Flip,
  Slide,
  Zoom,
} from "react-awesome-reveal";
import UseAdmin from "../Hooks/UseAdmin";
import UseInstructorRole from "../Hooks/UseInstructorRole";
const DashboardLayout = () => {


  const [isAdmin]= UseAdmin();
  const [isInstructor]=UseInstructorRole();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#575757] text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-2xl">
          {/* Sidebar content here */}
          {
            isAdmin ? <>
            
            <li>
            <NavLink to="/dashboard/allUser">
              <Bounce>
                <FaUserFriends></FaUserFriends>
              </Bounce>
               Manage Users
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/manageAllClass">
              <JackInTheBox>
                <FaBookOpen></FaBookOpen>
              </JackInTheBox>
              Manage Class
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/home">
              <Flip>
                <FaHome></FaHome>
              </Flip>
              User Home
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <Slide>
                <FaHome></FaHome>
              </Slide>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allClass">
              <Zoom>
                <FaList></FaList>
              </Zoom>
              All Class
            </NavLink>
          </li>
            </>: 
            
            isInstructor ? <>
            <li>
            <NavLink to="/dashboard/addClass">
              <Bounce>
                <FaFileUpload></FaFileUpload>
              </Bounce>
              Add Class
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/manageClass">
              <JackInTheBox>
                <FaBook></FaBook>
              </JackInTheBox>
              My Classes
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/home">
              <Flip>
                <FaHome></FaHome>
              </Flip>
              User Home
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <Slide>
                <FaHome></FaHome>
              </Slide>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <Zoom>
                <FaList></FaList>
              </Zoom>
              My Enrolled Class
            </NavLink>
          </li>
            
            </>:
            
            <>
            <li>
            <NavLink to="/dashboard/history">
              <Bounce>
                <FaWallet></FaWallet>
              </Bounce>
              Payment History
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/myCart">
              <JackInTheBox>
                <FaShoppingCart></FaShoppingCart>
              </JackInTheBox>
              My Selected Class
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/home">
              <Flip>
                <FaHome></FaHome>
              </Flip>
              User Home
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <Slide>
                <FaHome></FaHome>
              </Slide>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <Zoom>
                <FaList></FaList>
              </Zoom>
              My Enrolled Class
            </NavLink>
          </li>
            </>
          }
          
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
