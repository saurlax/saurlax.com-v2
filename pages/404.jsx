import Layout from '../components/Layout'
import Head from 'next/head'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Saurlax</title>
      </Head>
      <Layout>
        <h1>404</h1>
        <p>您访问的页面不存在，或是已经永久地迁移到了其他位置╮(╯﹏╰)╭。</p>
      </Layout>
    </>
  )
}