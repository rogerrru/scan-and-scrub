import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

import Home from './pages/Home';
import Procedures from './pages/Procedures';
import Tools from './pages/Tools';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home
          />} />
        <Route path="/procedures"element={
            <Procedures/>}
        />
        <Route path="/tools"element={
            <Tools/>}
        />
        <Route path="/about"element={
            <About/>}
        />
      </Routes>
    </Router>
  );
}

export default App
