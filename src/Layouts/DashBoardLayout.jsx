import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBeer,
  FaShoppingCart,
  FaWallet,
  FaCalendar,
  FaHome,
  FaHamburger,
  FaList,
} from "react-icons/fa";
import {
  Fade,
  Bounce,
  JackInTheBox,
  Flip,
  Slide,
  Zoom,
} from "react-awesome-reveal";
const DashboardLayout = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
