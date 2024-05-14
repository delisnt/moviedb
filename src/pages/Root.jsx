import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <HomeNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
