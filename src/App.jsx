import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import MusicPage from './pages/songs';
import AlbumsPage from './pages/albums';
import AdminHome from './pages/adminPages/adminHome';
import AdminUsers from './pages/adminPages/adminUsers';
import AdminAlbums from './pages/adminPages/adminAlbums';
import AdminSongs from './pages/adminPages/adminSongs';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/songs' element={<MusicPage />} />
          <Route path='/albums' element={<AlbumsPage />} />
          <Route path='/dashboard' element={<AdminHome />} />
          <Route path='/admin/users' element={<AdminUsers />} />
          <Route path='/admin/albums' element={<AdminAlbums />} />
          <Route path='/admin/songs' element={<AdminSongs />} />

        </Routes>
      </Router>
    </>

    
  );
}

export default App;
