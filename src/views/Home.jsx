import { Outlet } from "react-router-dom";
import Products from "../views/Products";

const Home = () => {
  return (
    <>
      <Outlet />
      <Products />
    </>
  );
};

export default Home;
