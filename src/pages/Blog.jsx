import './blog.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from '../components/Markdown';
import { LoadingOutlined } from '@ant-design/icons';

function Blog() {
  const id = useParams().id;
  const [blogList, setBlogList] = useState([]);
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    if (id && id.length == 32) {
      db.collection('blog').doc(id).get().then((res) => {
        console.log(res);
        if (res.code) {
          setBlog({
            title: res.code + ': ' + res.message,
            time: new Date(),
            _id: 'error'
          });
        } else {
          setBlog(res.data[0]);
        }
      });
    } else if (!id) {
      db.collection('blog').get().then((res) => {
        console.log(res);
        if (res.code) {
          setBlogList([{
            title: res.code + ': ' + res.message,
            time: new Date(),
            _id: 'error'
          }]);
        } else {
          setBlogList(res.data);
        }
      });
    }
  }, []);

  return (
    id && id.length == 32 ?
      <div>
        {blog ? <div className='blog-detail'>
          <h1>{blog.title}</h1>
          <div className='blog-time'>{blog.time.friendly()}</div>
          <Markdown>{blog.content}</Markdown>
        </div> : <div className='blog preload'><LoadingOutlined /> Loading...</div>}
      </div> : (!id ?
        <div>
          <h1>Blog</h1>
          <div className='blog'>
            {
              blogList.length != 0 ?
                blogList.map((blog) => {
                  return (
                    <div className='blog-item' key={blog._id}>
                      <Link to={'/blog/' + blog._id}><h2>{blog.title}</h2></Link>
                      <span>{blog.time.friendly()}</span>
                    </div>
                  )
                }) : <div className='blog preload'><LoadingOutlined /> Loading...</div>
            }
          </div>
        </div> : <div>
          <h1>Parameter Error</h1>
          <p>The parameter you passed in cannot be understood.</p>
        </div>
      ));

}

export default Blog;