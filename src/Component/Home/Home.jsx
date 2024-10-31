import React from "react";
import { Outlet } from "react-router-dom";
import Hader from "../hedar/Hader";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <h3>this is the home component</h3>
      <Hader></Hader>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
