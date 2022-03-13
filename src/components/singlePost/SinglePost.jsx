import "./singlePost.css";
import { useLocation } from "react-router";

export default function SinglePost({data}) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          {data[path].title}
        </h1>
        <p className="singlePostDesc">
          {data[path].content}
        </p>
      </div>
    </div>
  );
}
