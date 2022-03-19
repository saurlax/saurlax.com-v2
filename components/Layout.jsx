import style from '../styles/layout.module.css'
import { BilibiliFilled, GiteeFilled, LeafFilled, SaurlaxFilled } from "./Icons"
import { GithubOutlined, SlackCircleFilled } from '@ant-design/icons'
import Link from 'next/link'

export default function Layout(props) {
  return (
    <div className={style.layout}>
      <div className={style.background}>
        {new Array(parseInt(Math.random() * 10 + 6)).fill(null).map(() => {
          return <LeafFilled key={Math.random()} style={{
            fontSize: `${Math.random() + 0.6}rem`,
            top: `-${Math.random() * 50}%`,
            left: `calc(${Math.random() * 100}% - 100px)`,
            animationDuration: `${Math.random() * 10 + 6}s`
          }} />;
        })}
      </div>
      <div className={style.header}>
        <Link href='/'><a className={style.logo}><SaurlaxFilled /></a></Link>
        <span className={style.headerNav}>
          <Link className={style.headerNavItem} href='/blog'>Blog</Link>
          <Link className={style.headerNavItem} href='/project'>Project</Link>
          <a className={`${style.headerNavItem} ${style.icon} mobile-hide`} href='https://github.com/saurlax' target='_blank' rel='noreferrer'><GithubOutlined /></a>
          <a className={`${style.headerNavItem} ${style.icon} mobile-hide`} href='https://gitee.com/saurlax' target='_blank' rel='noreferrer'><GiteeFilled /></a>
          <a className={`${style.headerNavItem} ${style.icon} mobile-hide`} href='https://bilibili.com/' target='_blank' rel='noreferrer'><BilibiliFilled /></a>
          <span className={`${style.headerNavItem} ${style.icon}`} onClick={() => { localStorage.setItem('theme', localStorage.getItem('theme') == 'dark' ? 'light' : 'dark'); document.body.className = localStorage.getItem('theme') }}>
            <SlackCircleFilled />
          </span>
        </span>
      </div>
      <div className={style.wrapper}>
        <div className={style.content}>{props.children}</div>
        <div className={style.footer}>
          <div>𝓘𝓸 𝓼𝓽𝓸 𝓪𝓷𝓬𝓸𝓻𝓪 𝓪𝓼𝓹𝓮𝓽𝓽𝓪𝓷𝓭𝓸 𝓭𝓲 𝓵𝓮𝓲</div>
          <div>版权所有 © 2022 Saurlax</div>
        </div>
      </div>
    </div>
  );
}