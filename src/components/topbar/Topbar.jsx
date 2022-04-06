import { Link } from 'react-router-dom';
import './topbar.css';
import '../../shared.css';

export default function Topbar() {
  return (
    <div className="top-bar">
      <div className="top-left">
          <Link to="/homepage" className="link top-icon">
            Home
          </Link>
          <Link to="/references" className="link top-icon">
            References
          </Link>      
      </div>
    </div>
  );
}
