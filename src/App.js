import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Preview from './Pages/Preview';
import Hurts from './Pages/Hurts';

import './styles.css'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hurts-2b-human" element={<Hurts />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;