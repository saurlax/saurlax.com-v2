import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.className = localStorage.getItem('theme');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='blog/detail/:id' element={<BlogDetail />} />
          <Route path='blog/:page' element={<Blog />} />
          <Route path='blog' element={<Blog />} />
          <Route path='*' element={<><h1>404 Not Found</h1><p>The page you requested does not exist on the server or has been permanently moved to another location.</p></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
