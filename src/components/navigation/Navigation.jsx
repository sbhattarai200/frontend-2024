import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <div className="navigation-wrapper">
      <div className="logo-wrapper">
        <img
          src="https://lh3.googleusercontent.com/-ghaODdGez60/AAAAAAAAAAI/AAAAAAAAvf4/eAb7_IVSty8/photo.jpg"
          alt=""
        />
        <span className="navigation-title">Sudhir</span>
      </div>
      <div className="nav-links-wrapper">
        <Link className={"active:text-red-500 hover:text-gray-600"} to={"/"}>
          Home
        </Link>
        <Link
          className={"active:text-red-500 hover:text-gray-600"}
          to={"/about"}
        >
          About
        </Link>
        <Link
          className={"active:text-red-500 hover:text-gray-600"}
          to={"/contact"}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
