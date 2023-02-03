
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (

    <div className ="App">
      <Header></Header>
      <div className="body">
        <div className='body-left'><Sidebar></Sidebar></div>
        <div className='body-right'><Content></Content></div>
      </div>

    </div>
  );
}

export default App;
