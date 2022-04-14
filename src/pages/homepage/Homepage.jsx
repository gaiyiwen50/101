import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Calculator from "../../components/calculator/Calculator";
import "./homepage.css";

export default function Homepage({data}) {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Calculator />
        <Posts data={data}/>
        
      </div>
    </>
  );
}
