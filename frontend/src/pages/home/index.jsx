import { Outlet } from "react-router-dom";
import { Nav } from "../../components/Nav.jsx";
import "./style.css";
function Home() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;
