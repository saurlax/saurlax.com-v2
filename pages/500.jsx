import Layout from '../components/Layout'
import Head from 'next/head'

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Saurlax</title>
      </Head>
      <Layout>
        <h1>500</h1>
        <p>服务器上发生了错误，请检查您输入的网址是否正确，然后稍后再试(〃´-ω･) 。</p>
      </Layout>
    </>
  )
}