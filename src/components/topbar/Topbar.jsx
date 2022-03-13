import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
          <Link to="/homepage" className="link topIcon">
            Home
          </Link>
          <Link to="/references" className="link topIcon">
            References
          </Link>      
      </div>
      <div className="topRight">
        Public Health 101 Spring 2022 Group 3 Final Project
      </div>
    </div>
  );
}
