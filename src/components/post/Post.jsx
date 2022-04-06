import { Link } from 'react-router-dom';
import './post.css';
import '../../shared.css';

export default function Post({img, post, index}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to={"/post/" + index} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
      </div>
      <p className="postDesc">
        {post.content}
      </p>
    </div>
  );
}
