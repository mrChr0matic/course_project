import { useState } from 'react';
import './App.css';
import Community from './components/community';
import Create from './components/create';
import Header from './components/header';
import MainBody from './components/main-body';
import Sidebar from './components/sidebar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/login';

function App() {  

  const [login,setLogin]=useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header login={login} setLogin={setLogin}/>
              <div className='content'>
                <div className='content-1'>
                  <Sidebar/>
                </div>
                <div className='content-2'>
                  <MainBody/>
                </div>
              </div>
              {
                login &&
                <Login login={login} setLogin={setLogin}/>
              }
            </>
          }>
          </Route>

          <Route path='/community' element={
            <>
              <Header login={login} setLogin={setLogin}/>
              <div className='content'>
                <div className='content-1'>
                  <Sidebar/>
                </div>
                <div className='content-2'>
                  <Community/>
                </div>
              </div>
              {
                login &&
                <Login login={login} setLogin={setLogin}/>
              }
            </>
          }>
          </Route>

          <Route path='/create' element={
            <>
              <Header login={login} setLogin={setLogin}/>
              <div className='content'>
                <div className='content-1'>
                  <Sidebar/>
                </div>
                <div className='content-2'>
                  <Create/>
                </div>
              </div>
              {
                login &&
                <Login login={login} setLogin={setLogin}/>
              }
            </>
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
