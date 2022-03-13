import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
          <Link to="/references" className="link">
            References
          </Link>
      </div>
      <div className="topCenter">
        Public Health 101 Spring 2022 Group 3 Final Project
      </div>
    </div>
  );
}
