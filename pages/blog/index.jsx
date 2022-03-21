import style from '../../styles/blog.module.css'
import mongoose from 'mongoose'
import Head from 'next/head'
import Layout from '../../components/Layout'
import BlogModel from '../../models/BlogModel'
import Link from 'next/link'
import { useState } from 'react'

export default function Blog(props) {
  const [word, setWord] = useState('');

  return (
    <>
      <Head>
        <title>Blog - Saurlax</title>
      </Head>
      <Layout>
        <div className={style.titlebox}>
          <h1>Blog</h1>
          <input placeholder='搜索' className={style.search} value={word} onChange={e => { setWord(e.target.value) }} />
        </div>
        {props.blogList?.map(blog => {
          if (blog.title.indexOf(word) == -1 && blog.content.indexOf(word) == -1) return
          if (Number.parseInt(blog._id) < 1000) return
          return (
            <div key={blog._id}>
              <Link href={`/blog/${blog._id}`}><a><h2 style={{ marginBottom: '0' }}>{blog.title}</h2></a></Link>
              <div className={style.info}>
                {new Date(blog.datetime).friendly()}
                <span>{blog.views.friendly()}次浏览</span>
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
