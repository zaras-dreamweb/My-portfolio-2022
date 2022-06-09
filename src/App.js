import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProjectDetails from './Pages/ProjectDetails';
import Home from './Pages/Shared/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
