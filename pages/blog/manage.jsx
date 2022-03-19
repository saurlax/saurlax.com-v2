import axios from 'axios'
import mongoose from 'mongoose'
import Head from 'next/head'
import { useState } from 'react'
import Layout from '../../components/Layout'
import BlogModel from '../../models/BlogModel'

export default function New() {
  const [id, setId] = useState('');
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <>
      <Head>
        <title>Manage Blog - Saurlax</title>
      </Head>
      <Layout>
        <h1>Manage Blog</h1>
        <input placeholder='Title' value={title} onChange={e => { setTitle(e.target.value) }} />
        <textarea placeholder='Content' value={content} onChange={e => { setContent(e.target.value) }} />
        <input placeholder='Blog ID' value={id} onChange={e => { setId(e.target.value) }} />
        <input type='password' placeholder='Verify Code' value={code} onChange={e => { setCode(e.target.value) }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <button onClick={async () => {
            const res = await axios.post('/api/findBlog', { id, code });
            if (res.data.message) { alert(JSON.stringify(res.data)) }
            else { setTitle(res.data.title); setContent(res.data.content) }
          }}>Find</button>
          <button onClick={async () => {
            if (confirm('Are you sure to UPDATE?')) { alert(JSON.stringify((await axios.post('/api/updateBlog', { id, blog: { title, content }, code })).data)) }
          }}>Update</button>
          <button onClick={async () => {
            if (confirm('Are you sure to CREATE?')) { alert(JSON.stringify((await axios.post('/api/createBlog', { blog: { title, content, views: 0, datetime: new Date() }, code })).data)) }
          }}>Create</button>
          <button onClick={async () => {
            if (confirm('Are you sure to DELETE?')) { alert(JSON.stringify((await axios.post('/api/deleteBlog', { id, code })).data)) }
          }}>Delete</button>
        </div>
      </Layout>
    </>
  )
}