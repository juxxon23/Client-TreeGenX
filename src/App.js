import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Signin from './components/Signin';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <br/>
        <Routes>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Login />}/>
        </Routes>
      </div>
    </Router>
  );
};
