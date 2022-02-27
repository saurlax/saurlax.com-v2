import './blog.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Markdown from '../components/Markdown';
import { LoadingOutlined } from '@ant-design/icons';

function BlogDetail() {
  const id = useParams().id;
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    if (id && id.length == 32) {
      db.collection('blog').doc(id).get().then((res) => {
        if (res.code) {
          setBlog({
            title: res.code,
            content: res.message,
            time: new Date(),
            _id: 'error'
          });
        } else {
          setBlog(res.data[0]);
        }
      });
    } else {
      setBlog({
        title: 'Parameter Error',
        content: 'The parameter you passed in cannot be understood.',
        time: new Date(),
        _id: 'error'
      });
    }
  }, []);

  return (
    <div>
      {blog ? <div className='blog-detail'>
        <h1>{blog.title}</h1>
        <div className='blog-time'>{blog.time.friendly()}</div>
        <Markdown>{blog.content}</Markdown>
        <p><Link to='/blog'>/back</Link></p>
      </div> : <div className='blog'><LoadingOutlined /> Loading...</div>}
    </div>
  );
}

export default BlogDetail;