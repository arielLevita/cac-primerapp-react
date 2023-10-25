import React from 'react'
import Home from './components/Home';
import User from './components/User';
import ImgMemes from './components/ImgMemes';
import Counter from './components/Counter';
import { Appi } from './components/Appi';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/imgmemes' element={<ImgMemes />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/appi' element={<Appi />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
