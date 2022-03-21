import Layout from '../../components/Layout'
import Head from 'next/head'
import mongoose from 'mongoose'
import BlogModel from '../../models/BlogModel'
import Markdown from '../../components/Markdown'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>NFC - Saurlax</title>
      </Head>
      <Layout>
        <Markdown>{props.content}</Markdown>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  mongoose.connect(process.env.MONGODB_URI);
  const { _id, content, views } = await BlogModel.findOne({ _id: '000000000000000000000002' });
  await BlogModel.updateOne({ _id: _id.toString() }, { views: views + 1 });
  return { props: { content } };
}