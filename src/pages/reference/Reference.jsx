import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./reference.css";

export default function Reference() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <div className="posts reference">
            <div className="">
            <a href="https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle#:~:text=typical%20passenger%20vehicle%3F-,A%20typical%20passenger%20vehicle%20emits%20about%204.6%20metric%20tons%20of,8%2C887%20grams%20of%20CO2">
                Greenhouse Gas Emissions from a Typical Passenger Vehicle
            </a>
            <br/>
            <br/>
            <a href="https://onetreeplanted.org/blogs/stories/how-much-co2-does-tree-absorb">
                How Much CO2 Does A Tree Absorb?
            </a>
            </div>
        </div>
        
      </div>
    </>
  );
}
