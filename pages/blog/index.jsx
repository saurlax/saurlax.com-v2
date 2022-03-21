import style from '../../styles/blog.module.css'
import mongoose from 'mongoose'
import Head from 'next/head'
import Layout from '../../components/Layout'
import BlogModel from '../../models/BlogModel'
import Link from 'next/link'
import { EyeFilled } from '@ant-design/icons'

export default function Blog(props) {
  return (
    <>
      <Head>
        <title>Blog - Saurlax</title>
      </Head>
      <Layout>
        <h1>Blog</h1>
        {props.blogList?.map(blog => {
          return (
            <div key={blog._id}>
              <Link href={`/blog/${blog._id}`}><a><h2 style={{ marginBottom: '0' }}>{blog.title}</h2></a></Link>
              <div className={style.info}>
                {new Date(blog.datetime).friendly()}
                <span className={style.views}><EyeFilled />{blog.views.friendly()}</span>
              </div>
              <p className={style.overview}>{blog.content}</p>
            </div>
          )
        })}
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  mongoose.connect(process.env.MONGODB_URI);
  return {
    props: {
      blogList: (await BlogModel.find().sort({ datetime: -1 })).map(blog => {
        const { _id, datetime, title, content, views } = blog;
        return { _id: _id.toString(), datetime: datetime.getTime(), title, content, views }
      })
    }
  }
}
