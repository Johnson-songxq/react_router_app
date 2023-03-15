import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/* this will refresh the page */}
        {/* Go back to <a href="/products">list of produts</a> */}
        {/* This will not refresh the page */}
        Go back to <Link to="/products">list of produts</Link>
      </p>
      <button onClick={() => navigate("/about")}>Go About</button>
    </>
  );
};

export default Home;
