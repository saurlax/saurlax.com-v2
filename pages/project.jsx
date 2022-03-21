import mongoose from 'mongoose'
import Head from 'next/head'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import BlogModel from '../models/BlogModel'

export default function Project(props) {
  return (
    <>
      <Head>
        <title>Project - Saurlax</title>
      </Head>
      <Layout>
        <Markdown>{props.content}</Markdown>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  mongoose.connect(process.env.MONGODB_URI);
  const { _id, content, views } = await BlogModel.findOne({ _id: '000000000000000000000001' });
  await BlogModel.updateOne({ _id: _id.toString() }, { views: views + 1 });
  return { props: { content } };
}