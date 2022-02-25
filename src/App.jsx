import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='blog/:id' element={<Blog />} />
          <Route path='blog' element={<Blog />} />
          <Route path='*' element={<><h1>404 Not Found</h1><p>The page you requested does not exist on the server or has been permanently moved to another location.</p></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
