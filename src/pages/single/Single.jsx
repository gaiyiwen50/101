import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function Single({data}) {
  return (
    <div className="single">
      <SinglePost data={data}/>
    </div>
  );
}
