import './layout.css';
import { Link, NavLink, Outlet } from "react-router-dom";
import { BilibiliFilled, GiteeFilled, LeafFilled, SaurlaxFilled } from "./Icons";
import { GithubOutlined, SlackCircleFilled } from '@ant-design/icons';

function Layout() {
  return (
    <div className='layout'>
      <div className='background'>
        {new Array(parseInt(Math.random() * 10 + 6)).fill(null).map(() => {
          return <LeafFilled style={{ fontSize: `${Math.random() + 0.6}rem`, top: `-${Math.random() * 50}%`, left: `calc(${Math.random() * 100}% - 100px)`, animationDuration: `${Math.random() * 10 + 6}s` }} />;
        })}
      </div>
      <div className='header'>
        <Link to='/' className='logo' ><SaurlaxFilled /></Link>
        <span className='header-nav'>
          <NavLink className='header-nav-item' to='/blog'>Blog</NavLink>
          <NavLink className='header-nav-item' to='/project'>Project</NavLink>
          <a className='header-nav-item icon mobile-hide' href='https://github.com/saurlax'><GithubOutlined /></a>
          <a className='header-nav-item icon mobile-hide' href='https://gitee.com/saurlax'><GiteeFilled /></a>
          <a className='header-nav-item icon mobile-hide' href='https://bilibili.com/'><BilibiliFilled /></a>
          <span className='header-nav-item icon' onClick={() => { localStorage.setItem('theme', localStorage.getItem('theme') == 'dark' ? 'light' : 'dark'); document.body.className = localStorage.getItem('theme') }}>
            <SlackCircleFilled />
          </span>
        </span>
      </div>
      <div className='wrapper'>
        <div className='content'><Outlet /></div>
        <div className='footer'>
          <div>CC BY-NC-ND 4.0</div>
          <div>𝓘𝓸 𝓼𝓽𝓸 𝓪𝓷𝓬𝓸𝓻𝓪 𝓪𝓼𝓹𝓮𝓽𝓽𝓪𝓷𝓭𝓸 𝓭𝓲 𝓵𝓮𝓲 © 2022 Saurlax</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;