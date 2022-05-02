import Post from '../post/Post';
import './posts.css';
import '../../shared.css';

export default function Posts({data}) {
  const posts = data.map((post, index) => {
    return (
      <Post
        key={index}
        post={post}
      />
    )
  })
  return (
    <div className='posts'>
      {posts}
    </div>
  )
}
