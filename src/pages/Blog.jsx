import './blog.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import div from '../components/Markdown';

function Blog() {
  const page = parseInt(useParams().page);
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    if (page && !isNaN(page)) {

    } else if (!page) {
      db.collection('blog').get().then((res) => {
        if (res.code) {
          setBlogList([{
            title: res.code,
            content: res.message,
            time: new Date(),
            _id: 'error'
          }]);
        } else {
          setBlogList(res.data);
        }
      });
    } else {
      setBlogList([{
        title: 'Parameter Error',
        content: 'The parameter you passed in cannot be understood.',
        time: new Date(),
        _id: 'error'
      }]);
    }
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <div className='blog'>
        {
          blogList.length != 0 ?
            blogList.map((blog) => {
              return (<div className='blog-item' key={blog._id}>
                <Link to={'/blog/detail/' + blog._id}><h2>{blog.title}</h2></Link>
                <span>{blog.time.friendly()}</span>
                <div className='preview'>{blog.content}</div>
              </div>);
            }) : <div className='blog'><LoadingOutlined /> Loading...</div>
        }
      </div>
    </div>
  );
}

export default Blog;