import React from "react";

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="w-1/2"
        src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
        alt=""
      />
      <div className="">
        <Link to="/"><button className="btn btn-error text-white">Go Home</button></Link>
      </div>
    </div>
  );
};

export default Error;
