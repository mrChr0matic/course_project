import './App.css';
import Header from './components/header';
import MainBody from './components/main-body';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='content'>
          <div className='content-1'>
            <Sidebar/>
          </div>
          <div className='content-2'>
            <MainBody/>
          </div>
        </div>
    </div>
  );
}

export default App;
