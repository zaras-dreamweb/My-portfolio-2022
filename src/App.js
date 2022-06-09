import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';
import ProjectDetails from './Pages/ProjectDetails';
import Home from './Pages/Shared/Home';
import Navbar from './Pages/Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AboutMe from './Pages/AboutMe';
import Blogs from './Pages/Blogs';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
