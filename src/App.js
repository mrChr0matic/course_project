import { useState } from 'react';
import './App.css';
import Community from './components/community';
import Create from './components/create';
import Header from './components/header';
import MainBody from './components/main-body';
import Sidebar from './components/sidebar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/login';
import CreatePost from './components/postCreate';

function App() {  

  const [login,setLogin]=useState(false);
  const [post,setPost]=useState(false);
  const [community,setCommunity]=useState('')

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header login={login} setLogin={setLogin}/>
              <div className='content'>
                <div className='content-1'>
                  <Sidebar community={community} setCommunity={setCommunity}/>
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

          <Route path={`/community/${community.name}`} element={
            <>
              <Header login={login} setLogin={setLogin}/>
              <div className='content'>
                <div className='content-1'>
                  <Sidebar community={community} setCommunity={setCommunity}/>
                </div>
                <div className='content-2'>
                  <Community name={community.id} post={post} setPost={setPost}/>
                </div>
              </div>
              {
                login &&
                <Login login={login} setLogin={setLogin}/>
              }
              {
                post &&
                <CreatePost post={post} setPost={setPost} />
              }
            </>
          }>
          </Route>

          <Route path='/create' element={
            <>
              <Header login={login} setLogin={setLogin}/>
              <div className='content'>
                <div className='content-1'>
                  <Sidebar community={community} setCommunity={setCommunity}/>
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
