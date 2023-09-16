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
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      {/* <Route path='/stocks' element={<Dashboard></Dashboard>}></Route>
      <Route path='/stocks/:symbol' element={<Stock></Stock>}></Route> */}
      </Routes>
    {/* <About/> */}
    {/* <Dashboard/> */}
    {/* <Home/> */}
    {/* <Stock/> */}
    </div>
  );
}

export default App;
