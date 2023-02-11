
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Shape from './components/Shape';
import Button from './components/Button';

function App() {
  return (

    <div className ="App">
      <Header></Header>
      <div className="body">
        <div className='body-left'><Sidebar></Sidebar></div>
        <div className='body-right'><Content></Content></div>
      </div>
      <Shape type = "circle" backgroundColor="black" />
      <Shape type = "square" backgroundColor="red" />

      <Button backgroundColor ="green" text="Success"></Button>
      <Button></Button>
      <Button backgroundColor ="red" text="Error"></Button>
      <Button backgroundColor ="yellow" text="Warning"></Button>

      <Shape type="square" backgroundColor="red"></Shape>
      <Button backgroundColor ="green" text="Click to change!!"></Button>
    </div>
  );
}

export default App;
