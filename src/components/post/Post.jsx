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
        {(post.content) ? (
          <span className='postTitle'>
          <a href={post.link} className='link'>
            {post.title}
          </a>
        </span>
        ) : <span className='postTitle'>
        <Link to={post.link} className='link'>
          {post.title}
        </Link>
      </span>}
        <hr />
      </div>
      {(post.content) ? (
        <div className='postDesc'>
          {post.content.map((item) => <li>{item}</li>)}
        </div>
      ) : <></>}
    </div>
  );
}
