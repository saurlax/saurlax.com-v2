import Layout from '../components/Layout'
import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>Saurlax</title>
      </Head>
      <Layout>
        <div>
          <h1>Saurlax</h1>
          <p>嗨，欢迎来到我的个人站点(￣▽￣)~*！我是一名来自深圳的高中生，目前正在学习全栈的相关知识。</p>
          <p>你可以在
            <a href='https://github.com/saurlax' target='_blank' rel="noreferrer">GitHub</a>，
            <a href='https://gitee.com/saurlax' target='_blank' rel="noreferrer">码云</a>或者
            <a href='https://space.bilibili.com/251608296' target='_blank' rel="noreferrer">哔哩哔哩</a>上找到我，或者加入我的
            <a href='https://jq.qq.com/?_wv=1027&k=1vDJz049' target='_blank' rel="noreferrer">QQ群</a>。
          </p>
          <h2>友情链接</h2>
          <div className='home-links'>
            <a>空空如也</a>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;