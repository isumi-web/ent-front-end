import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import MusicPage from './pages/songs';
import AlbumsPage from './pages/albums';
import AdminHome from './pages/adminPages/adminHome';


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


        </Routes>
      </Router>
    </>

    
  );
}

export default App;
