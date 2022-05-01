import { Link } from 'react-router-dom';
import './post.css';
import '../../shared.css';

export default function Post({post}) {
  return (
    <div className='post'>
      <img
        className='postImg'
        src={post.image}
        alt=''
      />
      <div className='postInfo'>
        <span className='postTitle'>
          <Link to={post.link} className='link'>
            {post.title}
          </Link>
        </span>
        <hr />
      </div>
      {(post.content) ? (
        <p className='postDesc'>
          {post.content}
        </p>
      ) : <></>}
    </div>
  );
}
