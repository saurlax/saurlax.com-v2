import './layout.css';
import { Link, NavLink, Outlet } from "react-router-dom";
import { BilibiliFilled, GiteeFilled, LeafFilled } from "./Icons";
import { BulbFilled, GithubOutlined } from '@ant-design/icons';

function Layout() {
  return (
    <div className='layout'>
      <div className='header'>
        <Link to='/' className='logo' ><LeafFilled /></Link>
        <span className='header-nav'>
          <NavLink className='header-nav-item' to='/blog'>Blog</NavLink>
          <NavLink className='header-nav-item' to='/project'>Project</NavLink>
          <a className='header-nav-item icon' href='https://github.com/saurlax'><GithubOutlined /></a>
          <a className='header-nav-item icon' href='https://gitee.com/saurlax'><GiteeFilled /></a>
          <a className='header-nav-item icon' href='https://bilibili.com/'><BilibiliFilled /></a>
        </span>
      </div>
      <div className='wrapper'>
        <div className='content'><Outlet /></div>
        <p className='footer'>
          <div>Powered by <a href='https://webify.cloudbase.net/' target='_blank'>CloudBase Webify</a></div>
          <div>CC BY-NC-ND 4.0 2022 © Saurlax</div>
        </p>
      </div>
    </div>
  );
}

export default Layout;