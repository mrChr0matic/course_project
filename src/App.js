import './App.css';
import Community from './components/community';
import Header from './components/header';
import MainBody from './components/main-body';
import Sidebar from './components/sidebar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
            <Header/>
            <div className='content'>
              <div className='content-1'>
                <Sidebar/>
              </div>
              <div className='content-2'>
                <MainBody/>
              </div>
            </div>
            </>
          }>
          </Route>

          <Route path='/community' element={<>
            <Header/>
            <div className='content'>
              <div className='content-1'>
                <Sidebar/>
              </div>
              <div className='content-2'>
                <Community/>
              </div>
            </div>
            </>
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
