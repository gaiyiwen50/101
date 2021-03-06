import './header.css';
import '../../shared.css';

export default function Header() {
  return (
    <div className="header">
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="headerTitles">
        <span className="headerTitleSm">Your Solution For Caring For The Climate</span>
        <span className="headerTitleLg">Carbon Footprint</span>
      </div>
      
    </div>
  );
}
