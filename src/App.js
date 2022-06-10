import { Route, Routes } from 'react-router-dom';
import AllProjects from './AllProjects';
import './App.css';
import Book from './Book';
import Chair from './Chair';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Manufactur from './Manufactur';

function App() {
  return (
    <div className='App'>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/manufactur' element={<Manufactur />}></Route>
        <Route path='/book' element={<Book />}></Route>
        <Route path='/chair' element={<Chair />}></Route>
        <Route path='/allProjects' element={<AllProjects />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
