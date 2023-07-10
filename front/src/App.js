import './App.css';
import Home from '../src/pages/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './component/Header'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/contactus' element={<Contactus />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
