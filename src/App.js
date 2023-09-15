import logo from './logo.svg';
import './App.css';

import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Stock from './pages/Stock';

function App() {
  return (
    <div className="App">
    <Nav/>
    <h1>Stock Savvy</h1>
    <About/>
    <Dashboard/>
    <Home/>
    <Stock/>
    </div>
  );
}

export default App;
