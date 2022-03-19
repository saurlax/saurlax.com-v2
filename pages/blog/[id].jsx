import style from '../../styles/blog.module.css'
import { EyeFilled } from '@ant-design/icons'
import mongoose from 'mongoose'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Markdown from '../../components/Markdown'
import BlogModel from '../../models/BlogModel'

export default function BlogDetail(props) {
  return (
    <>
      <Head>
        <title>{`${props.blog.title} - Saurlax`}</title>
      </Head>
      <Layout>
        <h1>{props.blog.title}</h1>
        <div className={style.info}>
          {new Date(props.blog.datetime).friendly()}
          <span className={style.views}><EyeFilled />{props.blog.views}</span>
        </div>
        <Markdown>{props.blog.content}</Markdown>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  mongoose.connect(process.env.MONGODB_URI);
  const { _id, datetime, title, content, views } = await BlogModel.findOne({ _id: context.query.id });
  await BlogModel.updateOne({ _id: _id.toString() }, { views: views + 1 });
  return { props: { blog: { _id: _id.toString(), datetime: datetime.getTime(), title, content, views } } };
}