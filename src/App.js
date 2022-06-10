import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './About';
import './App.css';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Manufactur from './Manufactur';
import MySkill from './MySkill';
import Project from './Project';
import Service from './Service';
function App() {
  return (
    <div className='App'>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/manufactur' element={<Manufactur />}></Route>
      </Routes>
      {/* <About />
      <Service />
      <Project />
      <Blog />
      <MySkill />
      <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
